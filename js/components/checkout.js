document.addEventListener('DOMContentLoaded', function() { // wait for the DOM to be ready
    const navBtn = document.getElementById('nav-btn'); // get the button
    const navbar = document.querySelector('.navbar'); // get the navbar
    
    navBtn.addEventListener('click', function() { // Add event listener to the button
        this.classList.toggle('active'); // toggle the active class on the button
        navbar.classList.toggle('active'); // toggle the class
        
        // Add a transition effect
        if (navbar.classList.contains('active')) { // if it is active
            document.body.style.overflow = 'hidden'; // hide the body's overflow
        } else { // if it is not active
            document.body.style.overflow = ''; // show the body's overflow
        }
    });
    
    // Add event listener 
    const menuLinks = document.querySelectorAll('.menu-items a'); // get all the links
    menuLinks.forEach(link => { // loop through each link
        link.addEventListener('click', () => { // add event listener to each link 
            navBtn.classList.remove('active'); // remove the active class from the button
            navbar.classList.remove('active'); // remove the active class from the navbar
            document.body.style.overflow = ''; // show the body's overflow
        }); // close event listener
    });
    
    // Add event listener 
    document.addEventListener('click', function(e) { // add event listener to the document
        if (!navbar.contains(e.target) && e.target !== navBtn) { // if the click is not on the navbar or the button
            navBtn.classList.remove('active'); // remove the active class from the button
            navbar.classList.remove('active'); // remove the active class from the navbar
            document.body.style.overflow = ''; // show the body's overflow
        } // close if statement
    });
});

document.addEventListener("DOMContentLoaded", function () { // wait for the DOM to be ready
    // Pay button
    const payButton = document.querySelector(".pay");

    // Add Click Event
    payButton.addEventListener("click", function () { // add event listener to the button
        Swal.fire({ // use sweet alert 
            title: "Payment Complete!", // title of the alert
            text: "Thank you for your purchase! See you later and we want you again!", // text of the alert
            icon: "success" // icon of the alert
          });
    });
});