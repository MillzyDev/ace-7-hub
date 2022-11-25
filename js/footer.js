function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, "\\$&");
    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)")
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function closeFooter() {
    const footer = document.getElementById("footer");
    footer.style.display = "none";
    
    links = document.querySelectorAll("a");
    links.forEach(link => {
        const content = link.getAttribute("href");

        if (content.endsWith(".html"))
            link.setAttribute("href", `${content}?dsclm=0`);
    });
}

const disclaimer = getParameterByName("dsclm");

if (disclaimer === "0")
    closeFooter(); 