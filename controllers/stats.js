const Stat = require("../models/Stat");

module.exports = {
  createStat: async (req, res) => {
    try {
      await Stat.create({
        user: req.user.id,
        userName: req.user.userName,
        time: 0,
      });
      console.log("Stat has been created!");
      res.redirect("/profile");
    } catch (err) {
      console.log(err);
    }
  },
  updateStat: async (req, res) => {
    try {
        await Stat.findOneAndUpdate(
            { user: req.user.id },
            {
                $inc: { time: req.body.duration},
            }
        );
        console.log("Time updated: " + req.body.duration);
        res.json('Time updated: ' + req.body.duration)
    } catch(err) {
        console.log(err)
    }
  },
};