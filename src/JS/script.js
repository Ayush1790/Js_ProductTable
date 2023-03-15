let arr = new Array();
let data = ""
function fun() {
    let pid = document.getElementById("pid").value;
    let pname = document.getElementById("pname").value;
    let pprice = document.getElementById("pprice").value;
    // validation on product id
    if (pid == "" || !((pid >= 'a' && pid <= 'z') || (pid >= 'A' && pid <= 'Z') || (pid >= 0 && pid <= 1000000))) {
        document.getElementById("pid_msg").innerHTML = "Please Fill the Correct value of Product id";
        return;
    } else {
        document.getElementById("pid_msg").innerHTML = " ";
    }
    //validation on product name
    if (pname == "" || !((pname >= 'a' && pname <= 'z') || (pname >= 'A' && pname <= 'Z') || (pname >= 0 && pname <= 1000000))) {
        document.getElementById("pname_msg").innerHTML = "Please Fill the correct value of Product Name";
        return;
    } else {
        document.getElementById("pname_msg").innerHTML = " ";
    }
    //validation on product price
    if (pprice == "" || pprice <= 0) {
        document.getElementById("pprice_msg").innerHTML = "Please Fill the Correct value of Product Price";
        return;
    } else {
        document.getElementById("pprice_msg").innerHTML = " ";
    }
    // checking for unique id
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].id == pid) {
            document.getElementById("pid_msg").innerHTML = "This id is already exist.";
            return;
        }
    }
    // push the data in array
    arr.push({ id: pid, name: pname, price: pprice });
    data += "<tr><td>" + arr[arr.length - 1].id + "</td><td>" + arr[arr.length - 1].name + "</td><td> USD " + arr[arr.length - 1].price + "</td></tr>";
    // set the value in table
    document.getElementById("tbody").innerHTML = data;
}

