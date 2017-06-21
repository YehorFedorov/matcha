import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    service: 'gmail', // change email service
    auth: {
        user: '', // type here your email
        pass: '' // type here password from your email
    }
})

export default transporter