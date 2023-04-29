# Car Rental Application

### Table of Contents
**[Introduction](#introduction)**<br>
**[Technical Details](#technical-details)**<br>

## Introduction


## Technical Details
  ### Database structure
  #### Database name: car_rental_system
  #### Models
    UserModel (Fields: name, email, password)
    RolesModel (Fields: id (ref: UserModel), role)
    CarsModel (Fields: id (ref: UserModel), carname, company, type, price, image)
  #### Controllers
    UserController
    RolesController
    CarsController
  #### Routes
    UserRoutes
    RolesRoutes
    CarsRoutes
  #### APIs List (/auth)
    User Registration (POST): /auth/register
    User Login (POST): /auth/login
    Defining user roles (POST): /auth/roles
    Fetching the car details (GET): /auth/cardetails
