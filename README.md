# Todo App 

A simple and user friendly app to manage your day to day tasks with an ability of : 
  - 
  - File management ( Attach, View, Download ) for each of your task if required
  - Edit, Archive, Delete
  - Prioritise while Adding each task
  - Export your list to PDF and carry away
  - User management, with a feature of email notification upon registration

App is built with Node-MongoDB and React-Redux architecture.
Node provides the RESTful API. React provides the frontend and accesses the API. MongoDB stores like a hoarder.

## Requirements

- [Node and npm](http://nodejs.org)
- Strong Internet to avoid Topology error as DB is hosted on mongo lab.

## Installation

1. Clone the frontend repository: `git clone https://github.com/vijayyennam/todo-app-client.git`
2. Change the directory
3. Install the application: `npm install`
4. Run the application: `npm start`
5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

6. Also you will have to clone and run the Node API server separately from [https://github.com/vijayyennam/todo-app-server](https://github.com/vijayyennam/todo-app-server)

## You can also visit below link for Demo

[https://vijayyennam.github.io/todo-app-client/](https://vijayyennam.github.io/todo-app-client/)


-----------------------------------------------------------------------------------------------------------------------------

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
