const express = require('express');
const session = require('express-session');
const exphbs =  require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');
//const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

const SequelizeStore = require('connect-session-sequelize')(session.Store);

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
};

app.use(session(sess));

app.use(require('./controllers/'));

app.use(express.static('public'));
//Setup routes to the Server
//Look at /controllers folder
app.use('/', routes);

sequelize.sync({force:true}).then(()=>{
    app.listen(PORT, () => {
        console.log(`Server is listening at http://localhost:${PORT}`)
    });
});
