const express = require('express')
const router = express.Router();
const userController = require('../controller/userController')
router.get('/allusers',userController.getUsers)
router.put('/updateuser/:userID',userController.updateUser)
router.delete('/deleteuser/:userID',userController.deleteUser)
router.post('/insertuser',userController.insertUser)






module.exports = router;

 
