//decode
function pkdecode() {
    var urimod = decodeURIComponent(document.getElementById("uristage").value);
    document.getElementById("uristage").value = urimod;
}

//encode
function pkencode() {
    var urimod = encodeURIComponent(document.getElementById("uristage").value);
    document.getElementById("uristage").value = urimod;
}

//clear
function clearitall() {
    document.getElementById("uristage").value = "";
}