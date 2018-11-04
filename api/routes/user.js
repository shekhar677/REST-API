const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const checkAuth = require('../middleware/check-auth');

const User = require("../models/user");
const UserController = require('../controllers/user');

router.post("/signup", UserController.user_signup);

router.post("/login", UserController.user_signin);

router.delete("/:userId", checkAuth, UserController.user_delete);

module.exports = router;