# Graphql React Event Booking

Project on [Youtube](https://www.youtube.com/watch?v=yvEEeKMuxn0&list=PL55RiY5tL51rG1x02Yyj93iypUuHYXcB_&index=3&ab_channel=Academind) to learn GraphQL with tutorials playlist



## Packages to be installed

1. nodejs npm:

    ```sudo pacman -S nodejs npm```

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




## Setup Commands

1. Create directory and initialize git repository if required.

1. Run the commad and select defaults using ``Enter Key``

    ```npm init```


1. Start app by running

    ```nodemon app.js```
> Node: After adding the run configurations to ``nodemon.json``, you can start server using command ``npm start``

1. Setup MongoDB on the [website](www.mongodb.com)
    
    * Signup on the website for free account
    * Add user with atleast Read and Write access to the database
    * Add your IP to IP Whitelist
    * Add mongodb user name and password to ``nodemon.js``
    * Connect application to database cluster. Click ``Connect`` button on the mongodb website and copy `SRV` string from the page.
    * Put the string in ```mongoose.connect(<String>)``` and replace `max` with ``$(process.env.MONGO_USER)`` and `<PASSWORD>` with ``$(process.env.MONGO_USER)``
