function showInformationPost(event) {
  const Post = event.currentTarget.closest(".item");
  const PostTitle = Post.querySelector(".item__title");
  const PostBtn = Post.querySelector(".item__btn");
  const PostInformation = Post.querySelector(".item__information");

  if (PostInformation.classList.contains("item__information_open")) {
    PostTitle.classList.remove("item__title_blue");
    PostBtn.classList.remove("item__btn_rotate");
    PostInformation.classList.remove("item__information_open");
  } else {
    PostTitle.classList.add("item__title_blue");
    PostBtn.classList.add("item__btn_rotate");
    PostInformation.classList.add("item__information_open");
  }
}
