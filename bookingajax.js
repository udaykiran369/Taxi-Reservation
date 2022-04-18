
    var xhr = false;  
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    }
    else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
var success = false;
function checkform(datasource, divId, namey, phoney, unity, numbery, streety, suburby, desty, day, monthy, yeary, houry, minutey) {   
    
//fetching values from all input fields and storing them in variables
    
    var name = document.getElementById('name').value;
    var phone = document.getElementById("phone").value;
    var unit = document.getElementById("unit").value;
    var number = document.getElementById("number").value;
    var street = document.getElementById("street").value;
    var suburb = document.getElementById("suburb").value;
    var dest = document.getElementById("dest").value;
    var currentTime = new Date().getTime(); 
    //var date = document.getElementById("date").value;
    //var time = document.getElementById("time").value;  
	
    var alphaMatch = /^[a-zA-Z0-9]+$/;
    var numMatch = /^[0-9]+$/;
    var alphaSpaceMatch = /^[a-z\d\-_\s]+$/i;
    var dateMatch = /(0[1-9]|[12][0-9]|3[01])[\-](0[1-9]|1[012])[\-]201[4-9]|20[2-9][0-9]/;
    var nameTest = alphaSpaceMatch.test(name);
    var phoneTest = numMatch.test(phone);
    var unitTest;
    var numberTest = alphaMatch.test(number);
    var streetTest = alphaSpaceMatch.test(street);
    var suburbTest = alphaSpaceMatch.test(suburb);
    var destTest = alphaSpaceMatch.test(dest);
    //var dateTest = dateMatch.test(date)

    //var re = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
//Check input Fields Should not be blanks.
    if(nameTest == false) {
       document.getElementById("namefield").innerHTML = "Please enter valid name!";

        success = false;
    }else if (nameTest == true) {
        
        document.getElementById("namefield").innerHTML = "VALID";
        success = true;
        
    }
    
    
    
    if(phoneTest == false) {
       document.getElementById("phonefield").innerHTML = "Please enter valid phone!";
       success = false;

    }else if (phoneTest == true) {
        
        document.getElementById("phonefield").innerHTML = "VALID";
        success = true;
        
    }
    
     if(numberTest == false) {
       document.getElementById("numberfield").innerHTML = "Please enter valid street number!";
       success = false;
    }else if (numberTest == true) {
        
        document.getElementById("numberfield").innerHTML = "VALID";
        success = true;
        
    }
    
    if(streetTest == false) {
       document.getElementById("streetfield").innerHTML = "Please enter valid street !";
       success = false;
    }else if (streetTest == true) {
        
        document.getElementById("streetfield").innerHTML = "VALID";
        success = true;
        
    }
    
    if(suburbTest == false) {
       document.getElementById("suburbfield").innerHTML = "Please enter valid suburb !";
       success = false;
    }else if (suburbTest == true) {
        
        document.getElementById("suburbfield").innerHTML = "VALID";
        success = true;
        
    }
 
    if(destTest == false) {
       document.getElementById("destfield").innerHTML = "Please enter valid destination address !";
       success = false;
        
    }else if (destTest == true) {
        
        document.getElementById("destfield").innerHTML = "VALID";
        success = true;
        
    }
    
    
    
    

        
        
        
        
    
        
        

     
    
    if (success == true) {
        
        
        if(getInputTime() <= currentTime){
		
		document.getElementById("timefield").innerHTML = "Pick-up time invalid!";
            success = false;
            return false;
	} else if (getInputTime() >= currentTime) {
        
        document.getElementById("timefield").innerHTML = "VALID";
        success = true;
        
        
    }
        
    
	    var place = document.getElementById(divId);
	    var url = "data.php?namefield="+namey+"&phonefield="+phoney+"&unitfield="+unity+"&numberfield="+numbery+"&streetfield="+streety+"&suburbfield="+suburby+"&destfield="+desty+"&dayfield="+day+"&monthfield="+monthy+"&yearfield="+yeary+"&hourfield="+houry+"&minutefield="+minutey;
	    xhr.open("GET", url, true);
	    xhr.setRequestHeader("Content-Type", "application/x-www-form- urlencoded");
	    xhr.onreadystatechange = function() {
		    
			if (xhr.readyState == 4 && xhr.status == 200) {
			place.innerHTML = xhr.responseText;
		    } // end if
	    } // end anonymous call-back function
	    xhr.send(url);


            
    
}
    
    

    
    
}

function getInputTime(){
	var hour = document.getElementById("hour").value;
	var minute = document.getElementById("minute").value;
	var year = document.getElementById("year").value;
	var month = document.getElementById("month").value;
	var day = document.getElementById("day").value;
	
	var inputTime = new Date();
	inputTime.setFullYear(year, (month-1), day);
	inputTime.setHours(hour, minute,0);
	return inputTime;
}





//AJAX Code to check  input field values when onblur event triggerd. 

