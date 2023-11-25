# Store API



## Table of Contents

- [Project Name](#project-name)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Folder Structure](#folder-structure)
  - [Configuration](#configuration)
  - [Routes](#routes)
  - [Controllers](#controllers)
  - [Middleware](#middleware)
  - [Models](#models)
  - [Documentation](#documentation)
  - [Testing](#testing)
  - [Contributing](#contributing)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)

## Overview

Welcome to the Store-api! This project is a comprehensive Node.js application built to manage various aspects of a hypothetical system, offering functionalities for user management, product handling, order processing, and financial transactions. The API leverages the Express.js framework for robust route handling and Prisma ORM for seamless interaction with the database.


## Technologies Used
- Node.js: A JavaScript runtime for server-side development.

- Express.js: A web application framework for Node.js, simplifying route handling and middleware integration.

- Prisma ORM: An open-source database toolkit for TypeScript and Node.js that simplifies database interactions.

- Swagger: API documentation tool for clear and accessible API exploration.

- Multer: A middleware for handling multipart/form-data, useful for file uploads.

- Cron: A time-based job scheduler for running periodic tasks.





## Features
  - User Management: Create and authenticate users, manage user roles, and retrieve user information.

  - Product Operations: Handle products, categories, and their associations, enabling efficient product management.

  - Client and Wallet Management: Create and manage clients, their wallets, and credit transactions.

  - Order Processing: Facilitate the creation, retrieval, and modification of orders, associating them with clients and products.

  - Financial Transactions: Track and manage financial transactions, providing insights into credit changes and financial activities.


## Installation

```bash
# Clone the repository
git clone https://github.com/Enrickyb/store-api.git

# Navigate to the project directory
cd store-api

# Install dependencies
npm install
```


## Folder Structure


```plaintext
- /src
  - /controllers
  - /middlewares
  - /providers
  - /routes
- /uploads
- /docs
- /tests
```


## Routes

### Users

#### Create User

```http
POST /api/users/create
```

Creates a new user.

##### Request

- Headers:
  - `Content-Type: application/json`

##### Body

```json
{
  "username": "example",
  "password": "examplepassword"
}
```

##### Response

- Status: 201 Created
- Body:

```json
{
  "message": "User created successfully"
}
```

#### User Login

```http
POST /api/users/login
```

Logs in a user.

##### Request

- Headers:
  - `Content-Type: application/json`

##### Body

```json
{
  "username": "example",
  "password": "examplepassword"
}
```

##### Response

- Status: 200 OK
- Body:

```json
{
  "token": "your-auth-token"
}
```

#### Get Users by Client ID

```http
GET /api/users/client/:client_id
```

Gets all users of a specific client.

##### Request

- Headers:
  - `Authorization: Bearer your-auth-token`

##### Response

- Status: 200 OK
- Body:

```json
[
  {
    "id": 1,
    "username": "user1"
  },
  {
    "id": 2,
    "username": "user2"
  }
  // ...
]
```

### Products

#### Create Product

```http
POST /api/products/create
```

Creates a new product.

##### Request

- Headers:
  - `Authorization: Bearer your-auth-token`
  - `Content-Type: multipart/form-data`

##### Body

- Form Data:
  - `file`: Product file
  - `thumbnail`: Product thumbnail
  - `name`: Product name
  - `price`: Product price
  - `category_id`: Category ID

##### Response

- Status: 201 Created
- Body:

```json
{
  "message": "Product created successfully"
}
```

#### Get All Products

```http
GET /api/products/all
```

Gets all products.

##### Request

- Headers:
  - `Authorization: Bearer your-auth-token`

##### Response

- Status: 200 OK
- Body:

```json
[
  {
    "id": 1,
    "name": "Product1",
    "price": 20.00,
    "categoryId": 1
  },
  {
    "id": 2,
    "name": "Product2",
    "price": 30.00,
    "categoryId": 2
  }
  // ...
]
```

## Controllers

Provide information about the purpose and functionality of each controller in your project.

- `UserController`: Manages user-related logic.
- `ProductController`: Handles product-related operations.

## Middleware

Explain the purpose of each middleware and when it is used.

- `authMiddleware`: Validates user authentication.
- `serverAdminMiddleware`: Ensures the user has server admin privileges.

## Models

List and describe the models used in your project. Include details about each model's fields and relationships.

- `User`: Represents a user with fields like `username` and `password`.
- `Product`: Represents a product with fields like `name` and `price`.

## Documentation

**Em desenvolvimento**

## Testing


```bash
# Run tests
npm test
```





