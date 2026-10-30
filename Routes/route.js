const express = require("express");
const { handleCreate, handleRead, handleUpdate, handleDelete, handleListByRole } = require("../Controllers/controller");
const { authenticateJWT } = require('../Middleware/authMiddleware');

const router = express.Router();

router.get("/", (req, res) =>{ res.send("YOU ARE ON THE HOMEPAGE WHICH IS YET TO DESIGN"); });

router.get("/create", (req, res) => { res.render('create'); });

router.get("/read", handleRead);

router.get("/update", (req, res) => { res.render('update'); });

router.delete("/delete/:_id", handleDelete);

router.get("/list/:role", handleListByRole);


router.post("/create",handleCreate);

router.patch("/update/:_id", handleUpdate);

module.exports = router;