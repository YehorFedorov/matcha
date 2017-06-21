import express from 'express';
import registration from '../db/new_user'
import reset from '../db/reset'
import auth from '../db/auth'

const rout = express.Router();

rout.post('/user/login', (req, res) => {
    console.log(req.body)
    auth(req.body, res)
})

rout.post('/user/registration', (req, res) => {
    console.log(req.body)
    registration(req.body, res)
})

rout.post('/user/reset', (req, res) => {
    console.log(req.body)
    reset(req.body, res)
})


export default rout