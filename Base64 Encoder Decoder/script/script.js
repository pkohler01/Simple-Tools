//decode
function pkdecode() {
    var urimod = document.getElementById("uristage").value; //input
    var decodedData = window.atob(urimod).split('').map(function(c){ //decoding the string
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join('');
    
    decodedData = decodeURIComponent(decodedData); //URI decoding for special characters
    document.getElementById("uristage").value = decodedData; //output
}

//encode
function pkencode() {
    var urimod = document.getElementById("uristage").value; //input
    var modData = encodeURIComponent(urimod).replace(/%([0-9A-F]{2})/g, function(match, p1){
        return String.fromCharCode('0x' + p1);
    });
    document.getElementById("uristage").value = btoa(modData); //output
}

//clear
function clearitall() {
    document.getElementById("uristage").value = ""; //clearing the stage (textarea)
}
