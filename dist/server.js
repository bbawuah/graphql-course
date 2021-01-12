"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_yoga_1 = require("graphql-yoga");
// Type definitions
var typeDefs = "\ntype Query {\n    hello: String!\n    name: String!\n    location: String!\n    bio: String!\n}\n";
// Resolvers
var resolvers = {
    Query: {
        hello: function () {
            return 'This is my first query!';
        },
        name: function () {
            return 'Brian Bawuah';
        },
        location: function () {
            return 'Almere';
        },
        bio: function () {
            return 'Creating digital products!';
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
