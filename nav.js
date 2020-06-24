document.querySelector(".nav-right").innerHTML += `
<ul>
<li><a title="accueil" href="index.html">Accueil</a></li>
<li><a title="accueil" href="index.html">Meilleures Ventes</a></li>
<li><a title="accueil" href="index.html">Dernières Nouveautés</a></li>
</ul>
`;

document.querySelector(".menu").innerHTML += `
<ul>
<li><a title="accueil" href="index.html">Accueil</a></li>
<li><a title="accueil" href="index.html">Meilleures Ventes</a></li>
<li><a title="accueil" href="index.html">Dernières Nouveautés</a></li>
</ul>
`;

let nav = document.querySelector('.little-nav');

document.querySelector('.toggle-button').addEventListener("click", () => {
    nav.classList.toggle('little-nav-open');
});