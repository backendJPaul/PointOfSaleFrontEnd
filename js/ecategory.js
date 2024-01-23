const urlSearchParams = new URLSearchParams(window.location.search);
async function findById(id) {
    try {
        const response = await fetch(`http://localhost:8080/api/categories/${id}`);
        const data = await response.json();
        document.addEventListener("DOMContentLoaded", loadData(data));
    }
    catch (error) {
        console.log(error)
    }
}
findById(urlSearchParams.get("id"));
function loadData(data) {
    document.getElementById("iconText").value = data.icon;
    document.getElementById("nameText").value = data.name;
}


async function update(data = {}) {
    const response = await fetch(`http://localhost:8080/api/categories/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            'id': '1',
            'icon': 'computer',
            'name': 'computers'
        }
    }

    );
}

document.getElementById("submitButton").addEventListener("click",
    update({
        "name" : "console"
    }));