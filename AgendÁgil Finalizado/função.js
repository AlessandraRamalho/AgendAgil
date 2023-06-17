function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img2/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img2/close_white_36dp.svg";
    }
}

function toggleTheme() {
    var body = document.body;
    body.classList.toggle("dark-theme");
}

var themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", toggleTheme);

function showOptions() {
    var options = document.getElementById("options");
    if (options.style.display === "none") {
      options.style.display = "block";
    } else {
      options.style.display = "none";
    }
}

function Sair() {
    window.location.href = "login.html";
}

function Sobre() {
    window.location.href = "sobre.html";
}

function Agendamento() {
    window.location.href = "principal.html";
}

function Perfil() {
    window.location.href = "perfil.html";
}
