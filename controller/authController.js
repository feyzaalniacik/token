const User = require("../model/User")
const Role = require("../model/Role")


const {validationResult} = require('express-validator')

class authController {
    async registration (req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty) {
                return res.status(400).json({message: "Errors", errors})
            }
            // const username = req.body.username (alttaki bunun daha iyi versiyonudur. bu yüzden o kullanılır.)
            const {username, password} = req.body
            const candidate = await User.findOne({username}) // database'te aynı username ile bir kullanıcı var mı diye kontrol ediyor
            if (candidate) {
                return res.status(400).json({message: "User exists.."})
            }
            // username kaydedildikten sonra password kaydedilmelidir ve bu kayıt normal olarak değil şifreli olarak kaydedilmelidir
            const hashPassword = bcrypt.hashSync(password, 7) // buradaki 7 salt'tır ve şifreyi karıştırmaya yarar
            const userRole = await Role.findOne({value: "USER"})
            const user = new User({username, password: hashPassword, roles: [userRole.value]})
            await user.save()
            res.json({message: "user seccesfully  created"})

        } catch (error) {

        }
    }
}



module.exports = authController