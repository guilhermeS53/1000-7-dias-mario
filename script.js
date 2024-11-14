const form = document.querySelector(".form-contact");
const mask = document.querySelector(".mask-form");

const buttonClick = () => {
  form.style.left = "50%";
  form.style.transform = "translateX(-50%)";
  mask.style.visibility = "visible";
};

const hiddenForm = () => {
  form.style.left = "-335px";
  form.style.transform = "translateX(0)";
  mask.style.visibility = "hidden";
};
