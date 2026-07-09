// ===============================
// Knowledge Base Search
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.getElementById("searchInput");

    // Stop if the page doesn't have a search box
    if (!searchInput) return;

    const articles = document.querySelectorAll(".article");

    searchInput.addEventListener("input", () => {

        const search = searchInput.value.trim().toLowerCase();

        let visibleCount = 0;

        articles.forEach(article => {

            const text = article.textContent.toLowerCase();

            if (text.includes(search)) {

                article.style.display = "";

                visibleCount++;

            } else {

                article.style.display = "none";

            }

        });

        // Display a message if nothing matches
        let noResults = document.getElementById("noResults");

        if (!noResults) {

            noResults = document.createElement("div");
            noResults.id = "noResults";
            noResults.className = "alert alert-warning text-center mt-4";
            noResults.textContent = "No articles found.";

            document.querySelector(".container.py-5").appendChild(noResults);

        }

        noResults.style.display = visibleCount === 0 ? "block" : "none";

    });

});
