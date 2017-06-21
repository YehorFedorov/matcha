import connection from './connection'
import transporter from '../js/mail'
import mailConfig from '../config/mailConfig.json'
import validator from 'email-validator'
import md5 from 'md5'

const reset = (data, res) => {
    if (!validator.validate(data.email)) {
        res.send("error") // send "error" in case of wrong email-type
    }
    else {
        let sql = 'SELECT `id` FROM `users` WHERE `users`.`login` = "' + data.login + '"'
        connection.query(sql, (err, result) => {
            var uid= JSON.parse(JSON.stringify(result))
            if (uid[0] != null) {
                let mailOptions = {
                    from: mailConfig.from,
                    to: data.email,
                    subject: mailConfig.reset_subject,
                    text: 'To reset your password go for this link: http://localhost:8090/reset/pass/'+ md5(uid[0].id),
                }
                // transporter.sendMail(mailOptions, (err) => {
                //     if (err) throw err
                // })
                res.send('1')
            }
            else {
                res.send("error") // send "error" if there are no matches in DB
            }
        })
    }
}

export default reset
