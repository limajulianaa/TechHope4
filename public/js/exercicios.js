const profileIcon = document.querySelector(".profile-icon");

const menu = document.createElement("div");
menu.classList.add("profile-menu");
menu.innerHTML = `
    <a href="#">Meu Perfil</a>
    <a href="../pages/login.html">Sair</a>
`;

profileIcon.appendChild(menu);

profileIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("open");
});

document.addEventListener("click", (e) => {
    if (!profileIcon.contains(e.target)) {
        menu.classList.remove("open");
    }
});



const CAPITULOS = 
[
  {
    "id": 1,
    "titulo": "Capítulo-01: HTML e CSS",
    "video": "../assets/video/video.mp4",
    "material": "https://www.slideshare.net/slideshow/embed_code/key/4hRTNbQIfzYxpZ",
    "exercicios": [
      {
        "pergunta": "Qual tag HTML é usada para criar um link?",
        "alternativas": ["button", "a", "p", "img", "link"],
        "correta": "1"
      },
      {
        "pergunta": "Qual tag é usada para inserir uma imagem?",
        "alternativas": ["href", "img", "picture", "image", "src"],
        "correta": "1"
      },
      {
        "pergunta": "Qual propriedade altera a cor do texto no CSS?",
        "alternativas": ["background", "color", "text", "font-style", "text-color"],
        "correta": "1"
      },
      {
        "pergunta": "O que faz a propriedade background-color?",
        "alternativas": ["Muda o fundo", "Muda a margem", "Muda o texto", "Muda a borda"],
        "correta": "0"
      },
      {
        "pergunta": "Como criar uma lista não ordenada?",
        "alternativas": ["div e li", "ul e li", "li sozinho", "ol e li"],
        "correta": "1"
      }
    ]
  },

  {
    "id": 2,
    "titulo": "Capítulo-02: JavaScript",
    "video": "../assets/video/video.mp4",
    "material": "https://www.slideshare.net/slideshow/embed_code/key/31x6mSgsWOXdkf",
    "exercicios": [
      {
        "pergunta": "Qual palavra-chave possui escopo de bloco?",
        "alternativas": ["function", "var", "const", "let"],
        "correta": "3"
      },
      {
        "pergunta": "Como selecionar um elemento pelo ID?",
        "alternativas": ["querySelector()", "getElementById()", "getId()", "querySelect()"],
        "correta": "1"
      },
      {
        "pergunta": "Qual a diferença entre == e ===?",
        "alternativas": ["=== compara tipo e valor", "Nenhuma", "== compara tipo", "=== compara só valor"],
        "correta": "0"
      },
      {
        "pergunta": "Qual evento detecta um clique?",
        "alternativas": ["onclick", "onsubmit", "onhover", "onpress"],
        "correta": "0"
      },
      {
        "pergunta": "Como somar dois números?",
        "alternativas": ["a - b", "a + b", "a * b", "a ++ b"],
        "correta": "1"
      }
    ]
  },

  {
    "id": 3,
    "titulo": "Capítulo-03: Java",
    "video": "../assets/video/video.mp4",
    "material": "https://www.slideshare.net/slideshow/embed_code/key/7fpkN1Qt7coCeb",
    "exercicios": [
      {
        "pergunta": "Qual tipo armazena números inteiros?",
        "alternativas": ["double", "String", "int", "boolean"],
        "correta": "2"
      },
      {
        "pergunta": "Como imprimir algo no console?",
        "alternativas": ["System.out.println()", "print()", "console.log()", "System.print()"],
        "correta": "0"
      },
      {
        "pergunta": "Qual palavra cria uma classe?",
        "alternativas": ["create", "class", "new", "public"],
        "correta": "1"
      },
      {
        "pergunta": "Qual tipo representa verdadeiro ou falso?",
        "alternativas": ["boolean", "int", "char", "String"],
        "correta": "0"
      },
      {
        "pergunta": "Como declarar uma variável?",
        "alternativas": ["declare x;", "int x;", "variável x;", "let x;"],
        "correta": "1"
      }
    ]
  },

  {
    "id": 4,
    "titulo": "Capítulo-04: Node.js",
    "video": "../assets/video/video.mp4",
    "material": "https://www.slideshare.net/slideshow/embed_code/key/GmbL0hfDfZ7b8V",
    "exercicios": [
      {
        "pergunta": "O Node.js utiliza qual linguagem?",
        "alternativas": ["JavaScript", "Python", "Java", "C#"],
        "correta": "0"
      },
      {
        "pergunta": "Qual comando inicia um projeto Node?",
        "alternativas": ["npm start", "npm init", "node project", "node init"],
        "correta": "1"
      },
      {
        "pergunta": "O que é o NPM?",
        "alternativas": ["Gerenciador de pacotes", "IDE", "Framework", "Banco de dados"],
        "correta": "0"
      },
      {
        "pergunta": "Como executar um arquivo .js no Node?",
        "alternativas": ["npm file.js", "execute file.js", "run file.js", "node file.js"],
        "correta": "3"
      },
      {
        "pergunta": "O Node é executado no…",
        "alternativas": ["Servidor", "Navegador", "Mobile", "Banco de dados"],
        "correta": "0"
      }
    ]
  },

  {
    "id": 5,
    "titulo": "Capítulo-05: Banco de Dados",
    "video": "../assets/video/video.mp4",
    "material": "",
    "exercicios": [
      {
        "pergunta": "O que é um banco de dados?",
        "alternativas": ["Um sistema de armazenamento de dados", "Um arquivo HTML", "Um site", "Um jogo"],
        "correta": "0"
      },
      {
        "pergunta": "O que é uma tabela?",
        "alternativas": ["Uma coluna apenas", "Coleção de dados organizados em linhas e colunas", "Conjunto de páginas"],
        "correta": "1"
      },
      {
        "pergunta": "O que é uma chave primária?",
        "alternativas": ["Identificador único", "Senha do banco", "Um nome da tabela"],
        "correta": "0"
      },
      {
        "pergunta": "Qual é um tipo comum de BD relacional?",
        "alternativas": ["Node", "MySQL", "CSS", "HTML"],
        "correta": "1"
      },
      {
        "pergunta": "O que é um registro?",
        "alternativas": ["Uma linha da tabela", "Uma coluna da tabela", "Uma tabela"],
        "correta": "0"
      }
    ]
  },

  {
    "id": 6,
    "titulo": "Capítulo-06: Banco de Dados SQL",
    "video": "../assets/video/video.mp4",
    "material": "",
    "exercicios": [
      {
        "pergunta": "O que significa SQL?",
        "alternativas": ["Structured Query Language", "Simple Query Line", "System Query List"],
        "correta": "0"
      },
      {
        "pergunta": "Qual comando retorna dados?",
        "alternativas": ["DELETE", "INSERT", "SELECT", "UPDATE"],
        "correta": "2"
      },
      {
        "pergunta": "Qual comando insere dados?",
        "alternativas": ["INSERT", "PUT", "ADD", "JOIN"],
        "correta": "0"
      },
      {
        "pergunta": "Qual comando apaga registros?",
        "alternativas": ["DROP", "DELETE", "REMOVE", "ERASE"],
        "correta": "1"
      },
      {
        "pergunta": "Qual comando altera dados?",
        "alternativas": ["MODIFY", "UPDATE", "CHANGE"],
        "correta": "1"
      }
    ]
  },

  {
    "id": 7,
    "titulo": "Capítulo-07: Banco de Dados NoSQL",
    "video": "../assets/video/video.mp4",
    "material": "",
    "exercicios": [
      {
        "pergunta": "O que significa NoSQL?",
        "alternativas": ["Sem SQL para sempre", "Não apenas SQL", "Novo SQL"],
        "correta": "1"
      },
      {
        "pergunta": "Qual banco NoSQL usa documentos JSON?",
        "alternativas": ["PostgreSQL", "MongoDB", "Oracle", "MySQL"],
        "correta": "1"
      },
      {
        "pergunta": "O NoSQL é ideal para…",
        "alternativas": ["Grandes volumes e dados flexíveis", "Estruturas rígidas", "Dados fixos"],
        "correta": "0"
      },
      {
        "pergunta": "Qual tipo NÃO é NoSQL?",
        "alternativas": ["Relacional", "Documento", "Grafo", "Chave-valor"],
        "correta": "0"
      },
      {
        "pergunta": "NoSQL normalmente é…",
        "alternativas": ["Escalável horizontalmente", "Não escalável", "Escalável só verticalmente"],
        "correta": "0"
      }
    ]
  }
]
// =========================
// UTIL – EMBARALHAR ARRAY
// =========================
function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// =========================
// VARIÁVEIS
// =========================
const params = new URLSearchParams(window.location.search);
const capituloURL = Number(params.get("capitulo")) || 1;
let capAtual = capituloURL - 1;

