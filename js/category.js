async function loadData() {
  try {
    const response = await fetch("http://localhost:8080/api/categories");
    const data = await response.json();
    document.addEventListener("DOMContentLoaded", findAll(data));


  }
  catch (error) {
    console.log(error);
  }
}

loadData();



function findAll(data, characters) {
  let nameSearchText = document.getElementById("nameSearchText");
  nameSearchText.addEventListener("keyup", function (event) {
    if (characters == null || characters == "") {
      console.log("findAll");
    }
    else {
      if (nameSearchText.value.includes(characters)) {
        console.log("yes includes");
      }
    }

  });


  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const idDiv = document.createElement("div");
      idDiv.classList.add("itemTable");
      idDiv.textContent = data[key].id;

      const iconDiv = document.createElement("div");
      iconDiv.classList.add("itemTable");

      const iconSpan = document.createElement("span");
      iconSpan.classList.add("material-symbols-outlined");
      iconSpan.textContent = data[key].icon;
      iconDiv.appendChild(iconSpan);

      const nameDiv = document.createElement("div");
      nameDiv.classList.add("itemTable");

      const edita = document.createelement("a");
      edita.setattribute("href", `ecategory.html?id=${data[key].id}&operation=update`);
      edita.textcontent = data[key].name;

      nameDiv.appendChild(editA);

      const deleteDiv = document.createElement("div");
      deleteDiv.classList.add("itemTable");
      deleteDiv.setAttribute("class", "deleteSpan");

      const deleteSpan = document.createElement("span");
      deleteSpan.classList.add("material-symbols-outlined");
      deleteSpan.textContent = "delete";
      deleteDiv.appendChild(deleteSpan);

      deleteDiv.addEventListener("click", function (event) {
        deleteItem(data[key].id);

      }, false);


      document.getElementById("containerTable").appendChild(idDiv);
      document.getElementById("containerTable").appendChild(iconDiv);
      document.getElementById("containerTable").appendChild(nameDiv);
      document.getElementById("containerTable").appendChild(deleteDiv);

    }

  }



}

function filterData(data, characters) {
  console.log(data.name);
}

async function deleteItem(id) {
  const response = await fetch(`http://localhost:8080/api/categories/${id}`, {
    method: 'DELETE'
  });
  location.reload();
}