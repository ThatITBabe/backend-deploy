const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal } = require("../controllers/goalsController")

router.route(`/goals`).get(getGoals).post(setGoal)
router.route(`/goals/:id`).put(updateGoal).delete(deleteGoal)

// router.get('/goals', getGoal)

// router.post('/goals', postGoal);

// router.put('/goals/:id', putGoal)

// router.delete('/goals/:id', deleteGoal);


  


module.exports = router