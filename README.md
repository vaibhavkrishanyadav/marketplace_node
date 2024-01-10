# Marketplace Node

![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## Overview

Marketplace Node is a Node.js-based backend for a marketplace application. It provides a solid foundation for building an online marketplace with user authentication, product management, and order processing functionalities.

## Features

- **User Authentication:** Secure user registration and login.
- **Product Management:** CRUD operations for managing products.
- **Order Processing:** Place and track orders efficiently.
- **Scalable:** Built with scalability in mind, allowing for future expansion.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/vaibhavkrishanyadav/marketplace_node.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the application:

   ```bash
   npm run dev
   ```

4. Access the API at `https://marketplace-server-u647.onrender.com`.

## API Endpoints

- **POST /api/users/register:** Register a new user.
- **POST /api/users/login:** Authenticate and generate a JWT token.
- **GET /api/category:** Retrieve all categories.
- **GET /api/category/:id:** Retrieve a specific category.
- **POST /api/category:** Add a new category.
- **PUT /api/category/:id:** Update a category.
- **DELETE /api/category/:id:** Delete a category.
- **GET /api/category/product:** Retrieve all products of a category.
- **GET /api/category/product/:id:** Retrieve a specific product.
- **POST /api/category/product:** Add a new product.
- **PUT /api/category/product/:id:** Update a product.
- **DELETE /api/category/product/:id:** Delete a product.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.