const Usermod = require('../models/UserModel.js')
const bcrypt = require('bcryptjs')
 const jwt = require('jsonwebtoken')

 const secret = "trop27@_^sjsk"

const signin = async (req, res) =>{
    try{
        const {email, password} = req.body
        const user = await Usermod.findOne({email: email})
            
                if(!user){
                    return res.status(401).json({message: "Invalide email or password"})
                }
                const isMatch = await bcrypt.compare(password, user.password)
                if (!isMatch){
                    return res.status(401).json({message: "Invalid email password"})
                }
                
                const payload = {userId: user._id}
            const token = jwt.sign(payload, secret, {expiresIn: '1h'} )
                

                res.json({
                    message: "Successful login",
                    token: token
                })

    } catch (error){


        res.status(500).json({message: "server error"})
    }


}
const signup = async (req, res) =>{
    try {
        if (
            !req.body.firstname ||
            !req.body.lastname ||
            !req.body.email ||
            !req.body.password
        ){
    
            return res.status(400).send({
                  message: "Send all required feilds: firstname, lastname, email, password"
            })
      }
    
        
           const {firstname, lastname, email, password} = req.body
           const salt = await bcrypt.genSalt(10);
           const harshedpassword = await bcrypt.hash(password, salt)
           const user = new Usermod({
            firstname,
            lastname,
            email,
            password: harshedpassword
           });
           const userRegdata = await user.save();
           res.status(200).json(userRegdata);
            
    } catch (error) {
        if (error.code === 11000 && error.keyValue.email){
            res.status(409).json({message: "Email already exists! "})
        }
        res.status(500).json({message: "Server Error!"})

    }
}

const forgotpassword = async (req, res) =>{

    
}

const verifyemail = async () =>{

}
module.exports = {
    signin,
    signup,
    forgotpassword,
    verifyemail
}