function encrypt() {
    var input = document.getElementById("text-input").value.toLowerCase();
    var output = "";
  
    output = input.replace(/e/g, "enter");
    output = output.replace(/i/g, "imes");
    output = output.replace(/a/g, "ai");
    output = output.replace(/o/g, "ober");
    output = output.replace(/u/g, "ufat");
  
    document.getElementById("result").value = output;
    document.getElementById("result").style.display = "block";
    document.getElementById("image-placeholder").style.display = "none";
    document.getElementById("copy-button").disabled = false;
  }
  
  function decrypt() {
    var input = document.getElementById("text-input").value;
    var output = "";
  
    output = input.replace(/enter/g, "e");
    output = output.replace(/imes/g, "i");
    output = output.replace(/ai/g, "a");
    output = output.replace(/ober/g, "o");
    output = output.replace(/ufat/g, "u");
  
    document.getElementById("result").value = output;
    document.getElementById("result").style.display = "block";
    document.getElementById("image-placeholder").style.display = "none";
    document.getElementById("copy-button").disabled = false;
  }
  
  function copyResult() {
    var result = document.getElementById("result");
  
    result.select();
    result.setSelectionRange(0, 99999);
    document.execCommand("copy");
  }
  