let changeColor = document.getElementById("changeColor");


chrome.storage.sync.get("color", ({ color }) => {
  //changing background color of the button
  changeColor.style.backgroundColor = color;
});

//addEventListener is like onClick, in ES6 it is added.
changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setPageBackgroundColor,
    });
  });
  
  // The body of this function will be executed as a content script inside the
  // current page
  function setPageBackgroundColor() {
    chrome.storage.sync.get("color", ({ color }) => {
      document.body.style.backgroundColor = color;
      
      //trying to change the color to white for p tags and h2 tags
      const p = document.getElementsByTagName("p");
      const h2 = document.getElementsByTagName("h2");

      for(let i = 0; i < p.length; i++){
        p[i].style.color = "white";
      }

      for(let i = 0; i < h2.length; i++){
        h2[i].style.color = "white";
      }


    });
  }