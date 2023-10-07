const express = require("express");
const router = express.Router();

// localhost:3000/api/
router.get("/", (req, res) => {
    console.log("GET - Service is up");
    res.status(200).json({
        message: "GET - Service is up",
        metadata: {
            hostname: req.hostname, 
            method: req.method,
        },
    });
});

// Route parameters
// localhost:3000/api/45 
router.get("/:45", (req, res) => {
    const id = req.params;
    console.log("GET by Id - Service is up");
    res.status(200).json({
        message: "GET by Id - Service is up",
        id: 45,
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});

router.put("/:89", (req, res) => {
    const id = req.params;
    console.log("Put - Service is up");
    console.log("get request");
    res.status(200).json({
        message: "Put - Service is up",
        id: 89,
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});


router.delete("/:9", (req, res) => {
    const id = req.params;
    console.log("Delete - Service is up");
    res.status(200).json({
        message: "Delete - Service is up",
        id: 9,
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});

router.post("/", (req, res) => {
    const { data } = req.body;
    console.log("Post - Service is up")
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