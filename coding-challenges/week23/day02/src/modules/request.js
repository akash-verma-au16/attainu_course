const axios = require('axios');

const getData = async id => {
    try {
        const post = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const comments = await axios.get('https://jsonplaceholder.typicode.com/comments');
        post.data.comments = comments.data;
        return post.data;   
    } catch (error) {
        return false;
    }
};

module.exports = getData;