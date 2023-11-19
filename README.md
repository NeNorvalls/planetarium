# React Planets App

![React Planets App](path/to/your/screenshot.png)

This is a simple React application that displays information about different planets in our solar system.

## Components

### 1. App Component (App.js)

The main component that sets up the application structure, manages the state for the list of planets, and provides planet data to other components through the Context API.

### 2. Context Component (context.js)

Creates a React context to share the list of planets across different components.

### 3. PlanetList Component (PlanetList.js)

Renders a list of PlanetItem components and utilizes the Context API to access the planet data.

### 4. PlanetItem Component (PlanetItem.js)

Displays details about each planet, such as name, weight, size, etc. It receives data from the Context API and renders individual planet items.

### 5. Filter Component (Filter.js)

A placeholder component that currently displays the text "Filter Component." You can enhance this component with filtering functionality.

## Data

### planetData (data.js)

Contains an array of objects, each representing data about a planet, including its name, weight, size, distance from the sun, material, image, and existence years.

## Usage

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the application using `npm start`.
