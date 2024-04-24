document.addEventListener('DOMContentLoaded', function() {
    // Get the element to add the class to
    const element = document.getElementsByClassName('navbar')[0];

    // Function to add class when scrolling
    function addClassOnScroll() {
        if (window.scrollY > 100) {
            element.classList.add('scrolled');
        } else {
            element.classList.remove('scrolled');
        }
    }

    // Add scroll event listener
    window.addEventListener('scroll', addClassOnScroll);
});