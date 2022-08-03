// const path = require('path')
const User = require('../model/userModel')

exports.getUserCreate = async(req, res) => {
    const user = await new User(req.body)
    const data = await user.save();

    if (data) {
        res.status(200).json({ message: "Success" })
    } else {
        res.status(501).json({ Message: "Data is not found" })
    }
};

exports.getUser = async(req, res, next) => {
    const data = await User.find();
    // res.sendFile(path.join(__dirname + "/../view/index.html"));

    // const name = req.body.name;
    // const email = req.body.email;
    // const phoneNumber = req.body.phone;
    // const age = req.body.age;

    // const userIn = {
    //     name,
    //     email,
    //     phoneNumber,
    //     age,
    // }
    // const newUser = [{

    // }]
    // newUser.push(userIn);
    // res.status(201).json({ Message: userIn })

    if (data) {
        res.status(200).json({ message: data })
    } else {
        res.status(501).json({ Message: "Data is not found" })
    }
};

exports.userPatch = async(req, res) => {
    const data = await User.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true });

    if (data) {
        res.status(200).json({ message: "updated Success" })
    } else {
        res.status(501).json({ Message: "updated Data is not found" })
    }
};

exports.userDelete = (req, res) => {
    User.findByIdAndDelete({ _id: req.params.id }, (err, data) => {
        if (!err) {
            res.status(200).json({ message: "Delete product", data })
        } else {
            res.status(501).json({ Message: "Delete Data is not found" })
        }
    });

};