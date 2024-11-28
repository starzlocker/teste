// Base URL for the API
let base = 'https://jsonplaceholder.typicode.com';

// Endpoint for posts
let posts = '/posts';

// Function to get comments for a specific post
function getComments(postNum) {
    return `/comments?postId=${postNum}`;
}

// Function to get a specific post by ID
function getPost(postId) {
    return `/posts/${postId}`;
}
