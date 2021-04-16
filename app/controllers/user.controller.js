const DB = require("../../models");
const Op = require('sequelize').Op;
const bcrypt = require("bcrypt");

module.exports = {
    getUsers: (req, res) => {
        if(req.query.name)
        {
            let name = req.query.name;

            DB.User.findAll({
                where: {
                    name: {
                        [Op.like] : `%${name}%`
                    }
                }
            })
            .then(users => {
                res.status(200).json({
                    message: `Get All User where name like ${name} `,
                    users
                });
            })
            .catch(err => {
                res.status(500).json({
                    message: err.message
                });
            })
        } else {
            DB.User.findAll()
            .then(users => {
                res.status(200).json({
                    message: `Get All User`,
                    users
                });
            })
            .catch(err => {
                res.status(500).json({
                    message: err.message
                });
            })
        }
    },

    getById: (req, res) => {
        const id = req.params.id;

        DB.User.findByPk(id)
        .then(user => {
            if(user){
                res.status(200).json({
                    message: `Success get data user with id: ${id}`,
                    user
                });
            } else{
                res.status(404).json({
                    message: 'User Not Found',
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                message: err.message
            });
        })
    },

    insert: (req, res) => {
        bcrypt.hash(req.body.password, 12)
        .then(hash => {
           return DB.User.create({
                id: req.body.id,
                name: req.body.name,
                email: req.body.email,
                password: hash,
                role: req.body.role
            })
        })
        .then(user => {
            res.status(201).json({
                message: 'Insert data success',
                user
            });
        })
        .then(err => {
            res.status(500).json({
                message: err.message
            })
        })
    },

    update: (req, res) => {
        const id = req.params.id;
        DB.User.findByPk(id)
        .then(user => {
            return user.update(req.body);
        })
        .then(user => {
            res.status(201).json({
                message: 'Update data success',
                user
            })
        })
        .catch(err => {
            res.status(500).json({
                message: err.message
            })
        })
    },

    remove: (req, res) => {
        const id = req.params.id;

        DB.User.findByPk(id)
        .then(user => {
            if(user){
                dataUser = user;
                return user.destroy();
            } else {
                res.status(404).json({
                    message: 'User Not Found',
                });
            }
        })
        .then(user => {
            if(user){
                res.status(201).json({
                    message: 'Delete data success',
                    user: dataUser
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: err.message
            })
        })
    }
}