const Router = require("express")
const { check } = require("express-validator")
const router = new Router()
const authController = require("../controller/authController")
const controller = new authController()

const {check} = require

router.post('/registration', 
        [
            check('username', 'username cannot be empty').notEmpty(),
            check('password', 'password must be 4-10 characters long').isLength({min:4, max:10})
        ],
        controller.registration)


module.export = router