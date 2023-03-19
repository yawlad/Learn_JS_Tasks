"use strict";

/***___TASK_01___***/

{
  alert(
    document
      .querySelector("[data-widget-name]")
      .getAttribute("data-widget-name")
  );
}

/***___TASK_02___***/

{
  for (let link of document.querySelectorAll("a")) {
    let href = link.getAttribute("href");
    if (!href) continue;
    if (!href.includes("://")) continue;
    if (href.startsWith("http://internal.com")) continue;
    link.style.color = "orange";
  }
}
