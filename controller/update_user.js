const data = require('../MOCK_DATA.json');
const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userId = Number(id);

        const updates = req.body;
        const userIndex = data.findIndex(user => user.id === userId);

        if (userIndex === -1) {
            return res.status(404).json({
                message: 'User not found',
            });
        }

        const updatedUser = { ...data[userIndex], ...updates };
        data[userIndex] = updatedUser;

        const filePath = path.join(__dirname, '../MOCK_DATA.json');
        await fs.writeFile(filePath, JSON.stringify(data, null, 2));

        res.json({
            message: 'User updated successfully',
            user: updatedUser,
        });

    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error: error.message,
        });
    }
};

module.exports = updateUser;
