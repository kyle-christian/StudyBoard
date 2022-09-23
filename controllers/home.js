const Stat = require("../models/Stat");

module.exports = {
  getIndex: async (req, res) => {
    try {
      const stat = await Stat.find().sort({ time: "desc" }).lean();
      res.render("index.ejs", { stat: stat });
    } catch (err) {
      console.log(err);
    }
  },
};
