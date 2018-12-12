/**
 *  JavaScript Injector
 *  https://github.com/Grosserly/js-inject
 *
 *  javascript:var%20d=document;var%20s=d.createElement('script');s.src='https://grosserly.github.io/js-inject/inject.js';d.body.appendChild(s);void(0);
 */
(function() {

	var modal = document.createElement("div");
	document.body.appendChild(modal);
	modal.style = "position:absolute;top:40%;left:40%;padding:20px;border:0;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);background-color:#F1F1F1"; // Add style to modal

	// Construct modal
	modal.innerHTML = '<div>\
<div style=position:absolute;top:0;left:0;height:18%;width:100%></div>\
<button style="position:absolute;top:0;right:0;padding:2px 5px 2px">X</button>\
<a href="https://github.com/Grosserly/js-inject/" target=_blank style=position:absolute;font-size:20px>JavaScript Injector</a>\
<br>\
<textarea rows=6 cols=60 autocomplete=off autocorrect=off autocapitalize=off spellcheck=false style="margin:15px 0 15px;font-family:monospace;white-space:pre;overflow-wrap:normal;overflow:scroll;resize:both"></textarea>\
<br>\
<button>Inject</button>\
<div id=jsi-output style=font-family:monospace;margin-top:1em></div>\
</div>';

    
	// Delete modal from page when X button clicked
	modal.getElementsByTagName("button")[0].addEventListener("click", function() {
		modal.parentNode.removeChild(modal);
	}, true);

	// Run the JavaScript in the box when Inject button clicked
	modal.getElementsByTagName("button")[1].addEventListener("click", function() {
		
		try        { eval(modal.getElementsByTagName("textarea")[0].value); }
		catch(err) { alert(err.name + ":\n" + err.message); }
		
	}, true);


    // Window can be dragged by the header (the 2nd DIV)
    var m1,m2,m3,m4 = 0;
    modal.getElementsByTagName("div")[1].onmousedown = dragMouseDown;


    function dragMouseDown(e) {
        e = e || window.event;
        m3 = e.clientX;
        m4 = e.clientY;
        document.onmouseup   = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        m1 = m3 - e.clientX;
        m2 = m4 - e.clientY;
        m3 = e.clientX;
        m4 = e.clientY;
        modal.style.top	 = (modal.offsetTop  - m2) + "px";
        modal.style.left = (modal.offsetLeft - m1) + "px";
    }

    function closeDragElement() {
        document.onmouseup   = null;
        document.onmousemove = null;
    }

})();
