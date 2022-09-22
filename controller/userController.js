const User = require('../model/user');
const validationReg = require('../controller/validation')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const getUser = async(req,res)=>{
    User.find().sort({createdAt: -1}).then((users)=>{
                // res.json(users);
                res.render('users', {userLists:users})
            })
}

// const maxAge = 3*24*60*60;
// const createToken = (id) =>{
//     return jwt.sign({ id },'oursecret', {expiresIn:maxAge })
// }



const addUser = async(req, res) =>{

    const {error} = validationReg(req.body);

    //hashing
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(req.body.password, salt)

    //error handler 
    if(error) return res.status(400).send(error.details[0].message);

    //check email if existing
    const userEmail = await User.findOne({email:req.body.email});
    if(userEmail) return res.status(402).send("Email already used");
    // const token = createToken(userEmail.id)
      const user = new User({
                            user_name : req.body.user_name, 
                            email : req.body.email,
                            password:hashPass,
                        })
    await user.save()
    .then(result => res.redirect('/marketplace'))
    .catch(err => console.log(err));
  

    
}

module.exports = {
    getUser,
    addUser
}