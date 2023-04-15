const closeBtn = document.getElementById("close");
const overlay = document.getElementById("overlay");
const saibaMais = document.getElementById("saiba-mais");
const modulo = document.getElementById("modulo");

let template = `<img src="./assets/icons/close.svg" id="close" class="close" alt="" /><h2>${title}</h2> <p>
O câmbio de 6 marchas da CB 500X oferece maior confiança e performance
na pilotagem, tornando as subidas de marcha mais leves e as reduções
mais suaves!
</p> <img src="./assets/img/moto2.svg" alt="" />
<button class="btn quero-assinar">Quero assinar</button>`;

closeBtn.addEventListener("click", () => {
  overlay.classList.add("change");
  setTimeout(() => {
    overlay.style.display = "none";
    overlay.classList.remove("change");
  }, 500);
});

saibaMais.addEventListener("click", () => {
  overlay.style.display = "block";

  let filhos = cardBody.childNodes;
  let title = filhos.item(0).textContent;

  modulo.innerHTML = template;
  overlay.classList.add("aparecer");
  setTimeout(() => {
    overlay.classList.remove("aparecer");
  }, 1000);
});
