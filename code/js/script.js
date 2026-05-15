// CONTACT FORM DEMO

const form = document.querySelector('.contact-form');

if(form){
  form.addEventListener('submit', function(e){
    e.preventDefault();

    alert('Message sent successfully!');

    form.reset();
  });
}

// SIMPLE PAGE ANIMATION

window.addEventListener('scroll', () => {
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const position = card.getBoundingClientRect().top;

    if(position < window.innerHeight - 100){
      card.style.opacity = '1';
      card.style.transform = 'translateY(0px)';
    }
  });
});
