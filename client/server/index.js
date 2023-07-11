const express = require("express");
const app = express(); 
const port = 3030;


// add middleware
const path = require('path')

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));



app.get("/api/tasks", (req, res) => {
  res.send(JSON.stringify(data));
  //console.log(req.url)
});

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});


console.log(path + "  - " + __dirname)

// start express server
app.listen(port, () => {
  console.log("server started on port: " + port);
});



const data = [
  {
    id: 0,
    created: new Date("2023-06-01"),
    text: "First task text",
    status: false,
  },
  {
    id: 1,
    created: new Date("2023-06-03"),
    text: "Second super task text",
    status: true,
  },
  {
    id: 2,
    created: new Date("2023-06-11"),
    text: "Third task text",
    status: false,
  },
  {
    id: 3,
    created: new Date("2023-06-23"),
    text: "4 task text",
    status: false,
  },
  { id: 4, created: new Date("2023-07-01"), text: "5 task text", status: true },
  { id: 5, created: new Date("2023-07-07"), text: "6 task text", status: true },
];
