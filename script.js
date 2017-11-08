/********************** HOME PAGE ******************************/








/********************* EDIT PAGE (ADD POSITION) ***********************/
function addPosToDropDown() {
  var x = document.getElementById("pos1");
  var option= document.createElement("option");
  var text = document.getElementById("posName").value;
  option.text = text;
  x.add(option);
}