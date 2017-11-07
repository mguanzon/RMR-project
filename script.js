/********************** HOME PAGE ******************************/








/********************* EDIT PAGE (ADD POSITION) ***********************/
function addPosToDropDown() {
  var x = document.getElementById('pos1');
  var option= document.createElement('option');
  option.text = document.getElementById('posName').value;
  x.options.add(option);
}