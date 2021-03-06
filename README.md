# Shakespearemon: To Catch 'Em All Or Not To Catch 'Em All, That Is The Question

Shakespearemon is the Pokédex with Shakespearean flavour, brought to you on a MERN stack.

======
Setup on Windows:
1. Download/install Node.js and MongoDB.
  1. Add the location of your MongoDB installation to %PATH% in your environment variables in System Properties.
  2. Go to the /backend/ directory and install Express.js, BodyParser, CORS, and Mongoose using 
  `npm install express body-parser cors mongoose` in the Command Terminal.
  3. Install a global package using `npm install -g nodemon` in the Command Terminal.
  4. Create a folder in the root C: directory called `data/db/` to house the JSON data.
  5. Go to the directory of `mongod.exe` (which should usually be 
  `C:\Program Files\MongoDB\Server\4.4\bin`) and use the `mongod` command.
2. Open another command terminal, navigate to the root folder of the project and enter `mongo`
3. Copy the contents of /scripts/shakespearemon_mongo_commands.txt into the Mongo terminal.
4. Navigate to /backend/ and enter `nodemon server` to start up the Express server.
5. Start sending GET requests to `localhost:4000/pokemon/<pokemon-name>` and have fun!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
