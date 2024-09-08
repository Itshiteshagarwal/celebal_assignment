const express = require('express');
const fs = require('fs').promises;
const data = require('../MOCK_DATA.json');

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userId = Number(id);

        const userIndex = data.findIndex(user => user.id === userId);
        if (userIndex === -1) {
            return res.status(404).json({
                message: 'User not found',
            });
        }

        const deletedUser = data.splice(userIndex,1)[0];

        await fs.writeFile('/MOCK_DATA.json', JSON.stringify(data, null, 2));
        res.json({
            message: 'User deleted successfully',
            user: deletedUser,
        });

    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong',
            error: error.message,
        });
    }
};

module.exports = deleteUser;
