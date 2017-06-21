import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import connection from './db/connection'
import routes from './routes/routes'
import cors from 'cors'

const app = express();

const users_table = "CREATE TABLE IF NOT EXISTS users (" +
    "id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY," +
    "login VARCHAR(20) NOT NULL UNIQUE, " +
    "password VARCHAR(255) NOT NULL, " +
    "email VARCHAR(100) NOT NULL UNIQUE, " +
    "firstName VARCHAR(20) NOT NULL, " +
    "lastName VARCHAR(30) NOT NULL, " +
    "active INT(1) DEFAULT '0')"

connection.connect( (err) => {
    if (err) throw err
    connection.query(users_table)
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({origin: '*'}))

app.use('/', routes)

app.listen(3000);