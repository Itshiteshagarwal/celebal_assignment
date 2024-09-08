const express = require('express');
const data = require('../MOCK_DATA.json');


const fetchUser = (req,res)=>{
    try {
        const id = Number(req.params.id)
        const user = data.find(user=>user.id ===id);

        if(!user){
            return res.status(404).json({
                message:'user not found',
            })
        }
        res.json(user);
        
    } catch (error) {
        return res.status(500).json({
            message:'something went wrong in fetching',
            error:error.message
        })
    }
}

module.exports = fetchUser