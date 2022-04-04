const Post = require('./Post.js');
const User = require('./User');
const Comment = require('./Comment');

User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

// User.belongsToMany(Post, {
//     foreignKey: 'user_id',
//     onDelete: 'SET NULL'
// });

// Post.belongsToMany(User, {
//     through: Vote,
//     as: 'voted_posts',
//     onDelete: 'SET NULL'
// });


Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
});

module.exports = { User, Post, Comment };