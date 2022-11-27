function openFile(id) {
    const button = document.getElementById(id);
    button.innerText = "Access Granted";
    window.open(id);
}