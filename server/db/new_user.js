import connection from './connection'
import transporter from '../js/mail'
import mailConfig from '../config/mailConfig.json'
import validator from 'email-validator'

const registration = (data, res) => {
    if (!validator.validate(data.email)) {
        res.send("error") // send "error" in case of invalid email-type
    }
    let sql = "INSERT INTO `users` (`login`, `password`, `email`, `firstName`, `lastName`) VALUES ?"
    let values = [
        [data.login.value, data.password.value, data.email, data.firstName, data.lastName]
    ]
    connection.query(sql, [values], (err) => {
        if (err)
            res.send('error') // send "error" if this user is already registered
        else {
            res.send('1')
            let mailOptions = {
                from: mailConfig.from,
                to: data.email,
                subject: mailConfig.reg_subject,
                text: 'Hello, ' + data.login.value + '!\nWelcome to Matcha!',
            }
            // transporter.sendMail(mailOptions, (err) => {
            //     if (err) throw err
            // })
        }
    })
}

export default registration
