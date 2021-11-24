const { Post } = require("../models");

const postdata = [
    {
        postTitle: "Introduction to HTML CSS JS",
        dateCreated: "2021/03/21",
        postContent: "Web Development Intro",
        userId: 1,
    },
    {
        postTitle: "MYSQL",
        dateCreated: "2021/03/2",
        postContent: "DataBase --Know better",
        user_id: 2,
    },
    {
        postTitle: "Women Back to Tech",
        dateCreated: "2021/05/21",
        postContent: "An Inspirational Story!",
        user_id: 3,
    },
];
const seedPost = () => Post.bulkCreate(postdata);
module.exports = seedPost;
