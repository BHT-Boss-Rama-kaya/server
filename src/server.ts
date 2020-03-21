// import express from 'express';
// import { ApolloServer } from 'apollo-server-express';
// import depthLimit from 'graphql-depth-limit';
// import { createServer } from 'http';
// import compression from 'compression';
// import cors from 'cors';
// import schema from './schema';

// const app = express();
// const server = new ApolloServer({
//     schema,
//     validationRules: [depthLimit(7)]
// });

// app.use('*', cors());
// app.use(compression());
// server.applyMiddleware({ app, path: '/graphql' });
// // const httpServer = createServer(app);
// // httpServer.listen({ port: 3000 }, (): void =>
// //     console.log(`\n🚀      GraphQL is now running on http://localhost:3000/graphql`)
// // );

import express from 'express';
import cors from 'cors';
import { router } from './router/index';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', router);

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
