function hideSection() {
  let target = event.target.parentElement.nextElementSibling;
  let targetList = event.target.parentElement;
  let targetImg = event.target;

  if (target.style.display === "none" || target.style.display === "") {
    target.style.display = "flex";

    targetImg.style.transform = "rotate(180deg)";
    targetImg.style.transition = "0.3s";
    targetImg.style.filter = "invert(100%)";

    targetList.style.backgroundImage =
      "linear-gradient(45deg, rgb(11, 92, 38) 0%, rgba(11, 92, 38, 0.534) 100%)";
    targetList.style.color = "white";
  } else {
    target.style.display = "none";

    targetImg.style.transform = "rotate(0deg)";
    targetImg.style.transition = "0.3s";
    targetImg.style.filter = "invert(0%)";
    targetImg.style.background = "none";

    targetList.style.backgroundImage =
      "linear-gradient(45deg,white 0%,  white 100%)";
    targetList.style.color = "rgb(97, 97, 97)";
    targetList.style.transform = "scale(1,1)";
  }
}
