//Asynchronous Callback
function getDataMahasiswa(url, success, error) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.response);
      } else if (xhr.status === 404) {
        error();
      }
    }
  };
  xhr.open("GET", url);
  xhr.send();
}

getDataMahasiswa(
  "https://jsonplaceholder.typicode.com/users",
  (results) => {
    const mhs = JSON.parse(results);
    const table = document.createElement("table");
    table.classList.add("table");
    const thead = document.createElement("thead");
    thead.style.backgroundColor = "#6C757D";
    thead.style.color = "#FFFFFF";
    thead.innerHTML = `
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
      <th scope="col">Company</th>
    </tr>
    `;
    table.appendChild(thead);
    const tbody = document.createElement("tbody");
    mhs.forEach((m) => {
      const row = document.createElement("tr");
      row.innerHTML = `
      <td>${m.id}</td>
      <td>${m.name}</td>
      <td>${m.username}</td>
      <td>${m.email}</td>
      <td>${m.address.street}, ${m.address.suite},${m.address.city}</td>
      <td>${m.company.name}</td>
      `;
      tbody.appendChild(row);
    });
    table.appendChild(tbody);
    document.getElementById("app").appendChild(table);
  },
  () => {
    console.log("Data not found");
  }
);
