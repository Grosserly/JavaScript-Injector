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
    
    dragElement(modalWindow);

})();


function injectCode() {
    eval(document.getElementById("javascript-injector-input-box").value);
}

function closeBox() {
    var modalWindow = document.getElementById("javascript-injector-modal");
    modalWindow.parentNode.removeChild(modalWindow);
}

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
