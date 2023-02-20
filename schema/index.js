const { ApolloServer } = require('apollo-server-express')
const { typeDefs } = require('./TypeDefs')
const { resolvers } = require('./Resolvers')

const app = require('../app').app

const server = new ApolloServer({ typeDefs, resolvers })

const port = 3000

server.start().then(res => {
    server.applyMiddleware({ app });
    app.listen({ port }, () => 
      console.log(`Gateway API running at port: localhost:${port}${server.graphqlPath}`)
    );  
  });