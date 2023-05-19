var express = require("express");
var router = express.Router();

var timeController = require("../controllers/timeController");

router.get("/listar", function(req, res) {
    timeController.listar(req, res);
});

router.post("/listarJogadores", function(req, res) {
    timeController.listarJogadores(req, res);
});
module.exports = router;