// Smooth Scrolling 

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-button-nav');
    const navbarLinks = document.querySelector('.navbar-links-home');
    const navbarLinksItems = document.querySelectorAll('.a-links');

    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
    });

    navbarLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            // Smooth scrolling to the target section
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - document.querySelector('.navbar-home').offsetHeight,
                    behavior: 'smooth'
                });
            }


            // Close the navbar on small screens
            if (window.innerWidth <= 740) {
                navbarLinks.classList.remove('active');
            }

        });
    });
 

});

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-button-nav');
    const navbarLinks = document.querySelector('.navbar-links-home');
    const navbarLinksItems = document.querySelectorAll('.a-links');

    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
    });

    navbarLinksItems.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - document.querySelector('.navbar-home').offsetHeight,
                    behavior: 'smooth'
                });
            }

            if (window.innerWidth <= 740) {
                navbarLinks.classList.remove('active');
            }
        });
    });
});



// Navbar

const toggleButton = document.getElementsByClassName('toggle-button-nav')[0]
const navbarLinks = document.getElementsByClassName('navbar-links-home')[0]
const navbarLinksItems = document.querySelectorAll('.a-links');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

// Close the navbar when a link is clicked
navbarLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        navbarLinks.classList.remove('active');
    });
});

// Typing Animation

let typed = new Typed(".auto-type",{
    strings : ["Freelancer" ,"Frontend Developer", "Web Developer"],
    typeSpeed : 200, 
    backSpeed : 200,
    loop : true,
});

// So when I scroll the animation will start
document.addEventListener('DOMContentLoaded', () => {
    const learnMore = document.querySelector('.learn-more-heading');
    const mySkills = document.querySelector('.skills-heading');
    const myProjects = document.querySelector('.projects-heading')
    const contactHeading = document.querySelector('.contact-heading')

    const observerOptions = {
        root: null, // Use the viewport as the container to observe
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 50% of the element is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__backInLeft', 'visible');
                observer.unobserve(entry.target); // Stop observing once it is visible
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (learnMore) {
        observer.observe(learnMore);
    }

    if (mySkills) {
        observer.observe(mySkills);
    }

    if (myProjects) {
        observer.observe(myProjects)
    }

    if (contactHeading) {
        observer.observe(contactHeading)
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const jobSpan = document.querySelector('.job-about-span');

    const observerOptions = {
        root: null, // Use the viewport as the container to observe
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 50% of the element is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInDown', 'visible');
                observer.unobserve(entry.target); // Stop observing once it is visible
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (jobSpan) {
        observer.observe(jobSpan);
    }

});