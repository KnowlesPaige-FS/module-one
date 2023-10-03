const express = require("express");
const router = express.Router();

// localhost:3000/movies/
router.get("/", (req, res) => {
    res.status(200).json({
        message: "GET - Service is up",
        metadata: {
            hostname: req.hostname, 
            method: req.method,
        },
    });
});

// Route parameters
// localhost:3000/movies/45 
router.get("/45", (req, res) => {
    const id = req.params;
    res.status(200).json({
        message: "GET by Id - Service is up",
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});

router.put("/89", (req, res) => {
    const id = req.body;
    res.status(200).json({
        message: "Put - Service is up",
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});


router.delete("/9", (req, res) => {
    const id = req.params;
    res.status(200).json({
        message: "Delete - Service is up",
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});

router.post("/", (req, res) => {
    const { data } = req.body;
    res.status(200).json({
        message: "Post - Service is up", 

    metadata: {
        hostname: req.hostname, 
        data,
        method: req.method 
    },
     });
});

module.exports = router;