This is a personal project for backend of persian education app

Database is Postgres local: libraries: pg pg-hstore sequelize  
Authentication is Passport: libraries: passport passport-local

Main files are:
app.js
passport-config.js

    routes/         auth.js
    routes/         exercise.js
    routes/         question.js

    controllers/    auth.js
    controllers/    exercise.js
    controllers/    question.js

    db/             db-init.js
    db/             db-functions.js
    db/             models.js
    db/             exercises/ functions.js
    db/             exercises/ raw-data.js

including exercises in db that includes raw data for 6 question types and functions to adapt SQL data to frontend education app (columns manipulations)

Views are:

    index.ejs
    login.ejs
    register.ejs
