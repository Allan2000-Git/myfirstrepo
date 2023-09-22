const express = require("express");
const router = express.Router();

require("../db/conn");

const User = require("../model/userSchema");

router.route("/").get((req, res) => {
    User
        .find()
        .then((m) => res.json(m))
        .catch((err) => res.status(400).json("Error: " + err));
});

//-------------Using promises---------------
//get the data from front-end
// router.post('/entermarks', (req, res) => {

//     //instead of using req.body to display data
//     const { q1a, q1b, q1c, q2a, q2b, q2c } = req.body;

//     // if (!q1a || !q1b || !q1c || !q2a || !q2b || !q2c)
//     //     return res.status(422).json({ error: "Please fill all the fields." });

//     const user = new User({ q1a, q1b, q1c, q2a, q2b, q2c });

//     user.save().then(() => {
//         res.status(201).json({ message: "Data entered successfully" });
//     }).catch((err) => res.status(500).json({ error: "Something went wrong while entering" }));
// });

router.route("/entermarks").post((req, res) => {
    const q1a = Number(req.body.q1a);
    const q1b = Number(req.body.q1b);
    const q1c = Number(req.body.q1c);
    const q2a = Number(req.body.q2a);
    const q2b = Number(req.body.q2b);
    const q2c = Number(req.body.q2c);

    const newMarks1 = new User({
        q1a,
        q1b,
        q1c,
        q2a,
        q2b,
        q2c
    });

    newMarks1
        .save()
        .then(() => res.json("Marks added!"))
        .catch((err) => res.status(400).json("Error: " + err));

});

module.exports = router;