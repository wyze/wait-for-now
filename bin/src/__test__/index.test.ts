import nock from 'nock'
import pWaitFor from 'p-wait-for'

process.env.TRAVIS_REPO_SLUG = 'wyze/wait-for-now'
process.env.TRAVIS_PULL_REQUEST_SHA = 'abcd1234'
process.env.GITHUB_API_TOKEN = '111'

nock('https://api.github.com')
  .persist()
  .get(
    `/repos/${process.env.TRAVIS_REPO_SLUG}/commits/${
      process.env.TRAVIS_PULL_REQUEST_SHA
    }/statuses`
  )
  .query({ access_token: '111' })
  .reply(200, [
    {
      context: 'deployment/now',
      state: 'success',
      target_url: 'https://zeit.co/github/deployment?deploymentId=1aBcD2',
    },
  ])

nock('https://api.zeit.co')
  .get('/v2/now/deployments/1aBcD2')
  .reply(200, {
    host: 'someurl-hash.now.sh',
  })

test('it calls console.log with deployed url', async () => {
  const log = jest.spyOn(console, 'log')

  require('..')

  await pWaitFor(() => log.mock.calls[0] !== undefined)

  expect(log).toHaveBeenCalledWith('https://someurl-hash.now.sh')
})
