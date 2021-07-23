function utmgo() {
    //setting mandatory variables  
    var validationMsg = '';
    if (document.getElementById("website_url").value == ''){        
        validationMsg = 'Error: Destination URL is required';
    } else {
        var website = document.getElementById("website_url").value;
    }   
    if (document.getElementById("campaign_source").value == ''){        
        validationMsg += '\nError: Campaign Source is required';
    } else {
        var campaign_source = "utm_source=" + encodeURI(document.getElementById("campaign_source").value);
    }    
    if (document.getElementById("campaign_medium").value == ''){
        validationMsg += '\nError: Campaign Medium is required';
    } else {
        var campaign_medium = "&utm_medium=" + encodeURI(document.getElementById("campaign_medium").value);
    }   
    if (document.getElementById("campaign_name").value == ''){
        validationMsg += '\nError: Campaign Name is required';
    } else {
        var campaign_name = "&utm_campaign=" + encodeURI(document.getElementById("campaign_name").value);
    }       
    
    //setting optional variables
    if (document.getElementById("campaign_term").value == '') {
        var campaign_term = '';
    } else {
        var campaign_term = "&utm_term=" + encodeURI(document.getElementById("campaign_term").value);
    }
    if (document.getElementById("campaign_content").value == '') {
        var campaign_content = '';
    } else {
        var campaign_content = "&utm_content=" + encodeURI(document.getElementById("campaign_content").value);
    }
    
    //build the url
    if (validationMsg == ''){
        document.getElementById("utmstage").innerHTML = website + "\?" + campaign_source + campaign_medium + campaign_name + campaign_term + campaign_content;
    } else {
        document.getElementById("utmstage").innerHTML = validationMsg;
    }   
    
    //clearing variables
    var validationMsg = '';
    var website = '';
    var campaign_source = '';
    var campaign_name = '';
    var campaign_term = '';
    var campaign_content = '';
}

function utmno() {
    //clearing elements
    document.getElementById("website_url").value = '';
    document.getElementById("campaign_source").value = '';
    document.getElementById("campaign_medium").value = '';
    document.getElementById("campaign_name").value = '';
    document.getElementById("campaign_term").value = '';
    document.getElementById("campaign_content").value = '';
    document.getElementById('utmstage').innerHTML = '';
}