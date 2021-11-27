const { Comment } = require("../models");
const commentData = [
    {
        commentContent: "Very Nice",
        userId: 1,
        postId: 1,
    },
    {
        commentContent: "Thank you",
        userId: 2,
        postId: 2,
    },
];
const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
