# CitiesSearch Microservice

## Overview

The **CitiesSearch** microservice allows CRUD operations for managing cities. This service is built using **Node.js**, **Express**, and **Sequelize ORM** with **MySQL** as the database.

---

## Features

- **Create** new cities.
- **Update** existing cities.
- **Retrieve** specific cities or all cities.
- **Delete** cities.
- **Comprehensive Error Handling**.

## API Endpoints
- POST /api/city - Create a new city.
- GET /api/city/:id - Retrieve a city by ID.
- GET /api/city - Retrieve all cities.
- PATCH /api/update-city/:id - Update a city by ID.
- DELETE /api/delete-city/:id - Delete a city by ID.

---

## Tech Stack

- **Backend Framework**: Node.js, Express
- **ORM**: Sequelize
- **Database**: MySQL
- **File Structure**: Modular, Service-Oriented Architecture

---

## Project Structure

```plaintext
AirportCitiesSearch/
├── controllers/         # Handle HTTP requests and responses
│   └── city-controller.js
├── migrations/          # Sequelize migrations for database schema
├── models/              # Sequelize models for Cities
│   └── city.js
├── repositories/        # Data access layer
│   └── cityRepository.js
├── routes/              # API routes
│   └── cityRoutes.js
├── services/            # Business logic layer
│   └── cityService.js
├── utilities/           # Utility functions (error handling, responses, async handlers)
│   └── errorHandler.js
│   └── responseHandler.js
│   └── asyncHandler.js
├── config/              # Database and environment configurations
│   └── dbConfig.js
│   └── envConfig.js
├── app.js               # Main Express app
├── package.json
└── README.md
