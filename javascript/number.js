function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)&&(charCode!=46)) {
        return false;
    }
    return true;
}


$('#date').val(new Date().toJSON().slice(0,10));