const appDocumentos = document.getElementById("documentos");
const janela = document.querySelector(".documento");
const fechar = document.getElementById("fechar");
const ok = document.getElementById("ok");
const janelaDrag = document.querySelector(".erro");
const barra = document.querySelector(".top");
const virusBtn = document.getElementById("virus");
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.teclado button');
const calcApp = document.getElementById('calcApp'); 
const calcWindow = document.querySelector('.calculadora'); 
const closeBtn = calcWindow.querySelector('.top button'); 


appDocumentos.addEventListener("click", (e) => {
    e.preventDefault(); 
    janela.style.display = "block";
});

fechar.addEventListener("click", () => {
    janela.style.display = "none";
});

ok.addEventListener("click", () => {
    janela.style.display = "none";
});

let isDragging = false;
let offsetX, offsetY;

barra.addEventListener("mousedown", (e) => {
    isDragging = true;

    offsetX = e.clientX - janelaDrag.offsetLeft;
    offsetY = e.clientY - janelaDrag.offsetTop;
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        janelaDrag.style.left = (e.clientX - offsetX) + "px";
        janelaDrag.style.top = (e.clientY - offsetY) + "px";
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});



virusBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let count = 0;

    const intervalo = setInterval(() => {
        criarJanelaAleatoria();
        count++;

        if (count > 15) {
            clearInterval(intervalo);
        }
    }, 200);
});

function criarJanelaAleatoria() {
    const nova = document.querySelector(".erro").cloneNode(true);

    nova.style.top = Math.random() * 80 + "%";
    nova.style.left = Math.random() * 80 + "%";
    nova.style.position = "fixed";

    document.body.appendChild(nova);

    const btnFechar = nova.querySelector("#fechar");
    const btnOk = nova.querySelector("#ok");

    btnFechar.addEventListener("click", () => nova.remove());
    btnOk.addEventListener("click", () => nova.remove());
}

    let current = '';

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const value = btn.textContent;

        if (value === '=') {
          try {
            current = eval(current).toString();
          } catch {
            current = 'Erro';
          }
        } else if (value === 'C') {
          current = '';
        } else if (value === 'CE') {
          current = '';
        } else if (value === 'Backspace') {
          current = current.slice(0, -1);
        } else if (value === 'sqrt') {
          try {
            current = Math.sqrt(eval(current)).toString();
          } catch {
            current = 'Erro';
          }
        } else {
          current += value;
        }

        display.textContent = current || '0';
      });
    });

calcApp.addEventListener('click', (e) => {
  e.preventDefault(); 
  calcWindow.style.display = 'block'; 
});

closeBtn.addEventListener('click', () => {
  calcWindow.style.display = 'none'; 
});

const barraErro = document.querySelector(".erro .top");

barraErro.addEventListener("mousedown", (e) => {
    isDragging = true;

    offsetX = e.clientX - janelaDrag.offsetLeft;
    offsetY = e.clientY - janelaDrag.offsetTop;
});

const calc = document.getElementById("calc");
const calcTop = document.getElementById("calcTop");

let isDraggingCalc = false;
let offsetXCalc, offsetYCalc;

calcTop.addEventListener("mousedown", (e) => {
    isDraggingCalc = true;

    offsetXCalc = e.clientX - calc.offsetLeft;
    offsetYCalc = e.clientY - calc.offsetTop;

    calc.style.transform = "none";
});

document.addEventListener("mousemove", (e) => {
    if (isDraggingCalc) {
        calc.style.left = (e.clientX - offsetXCalc) + "px";
        calc.style.top = (e.clientY - offsetYCalc) + "px";
    }
});

document.addEventListener("mouseup", () => {
    isDraggingCalc = false;
});

