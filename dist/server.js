"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_yoga_1 = require("graphql-yoga");
/*
Scalar Types

String Boolean, Int, Float, ID
*/
// Type definitions
var typeDefs = "\ntype Query {\n   me: User!\n   post: Post!\n}\n\ntype User {\n    id: ID!\n    name: String!\n    email: String!\n    age: Int\n}\n\ntype Post {\n    id: ID!\n    title: String!\n    body: String!\n    published: Boolean!\n}\n";
// Resolvers
var resolvers = {
    Query: {
        me: function () {
            return {
                id: '123',
                name: 'Brian',
                email: 'brianbawuah96@gmail.com',
                age: 28
            };
        },
        post: function () {
            return {
                id: '234r4',
                title: 'GraphQL is nice',
                body: 'This is the body of the article',
                published: false
            };
        }
    }
};
var server = new graphql_yoga_1.GraphQLServer({
    typeDefs: typeDefs,
    resolvers: resolvers
});
server.start(function () {
    console.log('The server is up and running');
});
