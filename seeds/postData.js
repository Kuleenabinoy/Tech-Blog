const { Post } = require("../models");

const postdata = [
    {
        postTitle: "Introduction to HTML CSS JS",

        postContent: "Web Development Intro",
        userId: 1,
    },
    {
        postTitle: "MYSQL",

        postContent: "DataBase --Know better",
        userId: 2,
    },
    {
        postTitle: "Women Back to Tech",

        postContent: "An Inspirational Story!",
        userId: 3,
    },
];
const seedPost = () => Post.bulkCreate(postdata);
module.exports = seedPost;
