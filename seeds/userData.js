const { User } = require("../models");
const userdata = [
    {
        username: "PQR",
        email: "pqr@gmail.com",
        password: "password12345",
    },
    {
        username: "XYZ",
        email: "xyz@gamil.com",
        password: "password12345",
    },
    {
        username: "ABC",
        email: "abc@gmail.com",
        password: "password12345",
    },
];
const seedUser = () =>
    User.bulkCreate(userdata, {
        individualHooks: true,
        returning: true,
    });
module.exports = seedUser;
