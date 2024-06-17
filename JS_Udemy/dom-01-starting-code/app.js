const p = document.getElementById("welcome");
console.log(p)
const ul = document.querySelector('ul');
console.log(ul);

const section = document.querySelector('section')
// section.style.backgroundColor = 'blue';
section.className = 'red-bg';

const button = document.querySelector('button');
button.addEventListener('click', () => {
    // if (section.className === 'red-bg visible') {
    //     section.className = 'red-bg invisible';
    //     console.log('invisble');
    // } else {
    //     section.className = 'red-bg visible';
    //     console.log('visible');
    // }
    section.classList.toggle('visible');
    section.classList.toggle('invisible');
    section.classList.add('acsc');
});