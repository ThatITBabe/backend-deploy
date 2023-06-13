const getGoal = (req, res) => {
    res.status(200).json({
        msg: 'get request'
    })
}

const postGoal = (req, res) => {
    res.status(200).json({
        msg : "post request"
    })
}
const putGoal = (req, res) => {
    res.status(200).json({
        msg : "put request"
    })
}
const deleteGoal = (req, res) => {
    res.status(200).json({
        msg : "delete request"
    })
}

module.exports = {
    getGoal, postGoal, putGoal, deleteGoal
}