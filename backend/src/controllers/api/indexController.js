const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');

module.exports = {
    index: (req,res) =>{
        res.render("home");
    }
}