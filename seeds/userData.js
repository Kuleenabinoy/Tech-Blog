const { User } = require("../models");
const userdata = [
    {
        username: "PQR",

        password: "password12345",
    },
    {
        username: "XYZ",

        password: "password12345",
    },
    {
        username: "ABC",

        password: "password12345",
    },
];
const seedUser = () =>
    User.bulkCreate(userdata, {
        individualHooks: true,
        returning: true,
    });
module.exports = seedUser;
