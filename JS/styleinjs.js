const sections = document.querySelectorAll('section');
for (const section of sections){
    section.style.border = "2px solid red";
    section.style.marginBottom = '15px';
    section.style.borderRadius = '10px';
    section.style.padding = '20px';
}

const langContainer = document.getElementById('lang-section');
        langContainer.style.backgroundColor = "yellow";

    langContainer.classList.add ('green-bg');
const classBg = document.getElementsByClassName('green-bg');
    langContainer.classList.remove('lrg-text');
