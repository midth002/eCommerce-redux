const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type: category {
        _id: ID
        name: String
    }
    
    type Order {
        _id: ID
        purchaseDate: String
        products: [Product]
    }

    type Product {
        _id: ID 
        name: String
        description: String
        image: String 
        quantity: int 
        price: Float
        category: Category
    }

    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        orders: [order]
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        categories: [Category]
        products(category: ID, name: String): [Product]
        product(_id: ID!): Product
        user: user
        order(_id: ID!): Order
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        addOrder(products: [ID]!): Order
        updateUser(firstName: String, lastName: String, email: String, password: String): user
        updateProduct(_id: ID!, quantity: Int!): Product
        login(email: String!, password: String!): Auth
    }
    
    `;