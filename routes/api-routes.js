  
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

    app.put("/api/workouts/", function(req, res){
        const workout = new Workout(body);
    })

    

}