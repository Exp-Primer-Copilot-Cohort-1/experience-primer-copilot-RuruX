// Create web server
// Create a new web server using the http module
const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
const { getComments, postComment } = require('./comments');
const { getComment, deleteComment } = require('./comments');

const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true);
  const filePath = path.join(__dirname, 'public', reqUrl.pathname);

  if (req.method === 'GET') {
    if (reqUrl.pathname === '/comments') {
      getComments(req, res);
    } else if (reqUrl.pathname === '/comment') {
      const commentId = reqUrl.query.id;
      getComment(req, res, commentId);
    } else{
      deleteComment(req, res, commentId);
    }
  }});