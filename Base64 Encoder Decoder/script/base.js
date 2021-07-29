//decode
function pkdecode() {
    var urimod = document.getElementById("uristage").value; //input
    var decodedData = window.atob(urimod); //decoding the string
    decodedData = decodeURIComponent(decodedData); //URI decoding for special characters
    document.getElementById("uristage").value = decodedData; //output
}

//encode
function pkencode() {
    var urimod = encodeURIComponent(document.getElementById("uristage").value); //input
    var encodedData = encodeURIComponent(urimod); //URI encoding for special characters
    encodedData = window.btoa(urimod); //encoding the string    
    document.getElementById("uristage").value = encodedData; //output
}

//clear
function clearitall() {
    document.getElementById("uristage").value = ""; //clearing the stage (textarea)
}
