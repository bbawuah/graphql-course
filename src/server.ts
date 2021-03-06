import { GraphQLServer } from 'graphql-yoga'

/*
Scalar Types

String Boolean, Int, Float, ID
*/

// Type definitions
const typeDefs = `
type Query {
   me: User!
   post: Post!
}

type User {
    id: ID!
    name: String!
    email: String!
    age: Int
}

type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
}
`

// Resolvers
const resolvers = {
  Query: {
    me() {
      return {
        id: '123',
        name: 'Brian',
        email: 'brianbawuah96@gmail.com',
        age: 28
      }
    },
    post() {
      return {
        id: '234r4',
        title: 'GraphQL is nice',
        body: 'This is the body of the article',
        published: false
      }
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
