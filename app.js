const dark = document.getElementById('dark');
const mainDiv = document.getElementById('main');


dark.onclick = function () {
    mainDiv.classList.toggle('dark')
    if (mainDiv.classList.contains('dark')) {
        dark.textContent = "light"
        dark.classList = "btn btn-light"
    } else {
        dark.textContent = "dark";
        dark.classList = "btn btn-dark"
    }
}