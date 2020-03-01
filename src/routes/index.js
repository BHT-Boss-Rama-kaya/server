const router = require("express").Router();

router.get("/home", function(req, res, next) {
  res.status(200).json("connected");
});

module.exports = router;
