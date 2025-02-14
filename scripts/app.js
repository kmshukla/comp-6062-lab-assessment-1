const studentFullName = 'Kangkan Mitra';
const studentNumber = 1184320;
const result = `${studentFullName} - ${studentNumber}`;
console.log(result);

const headerContent = document.querySelector("h1");
console.log(headerContent.result);

headerContent.innerHTML = `${result}`;
headerContent.classList.add("headingPrimary");
console.log(headerContent.classList);
