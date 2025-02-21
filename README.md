<!-- action runner file -->

Skip to content
Navigation Menu
slashify-tech
sov-server

Type / to search
Code
Issues
Pull requests
Actions
Projects
Security
Insights
Settings
Node.js sov-server CI
added sanitization regex for efficient search #8
Jobs
Run details
Workflow file for this run
.github/workflows/node.js.yml at 2778182
# This workflow will do a clean installation of node dependencies, cache/restore them, build the source code and run tests across different versions of node
# For more information see: https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs

name: Node.js sov-server CI

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:

    runs-on: self-hosted

    strategy:
      matrix:
        node-version: [22.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
    - uses: actions/checkout@v4
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v4
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    - run: npm ci
    - name: Create .env file
      run: |
        cat <<EOF > .env
        ${{ secrets.PROD_ENV_FILE }}
        EOF
    # - name: Test printing your secret (Remove this step in production)
    #   run: |
    #       cat .env
    - run: pm2 restart backend