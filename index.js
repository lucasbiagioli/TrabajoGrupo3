function disclose(linkTitle, link) {
    var content = `<div id="disclosure" style="position: fixed;
              width: 100%;
              padding: 1rem;
              background-color: red;
              z-index: 3;display:flex;top:0;">
              <span id="close" style="cursor:pointer;" >&#128473;</span>
                  <p style="margin: 0; padding:0 2rem;"> The content of this page is referenced from
                      <a href="${link}" target="__blank" style="color: white;">${linkTitle}</a>. Do comply with respective <b>license</b> for any <b>reference</b>.
                  </p>
                  
              </div>
              `;
  
    var container = document.createElement("div");
    container.innerHTML = content;
  
    var body = document.getElementsByTagName("body");
    body[0].appendChild(container);
  
    var close = document.getElementById("close");
    close.addEventListener("click", function (e) {
      e.target.parentElement.parentElement.style.display = "none";
    });
  }
  