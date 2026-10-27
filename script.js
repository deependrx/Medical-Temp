/* Quick customisation: update these values for each prospect before sending the preview. */
const BUSINESS = {
  name: "Your Business",
  category: "Local service · Your city",
  eyebrow: "LOCAL EXPERTISE, PERSONAL SERVICE",
  phoneDisplay: "Add your phone number",
  phone: "",
  email: "",
  address: "Add your business address",
  mapUrl: ""
};

document.querySelectorAll("[data-business]").forEach((element) => {
  const key = element.dataset.business;
  if (BUSINESS[key]) element.textContent = BUSINESS[key];
});

document.title = BUSINESS.name === "Your Business"
  ? "Local Business | A better first impression"
  : BUSINESS.name + " | A better first impression";

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});
nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
  menuButton?.setAttribute("aria-label", "Open navigation");
}));

document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("enquiry-form");
const status = document.getElementById("form-status");
form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const subject = encodeURIComponent("Website enquiry — " + BUSINESS.name);
  const body = encodeURIComponent(
    "Name: " + formData.get("name") + "\nPhone or email: " + formData.get("contact") +
    "\nEnquiry: " + formData.get("service") + "\n\nMessage:\n" + (formData.get("message") || "No additional details.")
  );
  if (BUSINESS.email) {
    window.location.href = "mailto:" + BUSINESS.email + "?subject=" + subject + "&body=" + body;
    status.textContent = "Opening your email app with the enquiry. Nothing is stored on this website.";
  } else {
    status.textContent = "Demo mode: add the business email in script.js to enable enquiry hand-off. No details were sent or stored.";
  }
});
