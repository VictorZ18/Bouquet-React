const User = require('../models/user.js');

class UserController {
    static getAllDoc = async (req, res) => {
        try {
            const result = await User.find()
            res.send(result)
        } catch (error) {
            console.log(error)
        };
    }
    static create_a_user = async (req, res) => {
        const newUser = new User(req.body)
        try {
            const result = await newUser.save()
            res.send(result)
        } catch (error) {
            console.log(error)
        };
    }
    static read_a_user = async (req, res) => {
        try {
            const result = await User.findById(req.params.id)
            res.send(result)
        } catch (error) {
            console.log(error)
        };

    }
    static authenticate = async () => {
        const { email, password } = body();
        const user = User.find(x => x.email === email && x.password === password);

        if (!user) return error('Username or password is incorrect');

        return ok({
            ...basicDetails(user),
        });
    }
    static loginUserControllerFn = async (req, res) => {
        console.log('loginUserControllerFn');
        try{
            const user = await User.findOne({email:req.body.email});
            if(user.password===req.body.password){
                console.log("User found");
                res.send(user._doc);
            }
            else{
                console.log("User not found");
                res.send({ message: "auth failed" });
            }
        }
        catch{
            res.send({ message: "Wrong details" });
        }
    }
}

module.exports = UserController;