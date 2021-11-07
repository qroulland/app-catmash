// Create express app
var express = require("express")
var app = express()
var path = require('path')
var db = require("./database.js")
var servestatic = require("serve-static");

// Server port
var HTTP_PORT = process.env.PORT || 8000

// In production
if(process.env.NODE_ENV === 'production') {
  // Static
  app.use(servestatic(path.join(path.resolve(), 'dist')));
}

app.use((req, res, next) => {
  const allowedOrigins = ['http://localhost:8080', 'https://damp-inlet-82314.herokuapp.com'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
       res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

// Start server
app.listen(HTTP_PORT, '0.0.0.0', () => {
  console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT))
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