const Task = require('../models/task');

module.exports = {
    create: (data) => {
        return new Promise(function (resolve, reject) {
            Task.create(data, function (err, data) {
                if (err) return reject(err);
                return resolve(data);
            });
        });
    },
    remove: (query) => {
        return new Promise(function (resolve, reject) {
            Task.remove(query, function (err, data) {
                if (err) return reject(err);
                return resolve(data);
            })
        })
    },
    list: () => {
        return new Promise(function (resolve, reject) {
            Task.find({}, function (err, data) {
                if (err) return reject(err);
                return resolve(data)
            }).select({ "name": 1, "_id": 1})
        })
    }
};