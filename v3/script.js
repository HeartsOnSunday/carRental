var carRental = {
    name: "Used Car Rental Scam",
    ecars: "Economy",
    midCars: "Midsize",
    eAvailability: 200,
    mAvailability: 90,
    ePrice: "$80.00",
    mPrice: "$100.00",
    cars: [
            {
                type: "Please make a selection",
                Availability: 200,
                Price: "$80.00",
                
            },
            {
                type: "Economy",
                Availability: 200,
                Price: "$80.00",
                
            },
            {
                type: "Midsize",
                Availability: 90,
                Price: "$100.00",
            }
        ]
};  

// CREATING THE DROPDOWN:::
// The <select> must be created outside the function (universal variable selectOption)
var selectOption = document.createElement("SELECT");
 // create Atributes
   selectOption.setAttribute("size", "1");
   selectOption.setAttribute("name", "Windows");
   selectOption.setAttribute("id", "selection" + i);
   selectOption.setAttribute("onchange",  "showStats()");
// this action to appendChild only needs to happen once!!!
document.getElementById("important").appendChild(selectOption);


// NEXT:::
//the Dropdown has been created but it needs dynamic options in it!!


//  NODE:::::
//  nodeName is SELECT        console.log(document.getElementById("selection").nodeName);
//   nodeName is OPTION       console.log(document.getElementById("invalid").nodeName);
//   nodeName is OPTION        console.log(document.getElementById("midsize").nodeName);


for (var i = 0; i < carRental.cars.length; i++) {
    //use the selectOption
   // var selectOption = document.createElement("SELECT");
   //create options for the selectOption
   var options = document.createElement("OPTION");
   //create attributes
   //use .text instead of .innerHTML
   options.text = carRental.cars[i].type;
//   document.getElementById("important").appendChild(selectOption);
//   document.getElementById("important").appendChild(options);
    selectOption.add(options);
}


function checkA() {
                    document.getElementById("name").innerHTML = carRental.name;
                    document.getElementById("eCars").innerHTML = carRental.ecars;
                    document.getElementById("midCars").innerHTML = carRental.midCars;
                    document.getElementById("eAvail").innerHTML = carRental.eAvailability;
                    document.getElementById("mAvail").innerHTML = carRental.mAvailability;
    }   
function rentEco() {
                    document.getElementById("eAvail").innerHTML = --carRental.eAvailability;
    }
function rentMid() {
                    document.getElementById("mAvail").innerHTML = --carRental.mAvailability;
    }
function showStats() {
                        var stats = document.forms["carForm"]["Windows"].value;
    if (stats == "midsize") {
                        document.getElementById("mPrice").innerHTML = carRental.mPrice;
                        document.getElementById("midCars").innerHTML = carRental.midCars;
                        document.getElementById("mAvail").innerHTML = carRental.mAvailability
    }
    if (stats == "economy") {
                        document.getElementById("ePrice").innerHTML =carRental.ePrice;
                        document.getElementById("eCars").innerHTML = carRental.ecars;
                        document.getElementById("eAvail").innerHTML = carRental.eAvailability;
    }
}
function validateForm() {
        var x = document.forms["carForm"]["Windows"].value;
    
    //var carArray = []
        var carObject = {
                    renter: document.getElementById("newCustomer").value,
                    selection: document.getElementById("selection").value,
    }
    
        if (x === "") {
                        alert("You must make a selection");
                        console.log("No Selection");
    }
        if (x == "midsize") {
                    document.getElementById("mAvail").innerHTML = --carRental.mAvailability;
        //document.getElementById("mPrice").innerHTML = carRental.mPrice;
        //document.getElementById("midCars").innerHTML = carRental.midCars;
        // Push new info to object 
        //carArray.push(document.getElementById("newCustomer").value);
        //carArray.push(document.getElementById("midsize").value);
        //console.log(carArray);
                        console.log(carObject);
                        alert("You have selected a midsize car");
        
    }
            else if (x == "economy") {
                        document.getElementById("eAvail").innerHTML = --carRental.eAvailability;
        //document.getElementById("ePrice").innerHTML =carRental.ePrice;
        //document.getElementById("eCars").innerHTML = carRental.ecars;
        //push new info to object
        //carArray.push(document.getElementById("newCustomer").value);
        //carArray.push(document.getElementById("economy").value);
        //console.log(carArray);
                        console.log(carObject);
                        alert("You have selected the Economy Car");
    }
}