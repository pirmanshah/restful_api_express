const jwt = require("jsonwebtoken");
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
            res.status(200).json({
                message: `Success get data user with id: ${id}`,
                user
            })
        })
        .catch(err => {
            res.status(500).json({
                message: err.message
            });
        })
    },

    insert: (req, res) => {
        DB.User.create(req.body)
        .then(user => {
            res.status(201).json({
                message: 'Insert data success',
                user
            })
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
            return user.update(req.body)
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
    }
}