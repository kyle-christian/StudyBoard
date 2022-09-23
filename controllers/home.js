const Stat = require("../models/Stat");

module.exports = {
  // getIndex: (req, res) => {
  //   res.render("index.ejs");
  // },
  // getIndex: async (req, res) => {
  //   try {
  //     const stat = await Stat.findOne ( {user: req.user.id} )
  //     res.render("index.ejs", { stat: stat });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // },
  getIndex: async (req, res) => {
    try {
      const stat = await Stat.find();
      res.render("index.ejs", { stat: stat });
    } catch (err) {
      console.log(err);
    }
  },
};
