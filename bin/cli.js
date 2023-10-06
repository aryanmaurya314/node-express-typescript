#!/usr/bin/env node

const { execSync } = require('child_process');

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: 'inherit' });
    return true;
  } catch (err) {
    console.log(`Failed to execute ${command}`, err);
    return false;
  }
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/aryanmaurya314/node-express-typescript.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && yarn`;

console.log(`Cloning the repository with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(-1);

console.log('Congratulations! You are ready.');
console.log(`Follow the following commands to start: 
    1. move to cloned project run command "cd ${repoName}"
    2. add your environment variables to ".env/development"
    3. to start the development server run command "yarn dev"`);
