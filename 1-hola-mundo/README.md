# Curse notes

## Create typescript file

`npx tsc --init --rootDir src --outDir build --lib dom,es6 --module commonjs --removeComments --target es6`

## Dependecies

Production

`npm install express express-graphql graphql ncp http graphql-import-node compression graphql-tools graphql-playground-middleware-express cors`

Development

`npm install @types/compression @types/express @types/cors @types/express-graphql @types/node -D`
