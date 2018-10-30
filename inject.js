(function() {

    var modalWindow = document.createElement("dialog");
    modalWindow.setAttribute("open", "true");
    modalWindow.setAttribute("style", "position:absolute;padding:20px;border:0;box-shadow:0 0 50px;");
    modalWindow.setAttribute("id", "javascript-injector-modal");


        var container = document.createElement("div");
        
            var closeButton = document.createElement("button");
            closeButton.appendChild(document.createTextNode("X"));
            closeButton.setAttribute("onclick","closeBox()");
            closeButton.setAttribute("style", "padding:2px 5px 2px;float:right");
            

            var header = document.createElement("div");
            header.appendChild(document.createTextNode("JavaScript Injector"));


            var inputBox = document.createElement("textarea");
            inputBox.setAttribute("rows", "4");
            inputBox.setAttribute("cols", "50");
            inputBox.setAttribute("style", "margin:15px 0 15px;");
            inputBox.setAttribute("id", "javascript-injector-input-box");
            
            
            var submitButton = document.createElement("button");
            submitButton.appendChild(document.createTextNode("Inject"));
            submitButton.setAttribute("onclick","injectCode()");
            submitButton.setAttribute("style", "float:left");
            
            
            
    container.appendChild(closeButton);
    container.appendChild(header);
    container.appendChild(inputBox);
    container.appendChild(submitButton);
    modalWindow.appendChild(container);
    document.body.appendChild(modalWindow);

})();


function injectCode() {
    eval(document.getElementById("javascript-injector-input-box").value);
}

function closeBox() {
    var modalWindow = document.getElementById("javascript-injector-modal");
    modalWindow.parentNode.removeChild(modalWindow);
}
