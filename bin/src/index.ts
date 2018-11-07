import Octokit from '@octokit/rest'
import got from 'got'
import pWaitFor from 'p-wait-for'

const octokit = new Octokit()

const [owner, repo] = process.env.TRAVIS_REPO_SLUG.split('/')
const ref = process.env.TRAVIS_PULL_REQUEST_SHA

const getSuccessfulDeployment = async () => {
  octokit.authenticate({ token: process.env.GITHUB_API_TOKEN, type: 'oauth' })

  const { data } = await octokit.repos.getStatuses({ owner, ref, repo })
  const deployments = data.filter((item) => /^(deployment\/)?now$/.test(item.context))

  return deployments.find((item) => item.state === 'success')
}

const deployed = async () => (await getSuccessfulDeployment()) !== undefined

// Run the checker
;(async () => {
  await pWaitFor(deployed, { interval: 15000 })

  const { target_url: url } = await getSuccessfulDeployment()
  const deploymentId = url.split('=').pop()
  const {
    body: { host },
  } = await got(`https://api.zeit.co/v2/now/deployments/${deploymentId}`, {
    headers: {
      authorization: `Bearer ${process.env.ZEIT_API_TOKEN}`,
    },
    json: true,
  })

  console.log(`https://${host}`)
})()
