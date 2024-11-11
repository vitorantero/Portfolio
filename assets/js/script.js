'use strict';

// Função para alternar visibilidade de elementos
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// Variáveis para a sidebar
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// Variáveis para o modal de depoimentos
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// Variáveis para o seletor de categorias
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]"); // Removida duplicação
const selectValue = document.querySelector("[data-select-value]"); // Corrigido nome da variável para corresponder ao HTML
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// Adiciona evento a todos os itens do seletor
selectItems.forEach(item => {
  item.addEventListener("click", function () {
    const selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
});

// Variáveis e função de filtro
const filterItems = document.querySelectorAll("[data-filter-item]");
const filterFunc = function (selectedValue) {
  filterItems.forEach(item => {
    if (selectedValue === "todos" || selectedValue === item.dataset.category) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

// Adiciona evento a todos os botões de filtro para tela grande
let lastClickedBtn = filterBtn[0];
filterBtn.forEach(button => {
  button.addEventListener("click", function () {
    const selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);
    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
});

// Variáveis do formulário de contato
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

formInputs.forEach(input => {
  input.addEventListener("input", function () {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
});

form.addEventListener("submit", function(event) {
  event.preventDefault();
  emailjs.sendForm('service_jkdbsvb', 'template_nawdaco', this)
    .then(() => {
      alert('Email sent successfully!');
      form.reset();
      formBtn.setAttribute("disabled", "");
    }, (error) => {
      alert('Failed to send email: ' + JSON.stringify(error));
    });
});

// Variáveis para navegação de página
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach(link => {
  link.addEventListener("click", function () {
    pages.forEach(page => {
      if (this.innerHTML.toLowerCase() === page.dataset.page) {
        page.classList.add("active");
        link.classList.add("active");
        window.scrollTo(0, 0);
      } else {
        page.classList.remove("active");
        link.classList.remove("active");
      }
    });
  });
});
const certificates = [
  {
    title: "JavaScript e HTML",
    category: "Desenvolvimento",
    image: "./assets/images/certificados/1.png",
    link: "https://cursos.alura.com.br/certificate/vitorantero/logica-programacao-javascript-html",
    institution: "Alura"
  },
  {
    title: "JavaScript na Web",
    category: "Desenvolvimento",
    image: "./assets/images/certificados/2.png",
    link: "https://cursos.alura.com.br/user/vitorantero/course/javascript-web-armazenando-dados-navegador/certificate",
    institution: "Alura"
  },
  {
    title: "JavaScript: tipos, variáveis e funções",
    category: "Desenvolvimento",
    image: "./assets/images/certificados/3.jpg",
    link: "https://cursos.alura.com.br/user/vitorantero/course/fundamentos-javascript-tipos-variaveis-funcoes/certificate",
    institution: "Alura"
  },
  {
    title: "JavaScript: programando na linguagem da web",
    category: "Desenvolvimento",
    image: "./assets/images/certificados/4.jpg",
    link: "https://cursos.alura.com.br/user/vitorantero/course/javascript-programando-na-linguagem-web/certificate",
    institution: "Alura"
  },
  {
    title: "JavaScript: programando a Orientação a Objetos",
    category: "Desenvolvimento",
    image: "./assets/images/certificados/5.jpg",
    link: "https://cursos.alura.com.br/user/vitorantero/course/javascritpt-orientacao-objetos/certificate",
    institution: "Alura"
  },
  {
    title: "JavaScript: objetos",
    category: "Desenvolvimento",
    image: "./assets/images/certificados/6.jpg",
    link: "https://cursos.alura.com.br/user/vitorantero/course/fundamentos-javascript-objetos/certificate",
    institution: "Alura"
  },
  {
    title: "JavaScript: manipulando o DOM",
    category: "Desenvolvimento",
    image: "./assets/images/certificados/7.jpg",
    link: "https://cursos.alura.com.br/user/vitorantero/course/javascript-manipulando-dom/certificate",
    institution: "Alura"
  },
  {
    title: "JavaScript: Arrays",
    category: "Desenvolvimento",
    image: "./assets/images/certificados/8.jpg",
    link: "https://cursos.alura.com.br/user/vitorantero/course/fundamentos-javascript-arrays/certificate",
    institution: "Alura"
  },
  {
    title: "JavaScript: consumindo e tratando dados de uma API",
    category: "Desenvolvimento",
    image: "./assets/images/certificados/9.jpg",
    link: "https://cursos.alura.com.br/user/vitorantero/course/javascript-consumindo-tratando-dados-uma-api/certificate",
    institution: "Alura"
  },
  {
    title: "JavaScript para Web: Crie páginas dinâmicas",
    category: "Desenvolvimento",
    image: "./assets/images/certificados/10.jpg",
    link: "https://cursos.alura.com.br/user/vitorantero/course/javascript-web-paginas-dinamicas/certificate",
    institution: "Alura"
  },
  {
    title: "HTML: Formação Básica",
    category: "Desenvolvimento",
    image: "./assets/images/certificados/11.png",
    link: "https://www.linkedin.com/learning/certificates/de1f01536306e2d9a843cdb4db12e1e4bb2e02c83d0943ff1beebe8fc53da730",
    institution: "LinkedIn"
  },
  {
    title: "Mercado e Carreira em Desenvolvimento de Jogos",
    category: "Desenvolvimento",
    image: "./assets/images/certificados/12.png",
    link: "https://www.linkedin.com/learning/certificates/de1f01536306e2d9a843cdb4db12e1e4bb2e02c83d0943ff1beebe8fc53da730",
    institution: "DIO"
  },
  {
    title: "Modelagem de banco de dados relacional: entendendo SQL",
    category: "Dados",
    image: "./assets/images/certificados/13.png",
    link: "https://cursos.alura.com.br/user/vitorantero/course/modelagem-banco-dados-relacional-sql/certificate",
    institution: "Alura"
  },
  {
    title: "Modelagem de banco de dados relacional: modelagem lógica e física",
    category: "Dados",
    image: "./assets/images/certificados/14.png",
    link: "https://cursos.alura.com.br/user/vitorantero/course/modelagem-banco-dados-relacional-modelagem-logica-fisica/certificate",
    institution: "Alura"
  },
  {
    title: "Modelagem de banco de dados relacional: normalização",
    category: "Dados",
    image: "./assets/images/certificados/15.png",
    link: "https://cursos.alura.com.br/user/vitorantero/course/modelagem-banco-dados-relacional-normalizacao/certificate",
    institution: "Alura"
  },
  {
    title: "Modelagem de banco de dados: entidades, relacionamentos e atributos",
    category: "Dados",
    image: "./assets/images/certificados/16.png",
    link: "https://cursos.alura.com.br/user/vitorantero/course/modelagem-banco-dados-entidades-relacionamentos-atributos/certificate",
    institution: "Alura"
  },
  {
    title: "Google BigQuery e Data Studio: projeto final",
    category: "Dados",
    image: "./assets/images/certificados/17.png",
    link: "https://cursos.alura.com.br/user/vitorantero/course/google-big-query-data-studio-projeto-final/certificate",
    institution: "Alura"
  },
  {
    title: "Google Data Studio: explorando ferramenta",
    category: "Dados",
    image: "./assets/images/certificados/18.png",
    link: "https://cursos.alura.com.br/user/vitorantero/course/google-data-studio-introducao/certificate",
    institution: "Alura"
  },
  {
    title: "Google Data Studio: filtros e funções",
    category: "Dados",
    image: "./assets/images/certificados/19.png",
    link: "https://cursos.alura.com.br/user/vitorantero/course/google-data-studio-filtros-funcoes/certificate",
    institution: "Alura"
  },
  {
    title: "Google Data Studio: Parâmetros e Big Query",
    category: "Dados",
    image: "./assets/images/certificados/20.png",
    link: "https://cursos.alura.com.br/user/vitorantero/course/google-data-studio-parametros-big-query/certificate",
    institution: "Alura"
  },
  {
    title: "Business Intelligence: trabalhando com Data Warehouse",
    category: "Dados",
    image: "./assets/images/certificados/21.png",
    link: "https://cursos.alura.com.br/user/vitorantero/course/business-intelligence-introducao-inteligencia-empresarial/certificate",
    institution: "Alura"
  },
  {
    title: "BigQuery: funções do BigQuery",
    category: "Dados",
    image: "./assets/images/certificados/22.png",
    link: "https://cursos.alura.com.br/user/vitorantero/course/bigquery-funcoes/certificate",
    institution: "Alura"
  },
  {
    title: "BigQuery: manipulação de dados",
    category: "Dados",
    image: "./assets/images/certificados/23.png",
    link: "https://cursos.alura.com.br/user/vitorantero/course/bigquery-manipulacao-dados/certificate",
    institution: "Alura"
  },
  {
    title: "BigQuery: o banco de dados da Google para Big Data",
    category: "Dados",
    image: "./assets/images/certificados/24.png",
    link: "https://cursos.alura.com.br/user/vitorantero/course/bigquery-banco-dados-google-big-data/certificate",
    institution: "Alura"
  },
  {
    title: "Tableau: funções e cálculos LoD",
    category: "Dados",
    image: "./assets/images/certificados/25.png",
    link: "https://cursos.alura.com.br/user/vitorantero/course/tableau-funcoes-calculos-lod/certificate",
    institution: "Alura"
  },
  {
    title: "Tableau: gráficos simples e avançados",
    category: "Dados",
    image: "./assets/images/certificados/26.png",
    link: "https://cursos.alura.com.br/user/vitorantero/course/tableau-graficos-simples-avancados/certificate",
    institution: "Alura"
  },
  {
    title: "Power BI Desktop: construindo meu primeiro dashboard",
    category: "Dados",
    image: "./assets/images/certificados/27.png",
    link: "https://cursos.alura.com.br/user/vitorantero/course/power-bi-desktop-construindo-primeiro-dashboard/certificate",
    institution: "Alura"
  },
  {
    title: "Python Collections parte 1: listas e tuplas",
    category: "Desenvolvimento",
    image: "./assets/images/certificados/28.png",
    link: "https://cursos.alura.com.br/user/vitorantero/course/python-collections-listas-e-tuplas/certificate",
    institution: "Alura"
  },
  {
    title: "Python e APIs: conhecendo a biblioteca Requests",
    category: "Desenvolvimento",
    image: "./assets/images/certificados/29.png",
    link: "https://cursos.alura.com.br/user/vitorantero/course/python-apis-conhecendo-biblioteca-requests/certificate",
    institution: "Alura"
  },
  {
    title: "Python: avançando na linguagem",
    category: "Desenvolvimento",
    image: "./assets/images/certificados/30.png",
    link: "https://cursos.alura.com.br/user/vitorantero/course/python-3-avancando-na-linguagem/certificate",
    institution: "Alura"
  },
  {
    title: "Python: começando com a linguagem",
    category: "Desenvolvimento",
    image: "./assets/images/certificados/31.png",
    link: "https://cursos.alura.com.br/user/vitorantero/course/python-introducao-a-linguagem/certificate",
    institution: "Alura"
  },
  {
    title: "React: comece seu projeto full stack",
    category: "Desenvolvimento",
    image: "./assets/images/certificados/32.png",
    link: "https://cursos.alura.com.br/user/vitorantero/course/react-crie-primeira-pagina-web/certificate",
    institution: "Alura"
  },
  {
    title: "React: como os componentes funcionam",
    category: "Desenvolvimento",
    image: "./assets/images/certificados/33.png",
    link: "https://cursos.alura.com.br/user/vitorantero/course/react-componentes-funcionam/certificate",
    institution: "Alura"
  },
  {
    title: "React: desenvolvendo com JavaScript",
    category: "Desenvolvimento",
    image: "./assets/images/certificados/34.png",
    link: "https://cursos.alura.com.br/user/vitorantero/course/react-desenvolvendo-javascript/certificate",
    institution: "Alura"
  },
  {
    title: "React: desenvolvendo em React Router com JavaScript",
    category: "Desenvolvimento",
    image: "./assets/images/certificados/35.png",
    link: "https://cursos.alura.com.br/user/vitorantero/course/React-desenvolvendo-react-router-javaScript/certificate",
    institution: "Alura"
  },
  {
    title: "String em Python: extraindo informações de uma URL",
    category: "Desenvolvimento",
    image: "./assets/images/certificados/35.png",
    link: "https://cursos.alura.com.br/user/vitorantero/course/string-python-extraindo-informacoes-url/certificate",
    institution: "Alura"
  },
];


const projectList = document.getElementById('projectList');
const filterButtons = document.querySelectorAll('[data-filter-btn]');
const filterSelectButton = document.querySelector('.filter-select');
const selectList = document.querySelector('.select-list');

// Função para exibir certificados
function displayCertificates(filter = 'Todos') {
  projectList.innerHTML = '';
  certificates
    .filter(cert => filter === 'Todos' || cert.category === filter)
    .forEach(cert => {
      const listItem = document.createElement('li');
      listItem.classList.add('project-item', 'active');
      listItem.dataset.category = cert.category;

      listItem.innerHTML = `
        <a href="${cert.link}" target="_blank">
          <figure class="project-img">
            <div class="project-item-icon-box">
              <ion-icon name="eye-outline"></ion-icon>
            </div>
            <img src="${cert.image}" alt="${cert.title}" loading="lazy">
          </figure>
          <h3 class="project-title">${cert.title}</h3>
          <p class="project-category">${cert.institution}</p>
        </a>
      `;
      projectList.appendChild(listItem);
    });
}

// Inicializa com todos os certificados
displayCertificates();

// Configura os filtros de categoria
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    displayCertificates(button.innerText);
  });
});

// Configura a funcionalidade do seletor de categoria
filterSelectButton.addEventListener('click', () => {
  selectList.style.display = selectList.style.display === 'none' ? 'block' : 'none';
});

// Fecha o menu suspenso ao clicar fora dele
document.addEventListener('click', (event) => {
  if (!filterSelectButton.contains(event.target) && !selectList.contains(event.target)) {
    selectList.style.display = 'none';
  }
});