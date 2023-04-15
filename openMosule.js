const closeBtn = document.getElementById("close");
const overlay = document.getElementById("overlay");
const saibaMais = document.getElementById("saiba-mais");
const modulo = document.getElementById("modulo");

closeBtn.addEventListener("click", () => {
  overlay.classList.add("change");
  setTimeout(() => {
    overlay.style.display = "none";
    overlay.classList.remove("change");
  }, 500);
});

saibaMais.addEventListener("click", () => {
  overlay.style.display = "block";
  overlay.classList.add("aparecer");
  createModuleContent();

  setTimeout(() => {
    overlay.classList.remove("aparecer");
  }, 1000);
});

function createModuleContent() {
  let title = cardBody.childNodes.item(0).textContent;
  let img = cardBody.childNodes.item(1).src;
  let titleModulo = modulo.childNodes.item(3);
  let imgModulo = modulo.childNodes.item(7);
  imgModulo.src = img;
  titleModulo.textContent = `${title}`;
}
