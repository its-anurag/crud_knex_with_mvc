const express = require("express")
const {genratetoken, veryfitoken} = require('../JWT/jwt')
const {alluserData, insertUserData, loginUser, updateUserData, deleteUserData, logoutUserData} = require("../CONTROLLER/loginSignup")

const router =express.Router();

router.get('/alldata', alluserData)     // all user data show
router.post('/signup',insertUserData)   // signup user 
router.get('/login', loginUser)         // login user 
router.put('/update',veryfitoken, updateUserData)   // update current login user data 
router.delete('/delete',veryfitoken,deleteUserData) // delete currnent login user data 
router.get('/logout',veryfitoken, logoutUserData)   // logout current login user data

module.exports =router