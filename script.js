function hideSection() {
  // elemento em que o mouse clicou
  let target = event.target.parentElement.nextElementSibling;

  // list do elemento onde o mouse clicou
  let targetList = event.target.parentElement;

  //  imagem onde o mouse clicou
  let targetImg = event.target;

  if (target.style.display === "none" || target.style.display === "") {
    // faz aparecer as sub-listas

    target.style.display = "flex";

    // faz as animações de drop

    targetImg.style.transform = "rotate(180deg)";
    targetImg.style.transition = "0.3s";
    targetImg.style.filter = "invert(100%)";
    // targetImg.style.backgroundColor = "rgba(255, 255, 255, 0.152)";
    setTimeout(() => {
      targetImg.style.transform = "rotate(0deg)";
      targetImg.style.transition = "0.8s";

    }, 200);

    targetList.style.backgroundImage =
      "linear-gradient(45deg, rgb(11, 92, 38) 0%, rgba(11, 92, 38, 0.534) 100%)";
    targetList.style.color = "white";

    // apaga os outros elementos da lista que não estão sendo acessados

    for (i = 0; i < 5; i++) {
      let element = document.querySelectorAll(".list-item")[i];
      let text = element.children[0].innerText;
      let textTarget = targetList.children[0].innerText;

      if (text === textTarget) {
        element.style.display = "flex";
      } else if (text != textTarget) {
        element.style.display = "none";
      }
    }
  } else {
    // faz desaparecer as sub-listas

    target.style.display = "none";

    // faz as animações de retorno de drop

    targetImg.style.transform = "rotate(0deg)";
    targetImg.style.transition = "0.3s";
    targetImg.style.filter = "invert(0%)";
    targetImg.style.background = "none";

    targetList.style.backgroundImage =
      "linear-gradient(45deg,white 0%,  white 100%)";
    targetList.style.color = "rgb(97, 97, 97)";
    targetList.style.transform = "scale(1,1)";

    // retorna os elementos apagados da lista

    let element = document.querySelectorAll(".list-item");
    for (i = 0; i < 5; i++) {
      element[i].style.display = "flex";
    }
  }
}
