const Todo = require('../models/Todo')
const Stats = require('../models/Stats')

module.exports = {
    getStats: async (req,res)=>{
        console.log(req.user)
        try{
            const todoItems = await Todo.find({userId:req.user.id})
            const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
            res.render('userPage.ejs', {todos: todoItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    getStatsAlt: async (req, res) => {
        console.log(req.user)
        try {
            const userTime = await Stats.find({userId:req.user.id})
            res.render('userPage.ejs', {time: userTime, user: req.user})
        }catch(err) {
            console.log(err)
        }
    },
    createStats: async (req,res) => {
        console.log('hello')
        try {
            await Stats.create({name: req.user.userName, time: 0, userId: req.user.id})
            console.log('Stat has been recorded!')
            res.redirect('/user')
        }catch(err){
            console.log(err)
        }
    }
}