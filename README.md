
# Vehicle Models Application

This is a web application that allows users to select a vehicle make and model year, then fetch and display vehicle models for the selected make and year. The application uses data from the [NHTSA API](https://vpic.nhtsa.dot.gov/api/).

## Features

- **Search for Vehicle Makes**: Select a vehicle make from a list.
- **Select Model Year**: Choose a model year for the selected make.
- **Fetch Vehicle Models**: Displays a list of available vehicle models for the selected make and model year.
- **Error Handling**: Displays error messages when the data fetch fails.
- **Loader**: Displays a loading spinner while waiting for the data.

## Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (version 16 or higher)
- **npm** (Node Package Manager)
- **Git** (for version control)

## Setup

### 1. Clone the repository

Clone this repository to your local machine using Git:

```bash
git clone https://github.com/yourusername/vehicle-models-app.git
```

### 2. Install dependencies

Navigate to the project folder and install the necessary dependencies using npm:

```bash
cd vehicle-models-app
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root of the project and add the following environment variable to it:
```plaintext
NEXT_PUBLIC_API_URL=<YOUR_API_URL_HERE>
```


### 4. Start the development server

Once all dependencies are installed, you can start the development server:

```bash
npm run dev
```

This will start the application, and you can view it in your browser at:

```
http://localhost:3000
```

### 5. Build the application

To build the application for production, run:

```bash
npm run build
```

This will create an optimized production build.

### 6. Run the production build

To start the application in production mode, use:

```bash
npm start
```

The app will run on `http://localhost:3000`.


### 6. Run the dev mode

To start the application in dev mode, use:

```bash
npm run dev
```

The app will run on `http://localhost:3000`.

## Learn More


API Endpoints

NEXT_PUBLIC_API_URL=https://vpic.nhtsa.dot.gov/api/vehicles

Get Makes for Vehicle Type: Retrieves a list of vehicle makes based on a specified vehicle type.
Endpoint: /GetMakesForVehicleType/car?format=json

Get Models for Make and Year: Retrieves vehicle models based on a specific make and model year.
Endpoint: /GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json

## Project Structure

### Main Folders and Their Purpose

#### 1. `app/`
This folder contains the core business logic of the project as well as utilities used across different parts of the application.
- **`page.tsx`**: This main page in our project (Filter Page).
- **`result/`**: This folder contains the Result Page.

#### 2. `src/`
This folder contains the main application logic, including components, hooks, and UI interfaces.

- **`components/`**: Contains all UI components used in the application. Components can be either functional or class-based and are responsible for rendering the user interface.
- **`lib/`**: Contains various libraries and utilities that provide general functionality for the project, such as price formatting, discount calculations, etc.
- **`types/`**: This folder holds TypeScript types that are used throughout the project to ensure type safety. It provides type definitions for various entities used in the application.
- **`hooks/`**: This folder holds custom React hooks that manage specific application logic:
  - **`useMakes/`**: A hook for fetching or processing data related to car makes.
  - **`useVehicleModel/`**: A hook for handling car model data.
- **`ui-kits/`**: Contains reusable UI components, such as buttons, forms, modals, etc. These components are designed to be used throughout the project to maintain a consistent UI design.



