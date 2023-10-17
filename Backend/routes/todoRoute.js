const { Router } = require("express"); // take router from express package

const router = Router();

//create a route handler
router.get("/", (req, res) => {
  res.json({ message: "hi there" });
});

module.exports("router");
