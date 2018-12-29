const express = require("express");
const router = express.Router();

const Member = require("../models/member");
const middleware = require("../middlewares/middleware");
const Loans = require("../models/loans");


router.get("/members/:id/loan-payments/new", function(req, res){
    res.render("loans/new");
})



module.exports = router;
