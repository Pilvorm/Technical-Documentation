function CopyToClipboard(codeid) {
  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(codeid));
    range.select().createTextRange();
    document.execCommand("copy");
  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById(codeid));
    window.getSelection().addRange(range);
    document.execCommand("copy");
  }
}

function makeVisible() {
  var text = document.getElementById("tool-text");
  text.style.display = "block";
}

function changeToolText() {
  var text = document.getElementById("tool-text");
  text.innerHTML = "Copied!";
  var code = document.getElementById("hello");
  code.ariaSelected = "false";
}

function revertToolText() {
  var text = document.getElementById("tool-text");
  text.style.display = "none";
  setTimeout(revertText, 500);
}

function revertText() {
  var text = document.getElementById("tool-text");
  text.innerHTML = "Copy to clipboard";
}