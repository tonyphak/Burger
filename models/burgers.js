var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res){ //selecting all columns in burgers table
            cb(res);
        });
    },
    // insertOne: function(cols, vals, cb) {
    //     orm.insertOne("burgers", cols, vals, function(res){ //inserting one new burger_name column with value 
    //         cb(res);
    //     });
    // },
    // updateOne: function(objColVals, condition, cb) {
    //     orm.updateOne("burgers", objColVals, condition, function(res){
    //         cb(res);
    //     });
    // }
};  

module.exports = burger;