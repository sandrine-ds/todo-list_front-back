const express = require("express");
const router = express.Router();
const indexController = require("../controllers/index");

router.get("/", indexController.getIndex);

router.post("/add", indexController.postIndex);
router.patch("/add/:id", indexController.editTodo);

router.delete("/delete/:id", indexController.deleteIndex);

router.get("/edit/:id", indexController.getEdit);

module.exports = router;
