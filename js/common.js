// i know its kind of pointless but whatever
document.addEventListener("DOMContentLoaded", () => {
  const gotoTopButton = document.createElement("button");
  gotoTopButton.innerText = "Top";
  gotoTopButton.style.position = "fixed";
  gotoTopButton.style.bottom = "20px";
  gotoTopButton.style.right = "20px";
  gotoTopButton.style.display = "none";
  gotoTopButton.style.zIndex = 1100;

  document.body.appendChild(gotoTopButton);

  window.onscroll = () => {
    gotoTopButton.style.display = window.scrollY > 200 ? "block" : "none";
  };

  gotoTopButton.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
});
