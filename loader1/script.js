 // Assign sequential delay for both title and subtitle letters
 const titleParts = document.querySelectorAll("#title .text-part");
 const subtitleParts = document.querySelectorAll("#subtitle .text-part");

 titleParts.forEach((part, index) => {
     part.style.setProperty('--i', index); // Assign delay for title animation
 });

 subtitleParts.forEach((part, index) => {
     part.style.setProperty('--i', index); // Assign delay for glitch animation
 });