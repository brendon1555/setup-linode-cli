<p align="center">
  <a href="https://github.com/brendon1555/setup-linode-cli/actions"><img alt="typescript-action status" src="https://github.com/brendon1555/setup-linode-cli/workflows/build-test/badge.svg"></a>
</p>

![linode-logo](.github/linode-logo.svg)

This action sets up the Linode cli for use in your Workflow. https://github.com/linode/linode-cli

## Usage

Example:
```yaml
name: Test Linode cli
on: push
jobs:
  job-name:
    steps:
    - uses: actions/checkout@master
    - name: Setup Linode cli
      uses: brendon1555/setup-linode-cli@master
      with:
        LINODE_CLI_TOKEN: ${{ secrets.LINODE_CLI_TOKEN }}
    - run: linode-cli --help
```

## License

The scripts and documentation in this project are released under the [MIT License](LICENSE)
