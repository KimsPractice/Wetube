import axios from "axios";

const addCommentForm = document.getElementById("jsAddComment");
const deleteCommentForm = document.getElementById("jsDeleteComment");
const commentList = document.getElementById("jsCommentList");
const commentNumber = document.getElementById("jsCommentNumber");

const handleDeleteSubmit = event => {
  event.preventDefault();
  const {
    srcElement: { action }
  } = event;
  const commentId = action.split("/")[4];
  console.log(commentId);

  // commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) - 1;
  // fetch(`/api${routes.deleteComment(comment.id)}`, {method="post"})
};

const increaseNumber = () => {
  commentNumber.innerHTML = parseInt(commentNumber.innerHTML, 10) + 1;
};

const addComment = comment => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerHTML = comment;
  li.appendChild(span);
  commentList.prepend(li);
  increaseNumber();
};

const sendComment = async comment => {
  const videoId = window.location.href.split("/videos/")[1];

  try {
    const response = await axios({
      url: `/api/${videoId}/comment`,
      method: "POST",
      data: {
        comment
      }
    });

    if (response.status === 200) {
      addComment(comment);
    }
    await fetch(`/api/${videoId}/comment`);
  } catch (error) {
    console.log("sendComment: " + error.name);
  }
};

const handleAddSubmit = event => {
  event.preventDefault();
  const commentInput = addCommentForm.querySelector("input");
  const comment = commentInput.value;
  sendComment(comment);
  commentInput.value = "";
};

const init = () => {
  addCommentForm.addEventListener("submit", handleAddSubmit);
  deleteCommentForm.addEventListener("submit", handleDeleteSubmit);
};

if (addCommentForm) {
  init();
}
