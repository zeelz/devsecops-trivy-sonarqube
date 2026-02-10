# Trivy Scan Debug

## This repo demostrates how to fix vulnerable packages in codebase or base image

### Fixing Vulnerable Packages in Codebase 

- Installed "fixed" versions of affected packages as shown by Trivy
- Remove `package-lock.json` before installing fixed packages to regenerate `package-lock.json`
- Add package `overrides` in `package.json` with the newer packages
- 

### Fixing Base image Package

Uninstall vuln packages globally

`RUN npm uninstall -g @isaacs/brace-expansion tar`

Remove packages

`RUN rm -rf $(npm root -g)/isaacs/brace-expansion`

`RUN rm -rf $(npm root -g)/tar`

Install fixed packages "globally" to override base image package

`RUN npm install -g @isaacs/brace-expansion@^5.0.1 tar@^7.5.7`

But Trivy still sees old packages. Ignored CVEs in `.trivyignore` to pass CI

Until to find fix and update here


### Sonar Qube - coming soon