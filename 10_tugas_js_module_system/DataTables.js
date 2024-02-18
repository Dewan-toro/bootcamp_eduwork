class DataTable {
  constructor(containerId, data) {
    this.containerId = containerId;
    this.data = data;
    this.calculateTotalSuara();
  }

  calculateTotalSuara() {
    this.data.forEach((item) => {
      item.Total_Suara =
        parseInt(item.Paslon_01) +
        parseInt(item.Paslon_02) +
        parseInt(item.Paslon_03);

      item.Total_Suara = this.addThousandSeparator(item.Total_Suara);
      item.Paslon_01 = this.addThousandSeparator(item.Paslon_01);
      item.Paslon_02 = this.addThousandSeparator(item.Paslon_02);
      item.Paslon_03 = this.addThousandSeparator(item.Paslon_03);
    });
  }

  addThousandSeparator(number) {
    return number.toLocaleString("id-ID");
  }

  render() {
    const container = document.getElementById(this.containerId);
    if (!container) {
      console.error(`Element with id "${this.containerId}" not found.`);
      return;
    }

    const table = document.createElement("table");
    table.classList.add("table");

    const thead = document.createElement("thead");
    thead.style.backgroundColor = "#6C757D";
    thead.style.color = "#FFFFFF";
    const headerRow = document.createElement("tr");
    Object.keys(this.data[0]).forEach((key) => {
      const th = document.createElement("th");
      th.textContent = key;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    this.data.forEach((rowData) => {
      const row = document.createElement("tr");
      Object.values(rowData).forEach((value) => {
        const td = document.createElement("td");
        td.textContent = value;
        row.appendChild(td);
      });
      tbody.appendChild(row);
    });
    table.appendChild(tbody);

    container.appendChild(table);
  }
}

export { DataTable };
