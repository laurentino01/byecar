# ByeCar - Desafio daily 5 - DNC 

### Sumário
<ol>
<li><a href="https://github.com/laurentino01/byecar/new/master?readme=1#descri%C3%A7%C3%A3o-do-projeto">Descrição do projeto</a></li>
<li><a href="https://github.com/laurentino01/byecar/new/master?readme=1#primeira-funcionalidade">Primeira Funcionalidade</a></li>
<li><a href="https://github.com/laurentino01/byecar/new/master?readme=1#segunda-funcionalidade">Segunda Funcionalidade</a></li>
<li><a href="https://github.com/laurentino01/byecar/new/master?readme=1#desktop">Design Desktop</a></br></li>
<li><a href="https://github.com/laurentino01/byecar/new/master?readme=1#mobile">Design Mobile</a></br></li>
<li><a href="https://github.com/laurentino01/byecar/new/master?readme=1#link">Link do Site</a></br></li>
<li><a href="https://github.com/laurentino01/byecar/new/master?readme=1#tecnologias">Tecnologias Utilizadas</a></br></li>
</ol>








## Descrição do projeto
Neste desafio foi preciso criar duas funcionalidades e reproduzir o layout conforme o design. 
A primeira funcionalidad consiste em um carrosel de imagens que trocam ao clicar nas setas laterais. 
A segunda funcionalidade é um modulo com overlay do produto em que foi clicado.


## Primeira funcionalidade

Para criar essa funcionalidade eu pensei em criar dois templates de card, trocar entre eles e apenas colocar uma animação para parecer que estava sendo trocado. 
Lembrando que não há integração com API então optei pelo que resolve no curto prazo mesmo porque não será mais acrescentado nenhuma funcionalidade, então não preciso pensar em escala. 

<code>
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
</code>

## Segunda funcionalidade 

Esse foi mais simples, só precisei pegar algumas informações do card atual e colocar no modulo.

<code>
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
</code>

## Desktop
![image](https://user-images.githubusercontent.com/81561554/232319539-8c6b254b-5b51-42e3-a268-0c4850dc9540.png)
![image](https://user-images.githubusercontent.com/81561554/232319552-a85f86ce-ef50-47b4-91c6-613a7a85fa55.png)

## mobile
![image](https://user-images.githubusercontent.com/81561554/232319580-88c849ad-6260-4b38-a6dd-18e9003fbf91.png)
![image](https://user-images.githubusercontent.com/81561554/232319605-ced2ffe3-0fc7-4f5d-a6eb-f1735022428d.png)

## Link
https://byecar-ch.netlify.app/

## Tecnologias
<div style="display: inline_block"><br>
  <img align="center" alt="Gabriel-HTML" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"> -
  <img align="center" alt="Gabriel-CSS" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"> -
  <img align="center" alt="Gabriel-CSS" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg">
</div>

