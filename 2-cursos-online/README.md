# Curse notes

## Create typescript file

`npx tsc --init --rootDir src --outDir build --lib dom,es6 --module commonjs --removeComments --target es6 --resolveJsonModule true`

## Dependecies

Production

`npm install express graphql ncp http graphql-import-node compression cors lodash typescript graphql-tools graphql-playground-middleware-express apollo-server-express`

Development

`npm install @types/compression @types/express @types/cors @types/lodash @types/node @types/graphql -D`
