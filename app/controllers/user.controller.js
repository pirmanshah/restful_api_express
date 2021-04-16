const jwt = require("jsonwebtoken");
const DB = require("../../models");
const bcrypt = require("bcrypt");
const Op = require('sequelize').Op;


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
    }
}