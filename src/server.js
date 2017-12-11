import express from 'express';
import setupMiddware from './middleware';
import { graphQLRouter } from './api';
import { graphiqlExpress } from 'apollo-server-express';
import { connect } from './db';
import cors from 'cors';

const app = express();

setupMiddware(app);
connect();

app.use('*', cors({ origin: 'http://localhost:8080' }));
app.use('/graphql', graphQLRouter);
app.use('/docs', graphiqlExpress({ endpointURL: '/graphql' }));

export default app;
