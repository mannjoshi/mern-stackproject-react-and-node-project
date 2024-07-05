const express=require("express");
const adminController = require("../controllers/admin-controller");

const authMiddleware=require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");

const router=express.Router();

//logic to get the data of the user details
router.route('/users').get(authMiddleware,adminMiddleware,adminController.getAllUser)
router.route('/contacts').get(authMiddleware,adminController.getAllcontacts)
router.route('/users/delete/:id').delete(authMiddleware,adminController.deleteUserById)
router.route('/users/:id').get(authMiddleware,adminController.getUserById)
router.route('/users/update/:id').patch(authMiddleware,adminMiddleware,adminController.updateUserById);

router.route('/contacts/delete/:id').delete(authMiddleware,adminMiddleware,adminController.deleteContactById);

module.exports=router;