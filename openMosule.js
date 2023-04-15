const closeBtn = document.getElementById("close");

closeBtn.addEventListener("click", () => {
  let overlay = closeBtn.parentNode.parentNode;

  console.log(typeof overlay);
});
