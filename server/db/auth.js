import connection from './connection'
import jwt from 'jsonwebtoken'
import config from '../config/jwt'

const auth = (data, res) => {
    const login = data.login
    const pass = data.password
    const sql = 'SELECT * FROM `users` WHERE `users`.`login` = "' + login + '" AND `users`.`password` = "' + pass + '"'

    connection.query(sql, (err, result) => {
        if (err)
            console.log(err)
        else {
            const user = JSON.parse(JSON.stringify(result))
            if (user[0] != null) {
                const token = jwt.sign({
                    username: user[0].login,
                    id: user[0].id
                }, config.jwtSecret)
                res.json({ token })
            }
            else {
                res.send("error") // send "error" if there are no matches in DB
            }
        }
    })
}

export default auth