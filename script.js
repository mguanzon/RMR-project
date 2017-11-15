/* Creating a new position */
function createPos() {
  var positionNameInput = document.getElementById("positionName").value;
  var educationInput = document.getElementById("education").value;
  var licenseInput = document.getElementById("license").value;
  var minGPAInput = document.getElementById("minGPA").value;
  localStorage.setItem("positionName", positionNameInput);
  localStorage.setItem("education", educationInput);
  localStorage.setItem("license", licenseInput);
  localStorage.setItem("minGPA", minGPAInput);
  location.href = "http://mguanzon.github.io/RMR-project/home.html";
}

/*Coloring in like button upon like */
function liked() {
	var x = document.getElementById("thumb");
  var name = document.getElementById("profilename").innerHTML;
  console.log(x.src);
	if ( x.src != "https://mguanzon.github.io/RMR-project/blankthumb.jpg") {
		document.getElementById("thumb").src = "blankthumb.jpg";
    localStorage.removeItem("profileName");
    confirm("Candidate has been removed from your favorites.")
  }
	else  {
   document.getElementById("thumb").src = "filledthumb.jpg";
    localStorage.setItem("profileName",  name );  
    confirm("Candidate has been added to your favorites.")
	}
}


function save() {
  var compNameInput = document.getElementById("companyName").value;
  var descriptionInput = document.getElementById("description").value;
  console.log(compNameInput);
  console.log(descriptionInput);
  localStorage.setItem("companyName", compNameInput);
  localStorage.setItem("desription", descriptionInput);
  //location.href = "http://mguanzon.github.io/RMR-project/home.html"; 
}