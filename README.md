# Project Title

## Introduction
This project aims to provide users with a streamlined form interface to collect user information, vehicle preferences, and booking dates for vehicle rentals.

## Project Type
Frontend | Backend | Fullstack

## Deplolyed App
Frontend: https://octalogic-o372h16p8-sgkolipyakas-projects.vercel.app/
Backend: https://octalogic-backend-1.onrender.com/

## Directory Structure
Backend (octa-backend)
├── Controllers
│   ├── userBookingRoutes.js:        Controller for handling user booking routes and logic.
│   └── vehiclesRoutes.js:           Controller for handling vehicle-related routes and logic.
├── Migrations:                       Database migration scripts.
├── Models
│   ├── UserBooking.js:               Model definition for user bookings.
│   └── Vehicle.js:                   Model definition for vehicle data.
├── index.js:                         Entry point for the backend application.
├── node_modules:                     Directory containing Node.js modules (dependencies).
├── seeders:                          Database seeding scripts.
├── .gitignore:                       Configuration file to specify files/folders that Git should ignore.
├── package-lock.json:                Automatically generated file describing the exact tree of npm packages that were installed.
└── package.json:                     File containing metadata and dependencies for the Node.js project.

Frontend (octa-frontend)
├── public:                           Static assets and HTML file used as the template for the React application.
└── src
    ├── Container
    │   ├── BookingDates.tsx:         Component for handling booking date selection.
    │   ├── BookingSuccessMessage.jsx: Component for displaying a success message after booking.
    │   ├── NameForm.tsx:             Component for capturing user name information.
    │   ├── NumberWeels.jsx:          Component for selecting the number of wheels.
    │   ├── SpecificModel.jsx:        Component for selecting a specific vehicle model.
    │   └── VehicleType.jsx:          Component for selecting the type of vehicle.
    ├── Context:                      Directory for managing React context providers and consumers.
    ├── Redux:                        Directory for Redux-related files such as reducers, actions, and store setup.
    ├── ReusableComponents:           Directory containing reusable UI components.
    ├── App.css:                      CSS file for styling the main application components.
    ├── App.test.tsx:                 Test file for testing React components.
    ├── App.tsx:                      Main component where other components are rendered.
    ├── index.css:                    CSS file for global styles.
    ├── index.tsx:                    Entry point for the React application.
    ├── logo.svg:                     SVG file used as the logo for the application.
    ├── react-app-env.d.ts:           TypeScript declaration file for global types.
    ├── reportWebVitals.ts:           File for reporting web vitals.
    ├── setupTests.ts:                File for setting up tests.
    ├── .gitignore:                   Configuration file to specify files/folders that Git should ignore.
    ├── README.md:                    Documentation file providing information about the frontend application.
    ├── package-lock.json:            Automatically generated file describing the exact tree of npm packages that were installed.
    └── package.json:                 File containing metadata and dependencies for the React project.
...




## Video Walkthrough of the project & Video Walkthrough of the codebase
[Attach a very short video walkthough of all of the features \[ 1 - 3 minutes \]](https://drive.google.com/file/d/1Aeal_1gEiFWZ7hBAKErM7qVgoaHynJ3e/view?usp=sharing)



## API Endpoints
In case of Backend Applications provide a list of your API endpoints, methods, brief descriptions, and examples of request/response.

GET /api/vehiclesbooked - Get all the info about users who have booked the vehicals

POST /api/userbookings - user can book the Vehicals

GET /api/getvehicle - Get all the info about available Vehicals for booking

POST /api/add - adding the vehicals into database for booking

PATCH /api/update/:id - To edit the vehicals info

## ScreenShots
1. Enter Name Page
   ![Screenshot (78)](https://github.com/SG-Kolipyaka/octalogic-tech/assets/113519884/85357d52-82f7-4418-8f75-402c71be4a33)
2. select number Wheels
   ![Screenshot (79)](https://github.com/SG-Kolipyaka/octalogic-tech/assets/113519884/a65f90df-876d-402e-957d-49467cb5e799)
3. Select the Type
   ![Screenshot (80)](https://github.com/SG-Kolipyaka/octalogic-tech/assets/113519884/4c9d8194-4081-433a-959e-856ee7d228d9)
4. select the Model
   ![Screenshot (81)](https://github.com/SG-Kolipyaka/octalogic-tech/assets/113519884/9cee2486-a297-4c09-bc11-6622ba56477b)
5. Select the Date
   ![Screenshot (82)](https://github.com/SG-Kolipyaka/octalogic-tech/assets/113519884/a18df4b7-08a9-4d92-95f5-f79d3dd4175d)
6. Date valadation
   ![Screenshot (83)](https://github.com/SG-Kolipyaka/octalogic-tech/assets/113519884/47466638-adc3-49c1-8376-e534dfc19829)
9. dooked Success page
    ![Screenshot (84)](https://github.com/SG-Kolipyaka/octalogic-tech/assets/113519884/276e25f2-7753-4c0a-ab2a-0c9f2e693651)




## Technology Stack
List and provide a brief overview of the technologies used in the project.

- Node.js
- Express.js
- React.js
- Redux
- MaterialUI
- MsQL
- typeScript
- JavaScript
