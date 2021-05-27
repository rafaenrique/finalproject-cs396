/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction(elem, dropdownID) {
    hide();
    console.log(elem);
    document.getElementById(dropdownID).classList.add("show");
    //var rect = elem.getBoundingClientRect();
    //console.log(rect.top, rect.right, rect.bottom, rect.left);
    //var x = rect.left;
    //document.getElementById("myDropdown").style.left = x + "px";
  }

  
  
  // Close the dropdown if the user clicks outside of it
  const hide = function(e) {
    if (!e || !(e.target.matches('.dropbtn') || e.target.matches('.fa-caret-down'))) {
    var myDropdown = document.getElementById("dd1");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }

    myDropdown = document.getElementById("dd2");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }

    myDropdown = document.getElementById("dd3");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    

    myDropdown = document.getElementById("dd4");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
}
  window.onclick = hide; 
