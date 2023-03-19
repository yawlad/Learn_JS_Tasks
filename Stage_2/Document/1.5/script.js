"use strict";

/***___TASK_01___***/
{
  for (let li of document.querySelectorAll("li")) {
    alert(`${li.firstChild.data}: ${li.getElementsByTagName("li").length}`);
  }
}

/***___TASK_02___***/

{
  // <html>
  //   <body>
  //     <script>alert(document.body.lastChild.nodeType);</script> // 1
  //   </body>
  // </html>;
}

/***___TASK_03___***/

{
  let body = document.body;

  body.innerHTML = "<!--" + body.tagName + "-->";

  alert( body.firstChild.data ); // BODY
}

/***___TASK_04___***/

{
  alert(document) // [object HTMLDocument]

  alert(HTMLDocument.prototype.__proto__); // [object Document]
  alert(HTMLDocument.prototype.__proto__.__proto__); // [object Node]
  alert(HTMLDocument.prototype.__proto__.__proto__.__proto__); // [object EventTarget]
  alert(HTMLDocument.prototype.__proto__.__proto__.__proto__.__proto__); // [object Object]
  alert(HTMLDocument.prototype.__proto__.__proto__.__proto__.__proto__.__proto__); // null
  //
}
