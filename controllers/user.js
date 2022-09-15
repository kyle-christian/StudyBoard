const Stats = require('../models/Stats')

module.exports = {
    getStats: async (req, res) => {
        console.log(req.user)
        try {
            const userTime = await Stats.find({userId:req.user.id})
            res.render('userPage.ejs', {time: userTime, user: req.user})
        }catch(err) {
            console.log(err)
        }
    }
}