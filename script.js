/********************** HOME PAGE ******************************/








/********************* EDIT PAGE (ADD POSITION) ***********************/
function addPosToDropDown() {
  var x = document.getElementById("pos1");
  var option= document.createElement("option");
  /*var text = document.getElementById("posName").value;*/
  var text = getValue(posName);
  option.text = text;
  x.add(option);
}

function getValue(varname)
                {
                    var url = window.location.href;
                    var qparts = url.split("?");

                    if (qparts.length == 1)
                    {
                        return "";
                    }
                    else{
                        var query = qparts[1];
                        var vars = query.split("&");
                        var value = "";
                        for (i=0;i<vars.length;i++)
                        {
                            var parts = vars[i].split("=");
                            if (parts[0] == varname)
                            {
                                value = parts[1];
                                break;
                            }
                        }
                        value = unescape(value);

                        // Convert "+"s to " "s
                        value.replace(/\+/g," ");
                        return value;
                    }

                }