const tituloCapitulo = document.getElementById("titulo-capitulo");
const videoPlayer = document.getElementById("video-player");
const listaExercicios = document.getElementById("lista-exercicios");
const materialIframe = document.getElementById("material-iframe");
const navBtns = document.querySelectorAll(".nav-btn");
const submitBtn = document.querySelector(".submit-btn");

// =========================
// CARREGAR CAPÍTULO
// =========================
function carregarCapitulo(index) {
  const cap = CAPITULOS[index];
  if (!cap) return;

  // título
  tituloCapitulo.textContent = cap.titulo;

  // vídeo
  videoPlayer.src = cap.video;

  // material
  if(materialIframe) {
    materialIframe.src = cap.material || "";
  }

  // exercícios
  listaExercicios.innerHTML = "";
  cap.exercicios.forEach((ex, i) => {
    const alternativas = embaralhar(
      ex.alternativas.map((alt, idx) => ({texto: alt, id: idx}))
    );

    let html = `<p><strong>${i + 1})</strong> ${ex.pergunta}</p>`;
    alternativas.forEach(a => {
      html += `
       <label>
  <input type="radio" name="q${i}" value="${a.id}">
  <span>${a.texto}</span>
</label><br>

      `;
    });

    const div = document.createElement("div");
    div.classList.add("exercicio");
    div.innerHTML = html;
    listaExercicios.appendChild(div);
  });
}

