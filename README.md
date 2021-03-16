# Graphql React Event Booking

Project on [Youtube](https://www.youtube.com/watch?v=yvEEeKMuxn0&list=PL55RiY5tL51rG1x02Yyj93iypUuHYXcB_&index=3&ab_channel=Academind) to learn GraphQL with tutorials playlist

## Required Software

1. Visual Studio Code as IDE
1. Chrome or any other browser for testing and development tools
1. Postman to make complex queries (with authentication headers etc.).

## Required Packages

1. nodejs npm:

    ```sudo pacman -S nodejs npm```

## Backend

### Backend Required Packages

1. Install express server

    ```npm install --save express```

1. Install nodemon for auto restart

    ```npm install --save-dev nodemon```

1. Install middleware package for express nodejs applications and graphql package

    ```npm install --save express-graphql graphql```

1. Install mongoose to connect to online mongoDB at the [address](www.mongodb.com)

    ```npm install --save mongoose```

1. Install bcrypt to hash passwords

    ```npm install --save bcryptjs```

1. Install json web token to issue authorization tokens to users

    ```npm install --save jsonwebtoken```

### Backend Setup Commands

1. Create directory and initialize git repository if required.

1. Run the commad and select defaults using ``Enter Key``

    ```npm init```

1. Start app by running

    ```nodemon app.js```

    > After adding the run configurations to ``nodemon.json``, you can start server using command ``npm start``

1. Setup MongoDB on the [website](www.mongodb.com)

    * Signup on the website for free account
    * Add user with atleast Read and Write access to the database
    * Add your IP to IP Whitelist
    * Add mongodb user name and password to ``nodemon.js``
    * Connect application to database cluster. Click ``Connect`` button on the mongodb website and copy `SRV` string from the page.
    * Put the string in ```mongoose.connect(<String>)``` and replace `max` with ``$(process.env.MONGO_USER)`` and `<PASSWORD>` with ``$(process.env.MONGO_USER)``

1. To bactch all the requests in one query to avoid database round trips. Install ``DataLoader`` using following command:

    ```npm install --save dataloader```

## Frontend

### Frontend Setup Commands

1. Create a folder ``frontend`` in the main project directory.

1. Change directory to the ``frontend`` using terminal.

1. Run command ```npx create-react-app``` to setup React project in the frontend folder.

1. To add routing to the single page application, we need to install react-router-dom using following command.

    ```npm install --save react-router-dom```