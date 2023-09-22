const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    q1a: {
        type: Number
    },
    q1b: {
        type: Number
    },
    q1c: {
        type: Number
    },
    q2a: {
        type: Number
    },
    q2b: {
        type: Number
    },
    q2c: {
        type: Number
    }
});
// const mark1Schema = new mongoose.Schema({
//     q1a: {
//         type: Number,
//     },
//     q1b: {
//         type: Number,
//     },
//     q1c: {
//         type: Number,
//     }
// });

// const mark2Schema = new mongoose.Schema({
//     q2a: {
//         type: Number,
//     },
//     q2b: {
//         type: Number,
//     },
//     q2c: {
//         type: Number,
//     }
// });

const User = mongoose.model("USER", userSchema); //string, schema_name, collection_name in database

// const Mark1 = mongoose.model("Mark1", mark1Schema, "Mark1");
// const Mark2 = mongoose.model("Mark2", mark2Schema, "Mark2");
// const mySchemas = { 'Mark1': Mark1, 'Mark2': Mark2 };

// module.exports = mySchemas;
module.exports = User;