const data = require('../MOCK_DATA.json');
const express = require('express');
const fs = require('fs').promises;

const addUser = async(req,res)=>{
try {

    const newUser = req.body;
    if (!newUser.first_name || !newUser.last_name || !newUser.email) {
        return res.status(400).json({
            message: 'Missing required fields',
        });
    }
    data.push({ id: data.length+1, ...newUser})
    fs.writeFile('\MOCK_DATA.json', JSON.stringify(data, null, 2)).then(()=>res.json({message:'user inserted success', user:newUser}));
} catch (error) {
    return res.status(500).json({
        message:'something went wrong',
        error:error.message
    })
}


}

module.exports = addUser;