const exp = require('express');
const app = exp();
const axios = require('axios');


app.get('/postWithComments', async (req, res) => {
    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments');
    const comments = await axios.get('https://jsonplaceholder.typicode.com/comments/1');
    const postWithComments = posts.data.map(post => {
        post.comments = comments.data;
        return post;
    });
    res.json(postWithComments);
});

app.listen(5000, () => console.log('Server started...'));