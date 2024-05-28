function getProjects() {
    const urlGitHub = 'https://api.github.com/users/ftelles19/repos'

    fetch(urlGitHub, {
        method: 'GET',
    })
        .then((response) => response.json())
        .then((response) => {
            console.log(response)
            showProjects(response)
        })
        .catch((e) => {
            console.log(`Error -> ${e}`)
        })
}

function showProjects(data) {
    var listElement = document.getElementById('lista-projetos')
    for (let i = 0; i < data.length; i++) {
        let div = document.createElement("div")
        let a = document.createElement("a")
        a.href = data[i]['clone_url']
        a.target = '_blank'
        let linkText = document.createTextNode(data[i]['name']);
        a.appendChild(linkText);
        div.appendChild(a)
        listElement.appendChild(div)
    }
}

getProjects()