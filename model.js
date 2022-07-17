// Tweeter Project _ Phase 1

let postIdCounter = 2;
let commentIdCounter = 6;

const tweeterProject = function () {
  let posts = [
    {
      text: "First post!",
      id: "p1",
      comments: [
        { id: "c1", text: "First comment on first post!" },
        { id: "c2", text: "Second comment on first post!!" },
        { id: "c3", text: "Third comment on first post!!!" },
      ],
    },
    {
      text: "Aw man, I wanted to be first",
      id: "p2",
      comments: [
        {
          id: "c4",
          text: "Don't wory second poster, you'll be first one day.",
        },
        { id: "c5", text: "Yeah, believe in yourself!" },
        { id: "c6", text: "Haha second place what a joke." },
      ],
    },
  ];

  // get post array
  const getPosts = function () {
  return posts;
  };

  // add posts
  const addPost = function (text) {
    postIdCounter++;
    let post = {
      text: text,
      id: "p" + postIdCounter,
      comments: [],
    };
    posts.push(post);
  };

  // removePost
  const removePost = function (postID) {
    for (let i in posts) {
      if (posts[i].id === postID) {
        posts.splice(i, 1);
      }
    }
  };

  // add comment
  const addComment = function (postID, text) {
    commentIdCounter++;
    let comment = {
      id: "c" + commentIdCounter,
      text: text,
    };
    for (let post of posts) {
      if (post.id === postID) {
        post.comments.push(comment);
      }
    }
  };
  // removecomment
  const removeComment = function (postID, commentID) {
    for (let post of posts) {
      if (post.id === postID) {
        for (let i in post.comments) {
          if (post.comments[i].id === commentID) {
            post.comments.splice(i, 1);
          }
        }
      }
    }
  };

  return {
    getPost: getPosts,
    addPost: addPost,
    removePost: removePost,
    addComment: addComment,
    removeComment: removeComment,
  };
};

