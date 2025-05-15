    let index = sections.length;
    while (--index && window.scrollY + 52 < sections[index].offsetTop) {}
    navLinks.forEach(link => link.classList.remove('active'));
    if (navLinks[index]) {
      navLinks[index].classList.add('active');
    }
  window.addEventListener('scroll', activateNavLinkOnScroll);
  activateNavLinkOnScroll();
  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.name.value.trim();
    const email = event.target.email.value.trim();
    const message = event.target.message.value.trim();
    if (name && email && message) {
      alert(`Thank you for your message, ${name}! I will get back to you shortly.`);
      event.target.reset();
    }
}