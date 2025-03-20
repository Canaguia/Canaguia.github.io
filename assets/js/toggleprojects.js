document.addEventListener("DOMContentLoaded", function () {
    var extraProjects = document.getElementById("extra-projects");
    var toggleButton = document.getElementById("toggle-projects");

    toggleButton.addEventListener("click", function () {
        if (extraProjects.style.display === "none" || extraProjects.style.display === "") {
            extraProjects.style.display = "block";
            toggleButton.textContent = "Show Less";
        } else {
            extraProjects.style.display = "none";
            toggleButton.textContent = "See Other Projects";
        }
    });
});