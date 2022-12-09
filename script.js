const btnSkill = document.querySelector("#skill");
const btnExp = document.querySelector("#exp");
const btnEdu = document.querySelector("#edu");
const aboutSkill = document.querySelector(".about-description");
const experience = document.querySelector(".experience");
const education = document.querySelector(".education");
const slidebar = document.querySelector(".slidebar");
const openBar = document.querySelector("#menu");
const closeBar = document.querySelector("#close");
const autoType = document.querySelector(".auto-type");

btnSkill.addEventListener("click", () => {
  btnSkill.classList.add("active-link");
  btnExp.classList.remove("active-link");
  btnEdu.classList.remove("active-link");
  aboutSkill.style.display = "block";
  education.style.display = "none";
  experience.style.display = "none";
});

btnExp.addEventListener("click", () => {
  btnExp.classList.add("active-link");
  btnEdu.classList.remove("active-link");
  btnSkill.classList.remove("active-link");
  experience.style.display = "block";
  aboutSkill.style.display = "none";
  education.style.display = "none";
});

btnEdu.addEventListener("click", () => {
  btnEdu.classList.add("active-link");
  btnSkill.classList.remove("active-link");
  btnExp.classList.remove("active-link");
  education.style.display = "block";
  aboutSkill.style.display = "none";
  experience.style.display = "none";
});

openBar.addEventListener("click", () => {
  slidebar.style.right = "0";
});

closeBar.addEventListener("click", () => {
  slidebar.style.right = "-300rem";
});
