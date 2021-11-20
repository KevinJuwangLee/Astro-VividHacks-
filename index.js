const express = require("express");
const app = express();
const PORT = process.env.PORT || 4001;
app.use(express.static('public'));

app.get("/korea", (req, res)=>{
  res.sendFile(__dirname + "/public/korea.html")
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});