import { GraphQLServer } from 'graphql-yoga'

// Type definitions

const typeDefs = `
type Query {
    hello: String!
    name: String!
    location: String!
    bio: String!
}
`

// Resolvers
const resolvers = {
  Query: {
    hello() {
      return 'This is my first query!'
    },
    name() {
      return 'Brian Bawuah'
    },
    location() {
      return 'Almere'
    },
    bio() {
      return 'Creating digital products!'
    }
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start(() => {
  console.log('The server is up and running')
})
