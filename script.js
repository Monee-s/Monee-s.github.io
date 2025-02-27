let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Social Media Specialist','Creative Designer', 'Digital Creator'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 80,
    loop: true,
  });

  /* Contact Section Code */

  emailjs.init("aiyaunas@gmail.com"); // Replace with your EmailJS user ID

  const form = document.getElementById('contact');
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  
    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
        console.log('FAILED...', error);
      });
  });