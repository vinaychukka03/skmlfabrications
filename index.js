const menubtn=document.querySelector('.links');
function open_menu(){
    menubtn.style.display='flex';
    
}
function closed(){
    if(window.matchMedia("(max-width:900px)").matches)
    menubtn.style.display='none';
}
const services = [
    {image:'images/metal-gates.png',sname:'Metal Gates',txt:'Custom fabrication and installation of durable metal gates.'},
    {image:'images/ssgates.png',sname:'Stainless Steel Gates',txt:'High-quality stainless steel gates for modern aesthetics and security.'},
    {image:'images/Railing.png',sname:'Railing & Grills',txt:'Stylish and secure railings and grills for balconies and windows.'},
    {image:'images/staircase.png',sname:'Staircase',txt:'Design and installation of custom metal staircases.'},
    {image:'images/sheds.png',sname:'Sheds',txt:'Durable and custom-built sheds for various purposes.'},
    {image:'images/Pergolas.png',sname:'Garden Pergolas',txt:'Beautiful garden pergolas to enhance your outdoor space.'},
    {image:'images/Fencing.png',sname:'Fencing',txt:'Secure and durable metal fencing solutions for various properties.'},
    {image:'images/EntranceGates.png',sname:'Entrance Gates',txt:'Custom Entrance gates for enhanced security and aesthetics.'},
    {image:'images/Metalgrills.png',sname:'Metal Grills',txt:'Durable and stylish metal Window grills.'},
    {image:'images/sports_box.png',sname:'Sports Box',txt:'Sport boxes like: Cricket, volleyball etc..'},
    {image:'images/shutters.png',sname:'Shutters',txt:'Shutter for shops, malls etc..'},
    {image:'images/metalFurniture.png',sname:'Metal/Steel Furniture',txt:'Metal Racks, Benches, Chairs, Advertisement Banner.'}
];
let htmlcode="";
services.forEach((service)=>{
    htmlcode+=`<div>
                <img src="${service.image}" alt="">
                <h4>${service.sname}</h4>
                <p>${service.txt}</p>
            </div> `;
});

document.querySelector('.our-Services').innerHTML=htmlcode;

const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "Form submitted successfully";
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});