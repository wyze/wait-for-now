import nock from 'nock'
import pWaitFor from 'p-wait-for'

process.env.TRAVIS_REPO_SLUG =
  process.env.TRAVIS_REPO_SLUG || 'wyze/wait-for-now'
process.env.TRAVIS_COMMIT = process.env.TRAVIS_COMMIT || 'abcd1234'

nock('https://api.github.com')
  .persist()
  .get(
    `/repos/${process.env.TRAVIS_REPO_SLUG}/commits/${
      process.env.TRAVIS_COMMIT
    }/statuses`
  )
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

test('it sets NOW_DEPLOYED_URL environment variable', async () => {
  require('..')

  await pWaitFor(() => process.env.NOW_DEPLOYED_URL !== undefined)

  expect(process.env.NOW_DEPLOYED_URL).toBe('https://someurl-hash.now.sh')
})
