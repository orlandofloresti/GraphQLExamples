import express from 'express';
import compression from 'compression';
import cors from 'cors';
// import { graphqlHTTP }  from 'express-graphql'; 
import schema from './schema';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';

const app = express();
app.use(cors());

app.use(compression());

const server = new ApolloServer({
    schema,
    introspection: true
});

// app.use('/', graphqlHTTP({
//     schema,
//     graphiql: true
// }))

server.applyMiddleware({app})

const PORT = 5300;

const httpServer = createServer(app);

app.listen(
    { port: PORT },
    () => console.log("Listening at http://localhost:5300/graphql") 
)