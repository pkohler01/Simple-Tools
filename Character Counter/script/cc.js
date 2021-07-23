//count!
function countIt(val){
    var counting = val.value;
    var qty = val.value.length;
    countNow = "<div class='countAway'>There are " + qty + " characters. " + "&nbsp; &nbsp;<button id='clicky' onclick='forgetit();'>Clear</button></div>";
    document.getElementById("countOut").innerHTML = countNow;
    localStorage.setItem("countIn", counting);
    localStorage.setItem("countout", countNow);
}

//forget!
function forgetit(val) {
    document.getElementById("countIn").value = "";
    document.getElementById("countOut").innerHTML = "";
}