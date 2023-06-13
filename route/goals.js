const express = require('express')
const router = express.Router()
const { getGoal, postGoal, putGoal, deleteGoal } = require("../controllers/goalsController")

router.route(`/goals`).get(getGoal).post(postGoal)
router.route(`/goals/:id`).put(putGoal).delete(deleteGoal)

// router.get('/goals', getGoal)

// router.post('/goals', postGoal);

// router.put('/goals/:id', putGoal)

// router.delete('/goals/:id', deleteGoal);


  


module.exports = router