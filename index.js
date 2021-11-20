const express = require("express");
const app = express();
const PORT = process.env.PORT || 4001;
app.use(express.static('public'));

app.get("/test", (req, res)=>{
  res.sendFile(__dirname + "/public/index.html")
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});