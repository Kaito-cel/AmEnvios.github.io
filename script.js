document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("searchBar");
    const products = document.querySelectorAll(".product");

    searchBar.addEventListener("keyup", (e) => {
        const searchString = e.target.value.toLowerCase();
        products.forEach(product => {
            const name = product.getAttribute("data-name").toLowerCase();
            if (name.includes(searchString)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
});

function buyProduct(affiliateLink) {
    window.location.href = affiliateLink;
}
