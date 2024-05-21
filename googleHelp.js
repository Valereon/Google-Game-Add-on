function onSuccess(){
    return;
}

function runGAScriptFunc(method){
    google.script.run.withSuccessHandler(onSuccess)[method]();
}