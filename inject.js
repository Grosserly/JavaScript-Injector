/**
 *  JavaScript Injector
 *  javascript:var%20d=document;var%20i=d.createElement('script');i.src='https://grosserly.github.io/js-inject/inject.js';d.body.appendChild(i);void(0);
 */
(function() {

    var modalWindow = document.createElement("dialog");
    modalWindow.setAttribute("open", "true");
    modalWindow.setAttribute("style", "position:absolute;padding:20px;border:0;box-shadow:0 0 50px;");


        var container = document.createElement("div");
        
            var closeButton = document.createElement("button");
            closeButton.appendChild(document.createTextNode("X"));
            closeButton.setAttribute("style", "position:absolute;top:0;right:0;padding:2px 5px 2px");
            

            var header = document.createElement("a");
            header.appendChild(document.createTextNode("JavaScript Injector"));
            header.setAttribute("style","font-size:16px");
            header.setAttribute("href","https://github.com/Grosserly/js-inject/");


            var inputBox = document.createElement("textarea");
            inputBox.setAttribute("rows", "4");
            inputBox.setAttribute("cols", "50");
            inputBox.setAttribute("style", "margin:15px 0 15px");
            
            
            var submitButton = document.createElement("button");
            submitButton.appendChild(document.createTextNode("Inject"));
            submitButton.setAttribute("style", "float:left");
            
            
    // Append ALL the things!
    container.appendChild(closeButton);
    container.appendChild(header);
    container.appendChild(inputBox);
    container.appendChild(submitButton);
    modalWindow.appendChild(container);
    document.body.appendChild(modalWindow);
    
    // Delete injector box from page when X button clicked
    closeButton.addEventListener('click', function () {
        modalWindow.parentNode.removeChild(modalWindow);
    }, true);
    
    // Run the JavaScript in the box when Inject button clicked
    submitButton.addEventListener('click', function () {
        eval(inputBox.value);
    }, true);

})();
