const capitulos = [
    {
    "id": 1,
    "titulo": "Capítulo-01: HTML e CSS",
    "video": "../assets/video/video.mp4",
    "material": "https://www.slideshare.net/slideshow/embed_code/key/4hRTNbQIfzYxpZ",
    "exercicios": [

      {
        "pergunta": "Qual tag HTML é usada para criar um link?",
        "alternativas":
        
        [ "a) img",
          "b) a",
          "c) link", 
          "d) button", 
          "e) p"]
      },
      {
        "pergunta": "Qual tag HTML é usada para inserir uma imagem?",
        "alternativas": [
            "a) image", 
            "b) picture", 
            "c) img", 
            "d) src", 
            "e) href"


        ]
      },

      {
        "pergunta": "Como você altera a cor do texto em CSS?",
        "alternativas": [
            "a) Color: red",
            "b) Font-size: Large" , 
            "c) Display: flex" , 
            "d) Background-color: red" , 
            "e) border-color: red"
        ]

      },

      {
        "pergunta": "O que faz a propriedade background-color no CSS?",
        "alternativas": 
        
        [ "a) Muda a cor da borda do elemento", 
          "b) Muda a cor do texto",
          "c) Muda a cor de fundo do elemento", 
          "d) Muda a cor da fonte", 
          "e) Muda a cor das letras"]

      },
      {
        "pergunta":"Como você cria a estrutura de uma lista não ordenada em HTML?",
        "alternativas":
        
        ["a) ul - li - ul", 
        " b) ol - li - ol", 
        "c) div - div", 
        "d) form - input - button - button - form", 
        "e)  p - p"]

      }
    ]
  },

  {
    "id": 2,
    "titulo": "Capítulo-02: Javascript",
    "video": "../assets/video/video.mp4",
    "material": "https://www.example.com/material2",
    "exercicios": [
      {
        "pergunta": "Qual a diferença entre var e let?",
        "alternativas": [
            "a) let pode ser redeclarado no mesmo escopo",
            "b) var tem escopo de bloco",
            "c) let possui escopo de bloco e var de função",
            "d) Não existe diferença entre eles"]
      },

      {
         "pergunta": "Qual comando é utilizado para selecionar um elemento pelo id no HTML?",
         "alternativas":[
                "a) document.getElementid",
                "b) document.querySelectorAll",
                "c) document.getElementById",
                "d) document.selectId"
         ]
      },

      {
        "pergunta": "Qual é a diferença entre == e ===?",
        "alternativas":[
                "a) Nenhuma diferença",
                "b) === compara só o valor",
                "c) == compara só o tipo",
                "d) === compara o valor e o tipo"   
        ]
      },

      {
        "pergunta": "Qual evento detecta clique?",
        "alternativas": [
                    "a) onpress",
                    "b) onchange",
                    "c) onclick",
                    "d) onhover"
        ]
      },

      {
        "pergunta": "5- Como você soma dois números em JavaScript?",
        "alternativas":[

            "a) let total = a + b;",
            "b) let total = a & b;",
            "c) let total = a || b;",
            "d) let total = a ++ b;"
        ]    
      }

    ]
  },
];

let capituloAtual = 0;

//=========== FUNÇÃO PRINCIPAL ===========
function carregarCapitulo(index) {
  const capitulo = capitulos[index];

  document.getElementById('titulo-capitulo').innerText = capitulo.titulo;
  document.getElementById('material-iframe').src = capitulo.material;
  
  const lista = document.getElementById('lista-exercicios');
  lista.innerHTML = "";

  capitulo.exercicios.forEach((ex, i) => {
    const div = document.createElement("div");
    div.classList.add("questao");

    let alternativasHTML = "";

    ex.alternativas.forEach((alt, indexAlt) => {
      alternativasHTML += `
        <label>
          <input type="radio" name="q${i}" value="${indexAlt}">
          ${alt}
        </label><br>
      `;
    });

    div.innerHTML = `
      <p><strong>Questão ${i + 1}:</strong> ${ex.pergunta}</p>
      <div class="alternativas">${alternativasHTML}</div>
    `;

    lista.appendChild(div);
  });

  const video = document.getElementById('video-player');

    video.innerHTML = `
    <source src="${capitulo.video}" type="video/mp4">
    `;
 video.load();


}

//=========== BOTÕES DE NAVEGAÇÃO ===========
const btnAnterior = document.querySelector('.nav-btn:nth-child(1)');
const btnProximo = document.querySelector('.nav-btn:nth-child(2)');

btnAnterior.addEventListener('click', () => {
  if (capituloAtual > 0) {
    capituloAtual--;
    carregarCapitulo(capituloAtual);
  }
});

btnProximo.addEventListener('click', () => {
  if (capituloAtual < capitulos.length - 1) {
    capituloAtual++;
    carregarCapitulo(capituloAtual);
  }
});

// CARREGA PRIMEIRO AUTOMÁTICO
carregarCapitulo(capituloAtual);


// ==============================
// 1. MENU DE PERFIL (ABRIR/FECHAR)
// ==============================

const profileIcon = document.querySelector(".profile-icon");

const menu = document.createElement("div");
menu.classList.add("profile-menu");
menu.innerHTML = `
    <a href="#">Meu Perfil</a>
    <a href="#">Sair</a>
`;

profileIcon.appendChild(menu);

profileIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("open");
});

// Fecha se clicar fora
document.addEventListener("click", (e) => {
    if (!profileIcon.contains(e.target)) {
        menu.classList.remove("open");
    }
});

// ==============================
// 2. CORREÇÃO DAS QUESTÕES
// ==============================

const respostasCorretas = {
    questao1: "b",
    questao2: "c",
    questao3: "a",
    questao4: "c",
    questao5: "a"
};

const btnEnviar = document.querySelector(".submit-btn");

btnEnviar.addEventListener("click", () => {

    let pontos = 0;
    const total = Object.keys(respostasCorretas).length;

    for (let questao in respostasCorretas) {
        const marcada = document.querySelector(
            `input[name="${questao}"]:checked`
        );

        const alternativas = document.querySelectorAll(
            `input[name="${questao}"]`
        );

        alternativas.forEach(input => {
            let label = input.parentElement;

            label.style.background = "#fff";
            label.style.borderRadius = "5px";
            label.style.padding = "5px";
            label.style.display = "block";

            if (input.value === respostasCorretas[questao]) {
                label.style.border = "2px solid green";
            }
        });

        if (marcada && marcada.value === respostasCorretas[questao]) {
            pontos++;

            marcada.parentElement.style.background = "#c8f7c5";
        } 
        else if (marcada) {
            marcada.parentElement.style.background = "#f7c5c5";
        }
    }

    alert(`Você acertou ${pontos} de ${total} questões!`);
});

