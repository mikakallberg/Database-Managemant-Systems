document.addEventListener("DOMContentLoaded", function() {
    // sidenav initialization
    let sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav);
});


document.addEventListener('DOMContentLoaded', function() {
    let modal = document.querySelectorAll('.modal');
    var instances = M.Modal.init(modal);
    });