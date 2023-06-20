const asyncHandler = require('express-async-handler')


const getGoals = asyncHandler (async (req, res) => {
    res.status(200).json({
        msg: 'get goal'
    })
})

const setGoal = asyncHandler (async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({
        msg : "Set goal"
    })
})

const updateGoal = asyncHandler (async (req, res) => {
    res.status(200).json({
        msg : `Update goal ${req.params.id}`
    })
})

const deleteGoal = asyncHandler (async (req, res) => {
    res.status(200).json({
        msg : `delete goal ${req.params.id}`
    })
})

module.exports = {
    getGoals, setGoal, updateGoal, deleteGoal
}