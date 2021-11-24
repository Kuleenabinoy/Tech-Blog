const { Model, Datatypes } = require("sequelize");
const sequelize = require("../config/connection");
class Comment extends Model {}

Comment.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        commentContent: {
            type: Datatypes.String,
            allowNull: false,
            unique: true,
        },
        dateCreated: {
            type: Datatypes.DATE,
            allowNull: false,
            defaultValue: Datatypes.NOW,
        },

        user_id: {
            type: Datatypes.INTEGER,
            references: {
                model: "user",
                key: "id",
            },
        },
        post_id: {
            type: Datatypes.INTEGER,
            references: {
                model: "post",
                key: "id",
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "comment",
    }
);
model.exports = Comment;
