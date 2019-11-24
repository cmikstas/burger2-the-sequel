var express = require("express");
var router = express.Router();

var burger = require("../models/burger");

router.get("/", function(req, res)
{
    burger.selectAll(function(data)
    {
        var hbsObject =
        {
            burgers: data
        };

        //console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res)
{
    //console.log(req.body);
    burger.insertOne(

        req.body.burger_name,

    function(result)
    {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res)
{
    var burgerID = req.params.id;
    
    burger.updateDevoured(

        true,
        burgerID,

    function(result)
    {
        if (result.changedRows == 0)
        {
            return res.status(404).end();
        }
        else
        {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function(req, res)
{
    var burgerID = req.params.id;
    console.log(burgerID);

    burger.deleteOne(

        burgerID,

    function(result)
    {
        if (result.affectedRows == 0)
        {
            return res.status(404).end();
        }
        else
        {
            res.status(200).end();
        }
    });
});

module.exports = router;