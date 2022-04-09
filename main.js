// ====================== [NavBar] ======================
// open nav bar
let barsIcon = document.getElementById("bars-icon");
barsIcon.onclick = function() {
    document.getElementById("menu-phone").style.opacity = "1";
    document.getElementById("menu-phone").style.pointerEvents = "auto";
}

// close nav bar
let closeNavPhone = document.getElementById("close-nav-phone");
closeNavPhone.onclick = function() {
    document.getElementById("menu-phone").style.opacity = "0";
    document.getElementById("menu-phone").style.pointerEvents = "none";
}

// showing shadow

setInterval(function() {
    if (window.scrollY >= 100) {
        document.querySelector("nav").style.boxShadow = "0px 0px 10px 0px rgba(0, 0, 0, 0.3)"
    } else {
        document.querySelector("nav").style.boxShadow = "0px 0px 0px 0px rgba(0, 0, 0, 0)"
    }
}, 200)





// ====================== [Search Page] ======================
let search = document.getElementById("search");
let searchPage = document.getElementById("search-page");
let closeSearch = document.getElementById("close-search");
// open search page
search.onclick = function() {
    searchPage.style.width = "100vw";
    searchPage.style.height = "100vh";
    setTimeout(function() {
        searchPage.style.borderRadius = "0px";
    }, 200)
    setTimeout(function() {
        document.querySelector("#search-page .container").style.opacity = "1";
        document.querySelector("#search-page .container").style.pointerEvents = "auto";
    }, 300)

}
closeSearch.onclick = function() {
    document.querySelector("#search-page .container").style.opacity = "0";
    document.querySelector("#search-page .container").style.pointerEvents = "none";
    searchPage.style.width = "0vw";
    searchPage.style.height = "0vh";
    setTimeout(function() {
        searchPage.style.borderBottomLeftRadius = "600px";
    }, 200)
}





// ====================== [Home Page] ======================

let imgsOfDocs = ["./doc1.png", "./doc2.png", "./doc3.png", "./doc4.png"];
let namesOfDocs = ["Dr. Ahmed Mahmoud", "Dr. Sameh Abd Elsalam", "Dr. Sara Hossam", "Dr. Mohamed Salah"];
let phonesOfDocs = ["+02121165779", "+02362865717", "+02728361241", "+02192831740"];

let sliderPoints = Array.from(document.querySelectorAll(".slider span"));

let homeCounter = 0;
setInterval(function() {
    // reset counter
    if (homeCounter == 4) {
        homeCounter = 0;
    }
    //change image
    document.querySelector("#home .doc .right").src = imgsOfDocs[homeCounter];
    //change name
    document.querySelector("#home .doc .left h1").innerHTML = namesOfDocs[homeCounter];
    //change phone
    document.querySelector("#home .doc .left .phone span").innerHTML = phonesOfDocs[homeCounter];
    // change slider point
    sliderPoints.forEach(function(ele) {
        ele.style.opacity = "0.5";
    })
    sliderPoints[homeCounter].style.opacity = "1";
    // increase the counter
    homeCounter++;
}, 3000)


// scroller arrow

window.onscroll=()=>{
    if (this.scrollY>200){
        document.getElementById("arrow").style.right="20px"
    }
    else{
        document.getElementById("arrow").style.right="-70px"
    }
}