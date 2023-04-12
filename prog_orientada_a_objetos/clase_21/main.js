const resultado = document.getElementById("resultado");
const container = document.querySelector(".container");
let contador = 0;

container.addEventListener("click", (e) => {
  // console.log('click')
  // console.log(e.target)
  // console.log(e.target.classList.contains('btn-info'))
  if (e.target.classList.contains("btn-danger")) {
    contador--;
    pintarContador();
  }

  if (e.target.classList.contains("btn-info")) {
    contador++;
    pintarContador();
  }
  e.stopPropagation()
});

document.body.addEventListener('click', e => {console.log('body')})

pintarContador = () => {
  resultado.textContent = contador;
};


const box = document.querySelector('.bg-success')
const btn = document.querySelector('.btn-dark')

box.addEventListener('click', e => {console.log('click box')})
btn.addEventListener('click', e => {console.log('click btn')})