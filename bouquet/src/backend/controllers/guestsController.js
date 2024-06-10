const Guest = require('../models/guests.js');

class GuestController {
    static getAllDoc = async (req, res) => {
        try {
            const result = await Guest.find()
            res.send(result)
        } catch (error) {
            console.log(error)
        };
    }
    static create_a_guest = async (req, res) => {
        const newGuest = new Guest(req.body)
        try {
            const result = await newGuest.save()
            res.send(result)
        } catch (error) {
            console.log(error)
        };
    }
    static read_a_guest = async (req, res) => {
        try {
            const result = await Guest.findById(req.params.id)
            res.send(result)
        } catch (error) {
            console.log(error)
        };

    }
    static authenticate = async () => {
        const { email, password } = body();
        const guest = Guest.find(x => x.email === email && x.password === password);

        if (!user) return error('Username or password is incorrect');

        return ok({
            ...basicDetails(user),
        });
    }
    static loginUserControllerFn = async (req, res) => {
        console.log('loginUserControllerFn');
        try{
            const guest = await Guest.findOne({email:req.body.email});
            if(guest.firstName===req.body.firstName){
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

module.exports = GuestController;