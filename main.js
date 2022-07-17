const tweeter = tweeterProject();
const renderer = Renderer();

const render = function () {
  renderer.renderPosts(tweeter.getPost());
};

$("#post").on("click", function () {
  tweeter.addPost($("#input").val());
  render();
});

$("body").on("click", ".deletePost", function () {
  const postText = $(this).closest(".post");
  const postId = postText.data().id;
  tweeter.removeComment();
  tweeter.removePost(postId);

  render();
});

$("body").on("click", ".addComment", function () {
  let commentInput = $(this).siblings("input");
  let postId = $(this).closest(".post").data().id;
  let text = commentInput.val();
  if (text == "") {
    return;
  }
  tweeter.addComment(postId, text);
  render();
});

$("body").on("click", ".deleteComment", function () {
  let comment = $(this).closest(".comment");
  let post = comment.closest(".post");
  let postId = post.data().id;
  let commentId = comment.data().id;
  tweeter.removeComment(postId, commentId);
  render();
});

render();
