const DB = require("../../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports = {
    register: (req, res) => {
        bcrypt.hash(req.body.password, 12)
        .then((hash) => {
            DB.User.create({
                id: req.body.id,
                name: req.body.name,
                email: req.body.email,
                password: hash,
                role: req.body.role
            });
        })
        .then(user => {
            res.status(201).json({
                message: "Success Create User",
                user
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: err.message
            });
        });
    },

    login: (req, res) => {
        DB.User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(user => {
            const checkEmail = bcrypt.compare(req.body.password, user.password);
            if(checkEmail){
                let token = jwt.sign({
                    id: user.id,
                    role: user.role
                }, 
                    process.env.SECRET
                );

                if(token){
                    res.status(200).json({
                        message: "Login success",
                        token: token
                    });
                }
            } else {
                res.status(200).json({
                    message: "Login failed"
                });
            }
        })
        .catch(err => {
            res.status(200).json({
                message: err.message
            });
        })
    }
}