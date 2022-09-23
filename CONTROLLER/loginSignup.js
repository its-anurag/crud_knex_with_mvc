const express = require('express')
const jwt = require('jsonwebtoken')
const knex = require('../config_DATABASE/database')
const {genratetoken, veryfitoken} = require('../JWT/jwt')

alluserData = async(req,res)=>{
    try{
        const data = await knex('users')
        res.send(data)
    }
    catch(err){
        res.send('user not loged in ');
    }
}

insertUserData = async(req,res)=>{
    try{
        const data = await knex('users').insert(req.body)
        res.send({'user data inserted successfully ':req.body})
    }
    catch(err){
        res.send('user data not added;');
    }
}

loginUser =  async(req ,res)=>{
    try{
        const data =await knex('data').where(req.body)
        if(data.lenght !=0){
            const token = genratetoken(data[0].id)
            res.cookie('token',token)
            res.send({'login user data':data})
        }
        else{
            res.send('invalid email and password...')
        }
    }
    catch{
        res.send('data not found...')
    }
}

updateUserData =  async(req,res)=>{
    try{
        const data =await knex('data').where({id:req.id}).update(req.body)
        res.send({'update user data successfully :': req.body})
    }
    catch{
        res.send('please select correct http mothod')
    }
}

deleteUserData =  async(req,res)=>{
    try{
        const data = await knex('data').where({id:req.id}).delete(req.body)
        res.send('user data delete ')
    }
    catch{
        res.send('user data not find...')
    }
}

logoutUserData = async(req,res)=>{
    try{
        const data = await knex('data').where({id:req.id})
        res.clearCookie('token')
        res.send({'you are logout' : data[0]['name']})
    }
    catch{
        res.send('user not logout...')
    }
}

module.exports = {alluserData, insertUserData, loginUser,updateUserData, deleteUserData, logoutUserData}