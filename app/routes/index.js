const express = require("express");
const router = express.Router();

// localhost:3000/api/
router.get("/", (req, res) => {
    res.status(200).json({
        message: "GET to API",
        metadata: {
            hostname: req.hostname, 
            method: req.method,
        },
    });
});

// Route parameters
// localhost:3000/api/fhkhigdj 
router.get("/:id", (req, res) => {
    const id = req.params;
    res.status(200).json({
        message: "GET - SUCCESS",
        metadata: {
            hostname: req.hostname,
            method: req.method,
        },
    });
});

// router.put("/:id", (req, res) => {
//     const id = req.params;
//     console.log(id);
// });

// router.delete("/:id", (req, res) => {
//     const id = req.params;
//     console.log(id);
// });

router.post("/", (req, res) => {
    const { data } = req.body;
    res.status(200).json({message: "POST to /api", 

    metadata: {
        hostname: req.hostname, 
        data,
        method: req.method 
    },
     })
});

module.exports = router;