document.addEventListener("DOMContentLoaded", function () {
    const data = [
      { stock: "AAPL", price: "$103.50" },
      { stock: "AMZN", price: "$100.50" },
      { stock: "CVE", price: "$100.50" },
      { stock: "DIS", price: "$100.50" },
      { stock: "GOOGL", price: "$100.50" },
      { stock: "MSFT", price: "$100.50" },
      { stock: "RY", price: "$100.50" },
      { stock: "SHOP", price: "$100.50" },
      { stock: "SLF", price: "$100.50" },
      { stock: "TSLA", price: "$100.50" },
    ];
  
    const tableBody = document.querySelector("#summary");
  
    data.forEach((item) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td class="p-2 align-middle text-white">${item.stock}</td><td class="p-2 align-middle text-end text-white">${item.price}</td><td class="d-flex justify-content-center"><button type="button" class="btn btn-secondary btn-sm">+</button></td>`;
      tableBody.appendChild(row);
    });
  });