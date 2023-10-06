#!/bin/bash

echo "Making sure all dependencies are met"

if ! command -v yarn &> /dev/null; then
  echo "Yarn is not installed"
  echo "See yarn install docs: https://yarnpkg.com/getting-started/install"
  exit 1
fi

echo "Installing dependencies ..."
yarn

echo "Done, run \"yarn dev\" and start developing"
exit 0