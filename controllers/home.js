const Stat = require("../models/Stat");

module.exports = {
  getIndex: async (req, res) => {
    try {
      const stat = await Stat.find();
      res.render("index.ejs", { stat: stat });
    } catch (err) {
      console.log(err);
    }
  },
};
