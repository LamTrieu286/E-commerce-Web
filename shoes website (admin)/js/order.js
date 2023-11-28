function disapprove(row) {
  // Display confirmation dialog to the user
  let result = window.confirm("Do you want to disapprove the order?");

  // If user confirms, proceed with disapproval
  if (result) {
    disapproveOrder(row);
  }
}

function disapproveOrder(row) {
  // Add 'inactive' class to the row
  row.classList.add("inactive");

  // Get all 'td' elements in the row
  let tds = row.getElementsByTagName("td");

  // Loop through all 'td' elements except the last one
  for (let i = 0; i < tds.length - 1; i++) {
    // Add 'inactive' class to the 'td' element
    tds[i].classList.add("inactive");
  }

  // Update the second-to-last 'td' element
  let secondToLastTd = tds[tds.length - 2];
  secondToLastTd.setAttribute("colspan", "2");
  secondToLastTd.setAttribute("style", "text-align: center; color: red;");
  secondToLastTd.textContent = "Order disapproved";

  // Remove the last 'td' element (which contains the "Disapprove" button)
  row.removeChild(tds[tds.length - 1]);
}
