// Create express app
var express = require("express")
var app = express()
var db = require("./database.js")

// Server port
var HTTP_PORT = 8000

// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});

// CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

// Root endpoint
app.get("/", (req, res, next) => {
    res.json({"message":"Ok"})
});

// Get all cats
app.get("/api/cats", (req, res, next) => {
  var sql = "select * from cat"
  var params = []
  db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({"error":err.message});
        return;
      }
      res.json({
          "message":"success",
          "data":rows
      })
    });
});

// Vote for a cat
app.patch("/api/user/:id", (req, res, next) => {
  var data = {
    vote: req.body.vote + 1
  }
  db.run(
    `UPDATE cat set 
      vote = COALESCE(?,vote)
      WHERE id = ?`,
    [data.vote, req.params.id],
    function (err, result) {
      if (err){
        res.status(400).json({"error": res.message})
        return;
      }
      res.json({
        message: "success",
        data: data,
        changes: this.changes
      })
  });
})

// Default response for any other request
app.use(function(req, res){
    res.status(404);
});