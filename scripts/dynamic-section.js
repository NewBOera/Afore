const selectElement = document.getElementById("select");
const formSelect = document.getElementById("want");
selectElement.addEventListener("change", () => {
   showSection();
});

document.addEventListener("DOMContentLoaded", () => {
   hideAforeSection();
   showSection();
});

function dynamicForm() {
   console.log(selectElement.value);
   if (selectElement.value === "no_afore") {
      formSelect.value = "wants";
   }
   if (selectElement.value === "yes_afore") {
      formSelect.value = "dont-want";
   }
   if (selectElement.value === "dont_know_afore") {
      formSelect.value = "dont-know";
   }

   if (selectElement.value === "want_advisor") {
      formSelect.value = "want-help";
   }
}

function hideAforeSection() {
   const afores = document.querySelectorAll(".afore");
   afores.forEach((afore) => {
      afore.classList.add("hidden");
   });

   const $AforesLg = document.querySelectorAll(".aforelg");
   $AforesLg.forEach((aforeLg) => {
      aforeLg.classList.remove("lg:flex");
   });
}

function showSection() {
   if (selectElement.value === "no_afore") {
      hideAforeSection();

      const no_afore = document.getElementById("no_afore");
      const no_afore_lg = document.getElementById("no_afore_lg");

      no_afore.classList.remove("hidden");
      no_afore_lg.classList.add("lg:flex");
   }

   if (selectElement.value === "yes_afore") {
      hideAforeSection();

      const yes_afore = document.getElementById("yes_afore");
      const yes_afore_lg = document.getElementById("yes_afore_lg");

      yes_afore.classList.remove("hidden");
      yes_afore_lg.classList.add("lg:flex");
   }

   if (selectElement.value === "dont_know_afore") {
      hideAforeSection();
      const dont_know_afore = document.getElementById("dont_know_afore");
      const dont_know_afore_lg = document.getElementById("dont_know_afore_lg");

      dont_know_afore.classList.remove("hidden");
      dont_know_afore_lg.classList.add("lg:flex");
   }

   if (selectElement.value === "want_advisor") {
      hideAforeSection();
      const want_advisor = document.getElementById("want_advisor");
      const want_advisor_lg = document.getElementById("want_advisor_lg");

      want_advisor.classList.remove("hidden");
      want_advisor_lg.classList.add("lg:flex");
   }
}
