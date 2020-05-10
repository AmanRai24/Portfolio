var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;
var idl;


for (var i = 0; i < (navMenuAnchorTags.length); i++) {
    navMenuAnchorTags[i].addEventListener('click', function (event) {
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        // console.log(this.textContent);
        var targetSection = document.getElementById(targetSectionID);
        // console.log(targetSection);
        //    interval = setInterval(scrollVertically, 20, targetSection);
        var curr=0;
        var targetSectionCoordinates=targetSection.getBoundingClientRect().y;
    //     interval = setInterval(function () {
    //         scrollVertically(targetSection);
    //     }, 20);
    // });



function scrollVertically(targetSection) {
    // var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if(curr>=targetSectionCoordinates){
        clearInterval(idl);
        return;
    }
    window.scrollBy(0,50);
    curr+=50;
}
    var idl=setInterval(scrollVertically,10);
});
     // if (targetSectionCoordinates.top <= 0) {
    //     clearInterval(interval);
    //     return;
    // }
    // window.scrollBy(0, 50);
}
