

/********************* EDIT PAGE (ADD POSITION) ***********************/
function addPosToDropDown() {
  var x = document.getElementById("pos1");
  var option= document.createElement("option");
  var text = document.getElementById("posName").value;
  /*var text = getValue(posName);*/
  option.text = text;
  x.add(option);
}

/* function processForm()
  {
    var parameters = location.search.substring(1).split("&");
    var temp = parameters[0].split("=");
    l = unescape(temp[1]);
    alert(l); //Dialog with the text you put on the textbox
  }
  processForm();*/




$("#search").click(function() {
	$("#pos1").addPosToDropDown();

});