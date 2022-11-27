const resourceBox = document.getElementById("resources");

fetch(`https://raw.githubusercontent.com/MillzyDev/ace-7-hub/master/resources.json`).then((res) => {
    res.text().then((json) => {
        console.log(json);
        const resources = JSON.parse(json);

        for (const resource of resources) {
            resourceBox.innerHTML += 
                `<div class="card"><h2 class="fileName">${resource.title}</h2><button id="${resource.link}" class="clearance" onclick="openFile(this.id)">Level ${resource.clearanceLevel} Required</button></div>`
        }
    })
});
 
