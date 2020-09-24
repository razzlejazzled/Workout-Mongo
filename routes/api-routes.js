  
const db = require("../models")

module.exports = function(app){
    app.get("/api/workouts", async function(req, res){
      //  console.log(req)
        let findResponse = await findAll()
        function findAll(){
             return db.Workout.find({})
        }
      res.json(findResponse)
    }) 

    app.post("/api/workouts", async function(req, res){
       
    })

    

}