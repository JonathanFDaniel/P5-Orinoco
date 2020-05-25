document.querySelector(".menu-nav").innerHTML += `
<ul>
<li><a title="accueil" href="index.html">Accueil</a></li>
<li><a title="accueil" href="index.html">Meilleures Ventes</a></li>
<li><a title="accueil" href="index.html">Dernières Nouveautés</a></li>
<li><a title="panier" href="panier.html">Identifiez-vous</a></li>
<li><a title="panier" href="panier.html">Panier</a></li>
</ul>
`;

let nav = document.querySelector('.little-nav');

document.querySelector('.toggle-button').addEventListener("click", () => {
    nav.classList.toggle('little-nav-open');
});