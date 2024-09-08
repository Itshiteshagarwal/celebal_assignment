const express = require('express');
const router = express.Router();

const fetchUser = require('../controller/fetch_user');
const fetchAllUsers = require('../controller/fetchall_user');
const addUser = require('../controller/add_user');
const updateUser = require('../controller/update_user');
const deleteUser = require('../controller/delete_user');
const validateUser = require('../middlware/validate');

router.get('/user/:id',validateUser, fetchUser);
router.get('/allusers', fetchAllUsers);
router.post('/adduser', addUser);
router.patch("/updateuser/:id",validateUser, updateUser);
router.delete('/deleteuser/:id',validateUser, deleteUser);

module.exports = router;