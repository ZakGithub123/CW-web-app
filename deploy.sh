#!/usr/bin/env sh

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:ZakGithub123/CW1-web-app.git master:gh-pages