// =========================
// VALIDAR EXERCÍCIOS
// =========================
function validarRespostas() {
  const cap = CAPITULOS[capAtual];
  let corretas = 0;

  cap.exercicios.forEach((ex, i) => {
    const marcada = document.querySelector(`input[name="q${i}"]:checked`);
    if (marcada && Number(marcada.value) === Number(ex.correta)) {
      corretas++;
    }
  });

  alert(`Você acertou ${corretas} de ${cap.exercicios.length} questões.`);
}

// =========================
// NAVEGAÇÃO
// =========================
navBtns[0].addEventListener("click", () => {
  if (capAtual > 0) {
    capAtual--;
    carregarCapitulo(capAtual);
  }
});

navBtns[1].addEventListener("click", () => {
  if (capAtual < CAPITULOS.length - 1) {
    capAtual++;
    carregarCapitulo(capAtual);
  }
});

submitBtn.addEventListener("click", validarRespostas);

carregarCapitulo(capAtual);

function validarRespostas() {
  const cap = CAPITULOS[capAtual];
  let corretas = 0;

  cap.exercicios.forEach((ex, i) => {
    const radios = document.querySelectorAll(`input[name="q${i}"]`);

    radios.forEach(radio => {
      const span = radio.nextElementSibling;

      // desabilita depois de enviar
      radio.disabled = true;

      // marca a correta
      if (Number(radio.value) === Number(ex.correta)) {
        span.classList.add("correta");
      }

      // se marcou errado
      if (radio.checked && Number(radio.value) !== Number(ex.correta)) {
        span.classList.add("errada");
      }

      // conta acertos
      if (radio.checked && Number(radio.value) === Number(ex.correta)) {
        corretas++;
      }
    });
  });

  alert(`Você acertou ${corretas} de ${cap.exercicios.length} questões.`);
}

function validarRespostas() {
  const cap = CAPITULOS[capAtual];
  let corretas = 0;

  cap.exercicios.forEach((ex, i) => {
    const radios = document.querySelectorAll(`input[name="q${i}"]`);
    let explicacaoExibida = false;

    radios.forEach(radio => {
      const span = radio.nextElementSibling;

      // Desabilita depois de enviar
      radio.disabled = true;

      // Marca a correta
      if (Number(radio.value) === Number(ex.correta)) {
        span.classList.add("correta");
      }

      // Se marcou errado
      if (radio.checked && Number(radio.value) !== Number(ex.correta)) {
        span.classList.add("errada");
        
        // Exibe a explicação para a resposta errada
        if (!explicacaoExibida) {
          const explicacaoDiv = document.createElement("div");
          explicacaoDiv.classList.add("explicacao");
          explicacaoDiv.innerHTML = `<p><strong>Explicação:</strong> ${ex.explicacao}</p>`;
          span.parentElement.appendChild(explicacaoDiv);
          explicacaoExibida = true;
        }
      }

      // Conta acertos
      if (radio.checked && Number(radio.value) === Number(ex.correta)) {
        corretas++;
      }
    });
  });

  alert(`Você acertou ${corretas} de ${cap.exercicios.length} questões.`);
}

function validarRespostas() {
  const cap = CAPITULOS[capAtual];
  let corretas = 0;

  cap.exercicios.forEach((ex, i) => {
    const radios = document.querySelectorAll(`input[name="q${i}"]`);
    let explicacaoExibida = false;

    radios.forEach(radio => {
      const span = radio.nextElementSibling;

      // Desabilita depois de enviar
      radio.disabled = true;

      // Marca a resposta correta
      if (Number(radio.value) === Number(ex.correta)) {
        span.classList.add("correta");
      }

      // Se a resposta estiver errada
      if (radio.checked && Number(radio.value) !== Number(ex.correta)) {
        span.classList.add("errada");

        // Exibe a explicação para a resposta errada, mas apenas uma vez
        if (!explicacaoExibida) {
          const explicacaoDiv = document.createElement("div");
          explicacaoDiv.classList.add("explicacao");
          explicacaoDiv.innerHTML = `<p><strong>Explicação:</strong> ${ex.explicacao}</p>`;
          span.parentElement.appendChild(explicacaoDiv);
          explicacaoExibida = true;
        }
      }

      // Conta os acertos
      if (radio.checked && Number(radio.value) === Number(ex.correta)) {
        corretas++;
      }
    });
  });

  // Exibe o número de acertos
  alert(`Você acertou ${corretas} de ${cap.exercicios.length} questões.`);
}
