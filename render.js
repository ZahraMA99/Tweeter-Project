const Renderer = function () {
  const renderPosts = function (posts) {
    $("#posts").empty();
    for (let post of posts) {
      $("#posts").append(
        `<div class="post" id=${post.id} data-id="${post.id}"> ${post.text}
              <div id="comments" class="comments"><input type="text" placeholder=" Comment " class="comment"><button class="addComment">Add Comment</button>
              </div>
              <button class="deletePost">Delete Post</button>
           </div>`
      );
      let postID = post.id;
      let postSelector = "#" + postID;
      for (let comment of post.comments) {
        $("body").find(postSelector).find(".comments").append(`
              <div class="comment" id="${comment.id}" data-id="${comment.id}"><button class="deleteComment">X</button>
              ${comment.text}</div>`);
      }
    }
  };
  return {
    renderPosts: renderPosts,
  };
};
