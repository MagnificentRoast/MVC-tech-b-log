const sequelize = require('../config/connection');
const { User, Post } = require ('../models');

const userdata = [
    {
        username: 'roast',
        email: 'test@test.test',
        password: 'password0123'
    },
    {
        username: 'coast',
        email: 'tester@tester.test',
        password: 'password0123'
    },
    {
        username: "post",
        email: 'testest@testest.test',
        password: 'password0123'
    },
    {
        username: 'toast',
        email: 'no@email.edu',
        password: 'password0123'
    },
    {
        username: 'moast',
        email: 'most@gmail.com',
        password: 'password0123'
    },
    {
        username: "Ted",
        email: "ted@test.edu",
        password: 'password0123'
    }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;