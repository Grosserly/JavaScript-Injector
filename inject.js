/**
 *  JavaScript Injector
 *  javascript:var%20d=document;var%20s=d.createElement('script');s.src='https://grosserly.github.io/js-inject/inject.js';d.body.appendChild(s);void(0);
 */
(function() {

	var modal = document.createElement("dialog"); // New dialog box element added just this year
	document.body.appendChild(modal);
	modal.showModal(); // Required to make modal visible
	modal.style = "padding:20px;border:0;box-shadow:0 0 50px"; // Add style to modal

	// Construct modal
	modal.innerHTML = '<div>\
<button style="position:absolute;top:0;right:0;padding:2px 5px 2px">X</button>\
<a href="https://github.com/Grosserly/js-inject/" style=font-size:20px>JavaScript Injector</a>\
<div></div>\
<textarea rows=6 cols=60 style="margin:15px 0 15px;font-family:monospace;white-space:pre;overflow-wrap:normal;overflow-x:scroll;"></textarea>\
<div></div>\
<button>Inject</button>\
</div>';

    
	// Delete modal from page when X button clicked
	modal.getElementsByTagName('button')[0].addEventListener('click', function() {
		modal.parentNode.removeChild(modal);
	}, true);
    
	// Run the JavaScript in the box when Inject button clicked
	modal.getElementsByTagName('button')[1].addEventListener('click', function() {
		eval(modal.getElementsByTagName('textarea')[0].value);
	}, true);

})();
