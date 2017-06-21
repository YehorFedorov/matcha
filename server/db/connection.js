import mysql from 'mysql'
import config from '../config/config.json'

const con = mysql.createConnection({
    host     : config.database.host,
    user     : config.database.user,
    password : config.database.password
})

con.connect( (err) => {
    if (err) throw err
    con.query("CREATE DATABASE IF NOT EXISTS matcha")
})

export default mysql.createConnection({
    host     : config.database.host,
    user     : config.database.user,
    password : config.database.password,
    database   : config.database.dbName
})