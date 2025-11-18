
//page: from html click example: /page:/01/demos/index.html
function loadPage(page) {
    //--get refrence for thr the html element by its id
    //contentFrame is iframe element type 
    let iframeElement = document.getElementById("contentFrame");
    //give the iframe the html address
    iframeElement.src = page;

    // Close sidebar on mobile
    document.getElementById("sidebar").classList.remove("show");
}

function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("show");
}