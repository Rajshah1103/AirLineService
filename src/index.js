const express = require('express');
const bodyParser = require('body-parser');

const { PORT }  = require('./config/serverConfig');
const db = require('./models/index');
const ApiRoutes = require('./routes/index');

const setupAndStartServer = async() => {

    // create the express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use('/api',ApiRoutes);

    app.listen(PORT, ()=> {
        console.log(`server is started at ${PORT}`);
        if(process.env.SYNC_DB) {
            db.sequelize.sync({ alter: true })
        }
    })
}

setupAndStartServer();