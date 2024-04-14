const skillsSection = document.querySelector('.skills');
const observer = new IntersectionObserver((appearance) => {
    appearance.forEach((availability) => {
        if (availability.isIntersecting) {
            skillsSection.classList.add('seen');
        }
    });
}, { threshold: 0.5 }); 

observer.observe(skillsSection);


