const studentSchema = require("../model/studentSchema");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");

//register
const registerStudent = asyncHandler(async(req, res) => {
    const { usn, password } = req.body;

    const studentExists = await studentSchema.findOne({ usn });

    if (studentExists) {
        res.status(400);
        throw new Error("Student Already Exists");
    }

    const newStudent = await studentSchema.create({
        usn,
        password,
    });

    if (newStudent) {
        res.status(201).json({
            _id: newStudent._id,
            usn: newStudent.usn,
            isAdmin: newStudent.isAdmin,
            token: generateToken(newStudent._id),
        });
    } else {
        res.status(400);
        throw new Error("Error Occured");
    }

    res.json({ usn, password });
});

//login
const loginStudent = asyncHandler(async(req, res) => {
    const { usn, password } = req.body;

    const studentExists = await studentSchema.findOne({ usn });

    if (studentExists && (studentExists.matchPassword(password))) {
        res.json({
            _id: studentExists._id,
            usn: studentExists.usn,
            isAdmin: studentExists.isAdmin,
            token: generateToken(studentExists._id),
        });
    } else {
        res.status(400);
        throw new Error("Invalid USN or Password");
    }

});

module.exports = { registerStudent, loginStudent };