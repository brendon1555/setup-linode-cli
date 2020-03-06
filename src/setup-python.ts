import * as core from '@actions/core'
import * as finder from './find-python'
import * as path from 'path'

async function run(): Promise<void> {
  try {
    await finder.enableAllPythonVersions()

    const matchersPath = path.join(__dirname, '..', '.github')
    const linodeCliToken: string = core.getInput('LINODE_CLI_TOKEN')
    console.log(`::set-env name=LINODE_CLI_TOKEN::${linodeCliToken}`)
    console.log(`##[add-matcher]${path.join(matchersPath, 'python.json')}`)
  } catch (err) {
    core.setFailed(err.message)
  }
}

run()
