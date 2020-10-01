// My Contacts by Mr. V

// HTML Elements
let newContactTab = document.getElementById("new-contact");
let viewContactTab = document.getElementById("view-contact");
let formDiv = document.getElementById("form");
let viewDiv = document.getElementById("view");
let submitBtn = document.getElementById("submit");

// Global Variable
let contacts = initContacts();

function initContacts() {
  // Check localStorage for contacts info.
  // Return [] if no data in localStorage, otherwise return stored data
  let storedContactsStr = localStorage.getItem("contacts");
  if (storedContactsStr) {
    return JSON.parse(storedContactsStr)
  } else {
    return [];
  }
}

// Submit New Contact
submitBtn.addEventListener("click", submitContact);

function submitContact() {
  // Create new contact and add to contact array
  contacts.push({
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value
  });

  // Add contact array to localStorage
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

// Tabs
newContactTab.addEventListener("click", showNew);
viewContactTab.addEventListener("click", showView);

function showNew() {
  // Toggle Active Class & Switch View
  if (!newContactTab.classList.contains("active")) {
    newContactTab.classList.add("active");
    viewContactTab.classList.remove("active");
    formDiv.style.display = "block";
    viewDiv.style.display = "none";
  }
}

function showView() {
  // Toggle Active Class & Switch View
  if (!viewContactTab.classList.contains("active")) {
    viewContactTab.classList.add("active");
    newContactTab.classList.remove("active");
    viewDiv.style.display = "block";
    formDiv.style.display = "none";
  }

  // Display all Contacts
  viewDiv.innerHTML = "<h2>View Contacts</h2>"
  for (let i = 0; i < contacts.length; i++) {
    viewDiv.append(createContactDiv(contacts[i]));
  }
}

function createContactDiv(contactObj) {
  // create and return a div with the contact info
  let pEl = document.createElement("p");
  pEl.innerHTML = `Name: ${contactObj.name} Phone: ${contactObj.phone} Email: ${contactObj.email}`;

  return pEl;
}