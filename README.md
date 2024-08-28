# E-commerce-website Backend API

Team : Keltouma ouyahia  _ Wassim Ouzoumart

This project is a backend API for an e-commerce application built with Node.js, Express, and MongoDB. It provides endpoints for user management, product handling, and order processing with authentication and authorization using JSON Web Tokens (JWT).

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
  - [User Management](#user-management)
  - [Product Management](#product-management)
  - [Order Management](#order-management)
- [Testing with cURL](#testing-with-curl)
- [Error Handling](#error-handling)
- [Security](#security)
- [Contributing](#contributing)
- [License](#license)

## Features

- User Registration and Login with JWT Authentication
- Product Management (Create, Read, Update, Delete)
- Order Management
- Secure Password Storage with bcrypt
- Input Validation and Error Handling

## Technology Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JSON Web Tokens (JWT)
- **Security:** bcrypt for password hashing

## Installation

1. Clone the repository:

   git clone https://github.com/yourusername/e-commerce-backend.git
   cd e-commerce-backend

2. Install the dependencies for both backend and frontend:
   cd backend
   npm install

   cd ../frontend
   npm install

3. Running the Application
   To start both the backend and frontend servers, use the following scripts:

   Start Backend Server
   npm run start:backend
   
   Start Frontend Server
   npm run start:frontend
