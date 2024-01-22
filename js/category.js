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

function findAll(data) {
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      console.log("data" + data[key].name);

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

      const editA = document.createElement("a");
      editA.setAttribute("href","http://google.com");
      editA.textContent = data[key].name;

      nameDiv.appendChild(editA);

      const deleteDiv = document.createElement("div");
      deleteDiv.classList.add("itemTable");

      const deleteSpan = document.createElement("span");
      deleteSpan.classList.add("material-symbols-outlined");
      deleteSpan.textContent = "delete";
      deleteDiv.appendChild(deleteSpan);


      document.getElementById("containerTable").appendChild(idDiv);
      document.getElementById("containerTable").appendChild(iconDiv);
      document.getElementById("containerTable").appendChild(nameDiv);
      document.getElementById("containerTable").appendChild(deleteDiv);
      
    }

  }

}
