const express = require('express');
const data = require('../MOCK_DATA.json');

const fetchAllUsers = (req, res) => {
    try {
        const users = data
        res.json(users);
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong in fetching the users',
            error: error.message
        });
    }
}

module.exports = fetchAllUsers;
