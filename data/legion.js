$(document).ready(function(){
    var host = window.location.hostname;
    var start = host.indexOf("www.");
    if(start > -1) {
        var end = host.indexOf(".", start + 4);
        host = host.substring(start + 4, end);
    } else {
        var end = host.indexOf(".");
        host = host.substring(0, end);
    }
         
    //alert(host);
    $("input[type='password']").each(function(){
        var pass = hex_md5($(this).val() + host);
        $(this).val(pass);
        //alert(pass);
    });
});
