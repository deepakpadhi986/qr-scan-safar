function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

docReady(function () {
    var resultContainer = document.getElementById('qr-reader-results');
    var lastResult, countResults = 0;
    function onScanSuccess(decodedText, decodedResult) {
        if (decodedText !== lastResult) {
            ++countResults;
            lastResult = decodedText;
            // Handle on success condition with the decoded message.
            console.log(`Scan result ${decodedText}`, decodedResult);
            $('#dcode').val(decodedText);
        }
    }
    
    var html5QrcodeScanner = new Html5QrcodeScanner(
        "qr-reader", { fps: 10, qrbox: 250 }
    );
    html5QrcodeScanner.render(onScanSuccess);
});

function myFunction() {
     /* Get the text field */
     var copyText = document.getElementById("dcode");
     
     /* Select the text field */
     copyText.select();
     copyText.setSelectionRange(0, 99999); /* For mobile devices */
     
     /* Copy the text inside the text field */
     navigator.clipboard.writeText(copyText.value);
     
     /* Alert the copied text */
     //alert("Copied the text: " + "\n" + copyText.value);
}                
