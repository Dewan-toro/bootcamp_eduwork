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

const data = [
  {
    Wilayah: "ACEH",
    Total_Suara: 0,
    Paslon_01: 1245681,
    Paslon_02: 317537,
    Paslon_03: 319507,
  },
  {
    Wilayah: "BALI",
    Total_Suara: 0,
    Paslon_01: 494753,
    Paslon_02: 353144,
    Paslon_03: 116968,
  },
  {
    Wilayah: "BANTEN",
    Total_Suara: 0,
    Paslon_01: 294162,
    Paslon_02: 122120,
    Paslon_03: 432131,
  },
  {
    Wilayah: "BENGKULU",
    Total_Suara: 0,
    Paslon_01: 999020,
    Paslon_02: 145521,
    Paslon_03: 288332,
  },
  {
    Wilayah: "DAERAH ISTIMEWA YOGYAKARTA",
    Total_Suara: 0,
    Paslon_01: 175414,
    Paslon_02: 122451,
    Paslon_03: 387600,
  },
  {
    Wilayah: "DKI JAKARTA",
    Total_Suara: 0,
    Paslon_01: 252679,
    Paslon_02: 654750,
    Paslon_03: 552804,
  },
  {
    Wilayah: "GORONTALO",
    Total_Suara: 0,
    Paslon_01: 125243,
    Paslon_02: 124566,
    Paslon_03: 24243,
  },
  {
    Wilayah: "JAMBI",
    Total_Suara: 0,
    Paslon_01: 130384,
    Paslon_02: 25331,
    Paslon_03: 24243,
  },
  {
    Wilayah: "JAWA BARAT",
    Total_Suara: 0,
    Paslon_01: 7865810,
    Paslon_02: 123365,
    Paslon_03: 129375,
  },
  {
    Wilayah: "JAWA TENGAH",
    Total_Suara: 0,
    Paslon_01: 1507196,
    Paslon_02: 3755474,
    Paslon_03: 2259915,
  },
  {
    Wilayah: "JAWA TIMUR",
    Total_Suara: 0,
    Paslon_01: 2003611,
    Paslon_02: 4859333,
    Paslon_03: 4954846,
  },
  {
    Wilayah: "KALIMANTAN BARAT",
    Total_Suara: 0,
    Paslon_01: 211640,
    Paslon_02: 420730,
    Paslon_03: 410935,
  },
  {
    Wilayah: "KALIMANTAN SELATAN",
    Total_Suara: 0,
    Paslon_01: 246504,
    Paslon_02: 957555,
    Paslon_03: 885788,
  },
  {
    Wilayah: "KALIMANTAN TENGAH",
    Total_Suara: 0,
    Paslon_01: 86383,
    Paslon_02: 234075,
    Paslon_03: 133766,
  },
  {
    Wilayah: "KALIMANTAN TIMUR",
    Total_Suara: 0,
    Paslon_01: 148578,
    Paslon_02: 116802,
    Paslon_03: 16767,
  },
  {
    Wilayah: "KALIMANTAN UTARA",
    Total_Suara: 0,
    Paslon_01: 21164,
    Paslon_02: 42073,
    Paslon_03: 41093,
  },
  {
    Wilayah: "KEPULAUAN BANGKA BELITUNG",
    Total_Suara: 0,
    Paslon_01: 38590,
    Paslon_02: 59041,
    Paslon_03: 12182,
  },
  {
    Wilayah: "KEPULAUAN RIAU",
    Total_Suara: 0,
    Paslon_01: 197175,
    Paslon_02: 197029,
    Paslon_03: 77064,
  },
  {
    Wilayah: "LAMPUNG",
    Total_Suara: 0,
    Paslon_01: 300842,
    Paslon_02: 118334,
    Paslon_03: 48087,
  },
  {
    Wilayah: "MALUKU",
    Total_Suara: 0,
    Paslon_01: 138913,
    Paslon_02: 138913,
    Paslon_03: 151133,
  },
  {
    Wilayah: "MALUKU UTARA",
    Total_Suara: 0,
    Paslon_01: 118249,
    Paslon_02: 118249,
    Paslon_03: 131754,
  },
  {
    Wilayah: "NUSA TENGGARA BARAT",
    Total_Suara: 0,
    Paslon_01: 1438915,
    Paslon_02: 450162,
    Paslon_03: 261769,
  },
  {
    Wilayah: "NUSA TENGGARA TIMUR",
    Total_Suara: 0,
    Paslon_01: 1438915,
    Paslon_02: 450162,
    Paslon_03: 261769,
  },
  {
    Wilayah: "PAPUA",
    Total_Suara: 0,
    Paslon_01: 75152,
    Paslon_02: 10470,
    Paslon_03: 886188,
  },
  {
    Wilayah: "PAPUA BARAT",
    Total_Suara: 0,
    Paslon_01: 223069,
    Paslon_02: 10470,
    Paslon_03: 382054,
  },
  {
    Wilayah: "PAPUA BARAT DAYA",
    Total_Suara: 0,
    Paslon_01: 6310,
    Paslon_02: 3410,
    Paslon_03: 88619,
  },
  {
    Wilayah: "PAPUA PEGUNUNGAN",
    Total_Suara: 0,
    Paslon_01: 5190,
    Paslon_02: 10114,
    Paslon_03: 13014,
  },
  {
    Wilayah: "PAPUA SELATAN",
    Total_Suara: 0,
    Paslon_01: 52369,
    Paslon_02: 34105,
    Paslon_03: 79789,
  },
  {
    Wilayah: "PAPUA TENGAH",
    Total_Suara: 0,
    Paslon_01: 187096,
    Paslon_02: 44289,
    Paslon_03: 34203,
  },
  {
    Wilayah: "RIAU",
    Total_Suara: 0,
    Paslon_01: 1376850,
    Paslon_02: 229361,
    Paslon_03: 420282,
  },
  {
    Wilayah: "SULAWESI BARAT",
    Total_Suara: 0,
    Paslon_01: 541565,
    Paslon_02: 118581,
    Paslon_03: 105702,
  },
  {
    Wilayah: "SULAWESI SELATAN",
    Total_Suara: 0,
    Paslon_01: 611745,
    Paslon_02: 88618,
    Paslon_03: 406900,
  },
  {
    Wilayah: "SULAWESI TENGAH",
    Total_Suara: 0,
    Paslon_01: 406902,
    Paslon_02: 14095,
    Paslon_03: 210722,
  },
  {
    Wilayah: "SULAWESI TENGGARA",
    Total_Suara: 0,
    Paslon_01: 37632,
    Paslon_02: 13891,
    Paslon_03: 1646,
  },
  {
    Wilayah: "SULAWESI UTARA",
    Total_Suara: 0,
    Paslon_01: 98810,
    Paslon_02: 801158,
    Paslon_03: 340347,
  },
  {
    Wilayah: "SUMATERA BARAT",
    Total_Suara: 0,
    Paslon_01: 801158,
    Paslon_02: 557868,
    Paslon_03: 284748,
  },
  {
    Wilayah: "SUMATERA SELATAN",
    Total_Suara: 0,
    Paslon_01: 437296,
    Paslon_02: 118581,
    Paslon_03: 20028,
  },
  {
    Wilayah: "SUMATERA UTARA",
    Total_Suara: 0,
    Paslon_01: 775920,
    Paslon_02: 557868,
    Paslon_03: 368237,
  },
  {
    Wilayah: "LUAR NEGERI",
    Total_Suara: 0,
    Paslon_01: 116965,
    Paslon_02: 987464,
    Paslon_03: 170814,
  },
];

const dataTable = new DataTable("app", data);
dataTable.render();