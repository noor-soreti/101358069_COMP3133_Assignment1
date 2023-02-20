const { gql } = require('apollo-server-express')

const typeDefs = gql`
    input EmployeeInput {
        firstname: String
        lastname: String
        email: String
        designation: String
        gender: String
        salary: Float   
    }

    type User {
        _id: ID
        username: String!
        email: String
        password: String!
    }

    type Employee {
        _id: ID
        firstname: String!
        lastname: String!
        email: String!
        designation: String
        gender: String!
        salary: Float!
    }

# Query
    type Query {
        getAllUsers: [User!]!
        getAllEmployees: [Employee!]!
        login(username: String!, password: String!, email: String!): User
        searchEmployee(_id: ID!): Employee
    }

# Mutations
    type Mutation {
        signup(
            username: String!, 
            email: String!, 
            password: String!
            ): User
        updateEmployeeById(
            _id: ID!,
            input: EmployeeInput!
            ): Employee
        createEmployee(
            input: EmployeeInput!
            ): Employee
        deleteEmployeeById(_id: ID!): Employee
    }
`
module.exports = {typeDefs}
