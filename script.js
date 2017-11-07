/********************** HOME PAGE ******************************/

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/********************* EDIT PAGE (ADD POSITION) ***********************/
function addPosToDropDown() {
  var x = document.getElementById('pos1');
  var option= document.createElement('option');
  option.text = document.getElementById('posName').value;
  x.options.add(option);

}