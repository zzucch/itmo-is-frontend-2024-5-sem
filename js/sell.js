const specifications = [
  "Processor frequency",
  "Price",
  "Display size",
  "Battery capacity",
];

let currentSpecificationIndex = 0;

function addSpecifications(event) {
  event.preventDefault();

  const specification = specifications[currentSpecificationIndex];
  currentSpecificationIndex++;

  const value = document.getElementById("value").value;

  const tableContainer = document.getElementById("table-container");
  const row = document.createElement("div");
  row.className = "row";

  const keyDiv = document.createElement("div");
  keyDiv.className = "key";
  keyDiv.textContent = specification;

  const valueDiv = document.createElement("div");
  valueDiv.className = "value";
  valueDiv.textContent = value;

  row.appendChild(keyDiv);
  row.appendChild(valueDiv);
  tableContainer.appendChild(row);

  if (currentSpecificationIndex < specifications.length) {
    document.getElementById("specification-display").textContent =
      specifications[currentSpecificationIndex];
  } else {
    document.getElementById("add-specification-form").style.display = "none";
    document.getElementById("submit-button").style.display = "block";
  }

  document.getElementById("value").value = "";
}

function deletePhone(index) {
  const phones = JSON.parse(localStorage.getItem("phones")) || [];

  phones.splice(index, 1);
  localStorage.setItem("phones", JSON.stringify(phones));

  loadPhonesFromLocalStorage();
}

function confirmListing() {
  const rows = document.querySelectorAll("#table-container .row");

  const phoneDetails = {};
  rows.forEach((row) => {
    const key = row.querySelector(".key").textContent;
    const value = row.querySelector(".value").textContent;
    phoneDetails[key] = value;
  });

  const phones = JSON.parse(localStorage.getItem("phones")) || [];
  phones.push(phoneDetails);
  localStorage.setItem("phones", JSON.stringify(phones));

  document.getElementById("success-message").style.display = "block";
  setTimeout(() => {
    document.getElementById("success-message").style.display = "none";
  }, 3000);

  document.getElementById("table-container").innerHTML = "";
  document.getElementById("add-specification-form").style.display = "block";
  document.getElementById("submit-button").style.display = "none";

  currentSpecificationIndex = 0;
  document.getElementById("specification-display").textContent =
    specifications[currentSpecificationIndex];

  loadPhonesFromLocalStorage();
}

function loadPhonesFromLocalStorage() {
  const phones = JSON.parse(localStorage.getItem("phones")) || [];
  const finalTableContainer = document.getElementById("final-table-container");

  finalTableContainer.innerHTML = "";

  if (phones.length === 0) {
    finalTableContainer.style.display = "none";
    return;
  }

  finalTableContainer.style.display = "block";

  phones.forEach((phone, index) => {
    const phoneEntry = document.createElement("div");
    phoneEntry.className = "final-phone";

    for (const key in phone) {
      const value = phone[key];

      const detailRow = document.createElement("div");
      detailRow.className = "row";

      const keyDiv = document.createElement("div");
      keyDiv.className = "key";
      keyDiv.textContent = key;

      const valueDiv = document.createElement("div");
      valueDiv.className = "value";
      valueDiv.textContent = value;

      detailRow.appendChild(keyDiv);
      detailRow.appendChild(valueDiv);
      phoneEntry.appendChild(detailRow);
    }

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => deletePhone(index);

    phoneEntry.appendChild(deleteButton);
    finalTableContainer.appendChild(phoneEntry);
  });
}

window.onload = function () {
  document.getElementById("specification-display").textContent =
    specifications[currentSpecificationIndex];

  document
    .getElementById("add-specification-form")
    .addEventListener("submit", addSpecifications);
  document
    .getElementById("submit-button")
    .addEventListener("click", confirmListing);

  loadPhonesFromLocalStorage();
};
