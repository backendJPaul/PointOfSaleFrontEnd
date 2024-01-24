const urlSearchParams = new URLSearchParams(window.location.search);
const id = urlSearchParams.get("id");
const operation = urlSearchParams.get("operation");
let iconCategory = null;
let nameCategory = null;

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
switch(operation){
    case "update" : {
        console.log("update");
        document.getElementById("submitButton").addEventListener("click", update);
        findById(id);
        break;
    }
    case "save" : {
        console.log("save");
        document.getElementById("submitButton").addEventListener("click", save);
        break;
    }
}

function loadData(data) {
    document.getElementById("iconText").value = data.icon;
    document.getElementById("nameText").value = data.name;

}

function loadFields() {
    iconCategory = document.getElementById("iconText").value;
    nameCategory = document.getElementById("nameText").value;
}


async function update() {
    loadFields();

    const data = {
        "id": `${id}`,
        "icon": `${iconCategory}`,
        "name": `${nameCategory}`
    }

    const response = await fetch(`http://localhost:8080/api/categories/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    );
}

async function save(){
    loadFields();
    const data = {
        "icon" : `${iconCategory}`,
        "name" : `${nameCategory}`
    }
    console.log(data);
    const response = await fetch(`http://localhost:8080/api/categories`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    );
}