const axios = require("axios");

module.exports = async () => {
    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return posts.data;
};