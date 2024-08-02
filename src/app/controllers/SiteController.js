const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    //[GET] /home
    async index(req, res, next) {
        // try {
        //     const courses = await Course.find();
        //     res.status(200).json(courses);
        // } catch (err) {
        //     res.status(500).json(err);
        // }

        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
