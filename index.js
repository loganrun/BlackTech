let navBod = document.getElementById('title')
navBod.innerHTML = '<h1>Great African Americans in Tech</h1>'
navBod.classList.add('flex-ctr')
navBod.style.color = 'white'

let mark = document.getElementById('intro1')
mark.innerHTML = '<h2>This person invented the Personal Computer</h2>'
mark.style.color = 'white'

let marion = document.getElementById('intro2')
marion.innerHTML = '<h2>This person invented Voice Over Internet Protocol</h2>'
marion.style.color = 'white'

let glayds = document.getElementById('intro3')
glayds.innerHTML = `<h2>This person's work is the foundation of GPS</h2>`
glayds.style.color = 'white'

let jesse = document.getElementById('intro4')
jesse.innerHTML = `<h2>This person holds the patent for the mobile data phone and the wireless base station</h2>`
jesse.style.color = 'white'

let hannon = document.getElementById('intro5')
hannon.innerHTML = `<h2>This person invented the 3-D graphics chip </h2>`
hannon.style.color = "white"





// const innovators = [{
//                         question: 'This person was one of the 7 founders of Silicon Graphics Incorporated (SGI)',
//                         info: 'Marc headed the team that created the Geometry Engine- the predecesor of modern day graphics cards. Marc and his team created the 3-D graphics chip for the Nintendo 64 and for movies such as Jurassic Park and Terminator 2'
//                         },
//                         {
//                         question: 'This person was one of the 7 founders of Silicon Graphics Incorporated (SGI)',
//                         info: 'Joshua is a computer graphics engineer at SGI. Joshua is the founder of the Silicon Graphics Incorporated (SGI) and the founder of the Silicon Graphics Group (SGG). Joshua is the founder of the Silicon Graphics Incorporated (SGI) and the founder of the Silicon Graphics Group (SGG). Joshua is the founder of the Silicon Graphics Incorporated'
//                         }
//                         ]


// const app = document.getElementById("app");

// // A builder function to make the
// // created DOM structures consistent.
// function createPost(title, content) {
//   // Creating a DocumentFragment
//   const frag = document.createDocumentFragment();

//   // Anything we do to the fragment here is not
//   // processed in the live view of the document.
//   // This allows for processing-heavy DOM changes
//   // to occur without interrupting user experience.
//   // These, however, are rather simple operations.
//   const heading = frag.appendChild(document.createElement("h3"));
//   heading.textContent = title;
//   heading.style.margin = "0px";

//   frag.appendChild(document.createElement("hr"));

//   const div = frag.appendChild(document.createElement("div"));
//   div.style.padding = "0px 15px";
//   div.style.marginBottom = "50px";

//   div.appendChild(document.createElement("p")).innerHTML = content;

//   return frag;
// }