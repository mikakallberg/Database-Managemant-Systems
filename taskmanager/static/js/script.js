document.addEventListener("DOMContentLoaded", function() {
    // Sidenav initialization
    let sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav);

    //Modal initialization
    let modal = document.querySelectorAll('.modal');
    M.Modal.init(modal);

    //Datapicker initialization
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
        format: 'dd mmm, yyyy',
        i18n: {done: "Select"}
    });

    //Select initialization
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);

    //Collapsible initialization
    let collapsible = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsible);
});