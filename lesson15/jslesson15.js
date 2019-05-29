input.onclick = function(){
    text.classList.add("undisplay")
}

clickHide.onclick = function() {
    this.classList.add("undisplay")
}

liInput.onclick = function() {
    if(onOff.classList == null){
        onOff.className = "undisplay";
    }else if(onOff.classList == "undisplay"){
        onOff.className = "setvision";
    }else {
        onOff.className = "undisplay";
    }
}
