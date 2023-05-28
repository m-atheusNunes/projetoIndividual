var express = require("express");
var router = express.Router();

var jogoController = require("../controllers/jogoController");

router.post("/tentativa", function(req, res) {
    jogoController.tentativa(req, res);
});

router.get("/buscarDados", function(req, res) {
    jogoController.buscarDados(req, res);
});

module.exports = router;