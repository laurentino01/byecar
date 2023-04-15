const cardBody = document.getElementById("card-body");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

const secondCardTemplate =
  '<h3>Honda CB 500X</h3><img src="./assets/img/moto2.svg" alt="Moto modelo Honda CB 500X"/><div class="price-section"> <p>A partir de</p><h5 class="price">R$ 619,90</h5><p>Plano de 30 meses</p></div>';
const firstCardTemplate =
  '<h3>Scooter Elétrica Voltz EV1</h3><img src="./assets/img/moto1.svg" alt="Moto modelo Scooter Elétrica Voltz EV1"/><div class="price-section"> <p>A partir de</p><h5 class="price">R$ 619,90</h5><p>Plano de 30 meses</p></div>';

cardBody.innerHTML = firstCardTemplate;

function changeCard() {
  cardBody.classList.add("change");

  setTimeout(() => {
    let filhos = cardBody.childNodes;
    let valida = filhos.item(0).textContent.match(/Scooter Elétrica Voltz EV1/)
      ? true
      : false;
    if (valida) {
      cardBody.innerHTML = secondCardTemplate;
    } else {
      cardBody.innerHTML = firstCardTemplate;
    }
    cardBody.classList.remove("change");
  }, 500);
}

rightArrow.addEventListener("click", changeCard);
leftArrow.addEventListener("click", changeCard);
