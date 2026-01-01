// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  // Toggle nav menu open/closed on button click
  navToggle.addEventListener('click', function() {
    const expanded = this.getAttribute('aria-expanded') === 'true';
    // Toggle the aria-expanded state
    this.setAttribute('aria-expanded', String(!expanded));
    // Toggle the menu visibility class
    navMenu.classList.toggle('open');
  });

  // Optional: hide the menu when a nav link is clicked (for one-page navigation UX)
  const navLinks = navMenu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      // If menu is currently expanded on mobile, close it after selection
      if (navToggle.getAttribute('aria-expanded') === 'true') {
        navToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('open');
      }
    });
  });

  // FAQ Accordion Toggle
  const faqButtons = document.querySelectorAll('.faq-question');
  faqButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      const answerId = this.getAttribute('aria-controls');
      const answerEl = document.getElementById(answerId);
      // Toggle aria-expanded on the question button
      this.setAttribute('aria-expanded', String(!isExpanded));
      // Show or hide the answer content
      if (isExpanded) {
        answerEl.setAttribute('hidden', '');  // collapse
      } else {
        answerEl.removeAttribute('hidden');   // expand
      }
    });
  });

  // Contact Form Validation
  const contactForm = document.querySelector('.contact-form');
  contactForm.addEventListener('submit', function(e) {
    // Prevent form submission for custom validation handling
    e.preventDefault();
    if (!contactForm.checkValidity()) {
      alert("Please fill in all required fields correctly.");
      return;
    }
    // If all fields are valid, simulate a successful submission
    alert("Thank you! Your message has been sent.");
    contactForm.reset();
  });
});
