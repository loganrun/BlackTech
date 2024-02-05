let navBod = document.getElementById('title')
navBod.innerHTML = '<h1>Great African Americans in Tech</h1>'
navBod.classList.add('flex-ctr')
navBod.style.color = 'white'

let navLinks = [
    { text: 'About', href: '#' },  
    {text: 'Other List',href: '#'},
    {text: 'Join Us',href: '#'},
  ];

  for(let i of navLinks){
    let link = document.createElement('a')
    link.innerText = i.text;
    link.href = i.href;
    link.addEventListener('click', handleClick);
    link.style.textDecoration = 'none';
    link.style.color = 'white';
    link.style.paddingRight = '10px';
    link.style.margin = '10px';
    link.style.marginLeft= '50px';
    link.style.alignSelf= 'right';
    navBod.appendChild(link);
}

function handleClick(e){

    
    let clickedLink = e.target
    clickedLink.classList.add("active")
    clickedLink.style.color = 'black';
    e.preventDefault();
    }





let mark = document.getElementById('intro1')
mark.innerHTML = '<h2>This person invented the Personal Computer</h2>'
mark.style.color = 'black'
let bMark = document.getElementById("mark1")
let markDiv = document.getElementById('Mark');
let overlayMark = markDiv.querySelector('.overlay');
let but1 = document.getElementById('but1');

bMark.addEventListener("click", (e) => {
    overlayMark.remove();
    but1.remove();
    let title = document.createElement('h1');
    title.textContent = 'Dr. MARK DEAN';
    let info = document.getElementById('mark1');
    info = document.createElement('div');
    info.innerHTML = `<p>Mark Dean is credited with helping develop multiple major technologies,</br> among them the Industry Standard Architecture system bus, </br> the color PC monitor and the first gigahertz chip.</p>`;
    title.style.color = 'black';
    title.classList.add('flex-ctr');
    info.style.color = 'black';
    info.classList.add('flex-ctr');
    bMark.appendChild(title);
    bMark.appendChild(info);
    e.preventDefault()
})

let marion = document.getElementById('intro2')
marion.innerHTML = '<h2>This person invented Voice Over Internet Protocol</h2>'
marion.style.color = 'black'
let cMarion = document.getElementById("marion1");
let marionDiv = document.getElementById('Marion');
let overlayMarion = marionDiv.querySelector('.overlay');
let but2 = document.getElementById('but2');

cMarion.addEventListener("click", (e) => {
    overlayMarion.remove();
    but2.remove();
    let title = document.createElement('h1');
    title.textContent = 'Dr. MARION CROAK';
    let info = document.getElementById('marion1');
    info = document.createElement('div');
    info.innerHTML = `<p>Dr. Marion Croak invented Voice Over Iternet Protocal. Dr. Croak has over<br> 200 patents, half of which are in the VOIP technolgy. Croak was inducted<br> into the Mational Inventors Hall Of Fame, the National Academy of Engineers<br> and the American Academy of Arts and Sciences in 2022. She is the first <br>of two black women to be inducted to the NIHF, joining the ranks of 48<br> other female inductees and 30 other Black inductees  </p>`;
    title.style.color = 'black';
    title.classList.add('flex-ctr');
    info.style.color = 'black';
    info.classList.add('flex-ctr');
    cMarion.appendChild(title);
    cMarion.appendChild(info);
    e.preventDefault()
})

let glayds = document.getElementById('intro3')
glayds.innerHTML = `<h2>This person's work is the foundation of GPS</h2>`
glayds.style.color = 'black'
let wGlayds = document.getElementById("glayds1");
let glaydsDiv = document.getElementById('Gladys');
let overlayGladys = glaydsDiv.querySelector('.overlay');
let but3 = document.getElementById('but3');
wGlayds.addEventListener("click", (e) => {
    overlayGladys.remove();
    but3.remove();
    let title = document.createElement('h1');
    title.textContent = 'Dr. Glayds West';
    let info = document.getElementById('glayds1');
    info = document.createElement('div');
    info.innerHTML = `<p>Gladys Mae West is an American mathematician known for her <br>contributions to the mathematical modeling of the shape of the Earth,</br> and her work on the development of the satellite geodesy models that</br> were eventually incorporated into the Global Positioning System (GPS).</br> West was inducted into the United States Air Force Hall of Fame in 2018. </p>`;
    title.style.color = 'black';
    title.classList.add('flex-ctr');
    info.style.color = 'black';
    info.classList.add('flex-ctr');
    wGlayds.appendChild(title);
    wGlayds.appendChild(info);
    e.preventDefault()
})

let jesse = document.getElementById('intro4')
jesse.innerHTML = `<h2>This person holds the patent for the mobile data</br>
phone and the wireless base station</h2>`
jesse.style.color = 'black'

let rJesse = document.getElementById("jesse1");
let jesseDiv = document.getElementById('Jesse');
let overlayJesse = jesseDiv.querySelector('.overlay');
let but4 = document.getElementById('but4');

rJesse.addEventListener("click", (e) => {
    overlayJesse.remove();
    but4.remove();
    let title = document.createElement('h1');
    title.textContent = 'Jesse Russel';
    let info = document.getElementById('jesse1');
    info = document.createElement('div');
    info.innerHTML = `<p>Russell is known for his invention of the digital cellular base station and the </br> fibre optic microcell utilizing high power linear amplifier technology</br> and digital modulation techniques, which enabled new digital services for</br> cellular mobile users. </p>`;
    title.style.color = 'black';
    title.classList.add('flex-ctr');
    info.style.color = 'black';
    info.classList.add('flex-ctr');
    rJesse.appendChild(title);
    rJesse.appendChild(info);
    e.preventDefault()
})
let hannon = document.getElementById('intro5')
hannon.innerHTML = `<h2>This person invented the 3-D graphics chip </h2>`
hannon.style.color = "black"

let hmarc = document.getElementById("hannon1");
let marcDiv = document.getElementById('hannon');
let overlayMarc = marcDiv.querySelector('.overlay');
let but5 = document.getElementById('but5');

hmarc.addEventListener("click", (e) => {
    overlayMarc.remove();
    but5.remove();
    let title = document.createElement('h1');
    title.textContent = 'Dr. Marc Hannon';
    let info = document.getElementById('hannon1');
    info = document.createElement('div');
    info.innerHTML = `<p>In 1982, Hannah co-founded Silicon Graphics, Inc. (SGI) with Jim Clark </br>and five others. Dr. Hannon headed the team that created the Geometry </br>Engine, a precursor to the modern day graphics card. Marc and his team</br> made the first 3-D graphic chip to be used in a video game console - </br>the Nintendo 64. Software written by Dr. Hannon was also used to produce</br> the graphics in movies such as jurassic Park and Terminator2.</p>`;
    title.style.color = 'black';
    title.classList.add('flex-ctr');
    info.style.color = 'black';
    info.classList.add('flex-ctr');
    hmarc.appendChild(title);
    hmarc.appendChild(info);
    e.preventDefault()
})

const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {

    const name = document.getElementById('name').value;
    console.log(name);
    const email = document.getElementById('email').value;
    console.log(email);
    const suggestion = document.getElementById('suggestion').value;

    if (name.trim() === "") {
        alert("Name cannot be blank.");
        return
    }


    //check email
    if (email.trim() === "") {
        alert("Email address cannot be blank.");
        return
    } else {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return
        }
    }
    //check suggestion
    if (suggestion.trim() === "") {
        alert("Suggestion cannot be blank.");
        return
    }

    e.preventDefault();

    window.confirm(`Hi ${name}. Thanks for suggesting ${suggestion}`)

})

