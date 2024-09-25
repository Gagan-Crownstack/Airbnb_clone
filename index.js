fetch("./header.html")
  .then((response) => response.text())
  .then((data) => {
    document.querySelector("header").innerHTML = data;
    runHeaderScript();
  })
  .catch((error) => {
    console.error("Error fetching header:", error);
  });

  function runHeaderScript() {
    function scrollFunction() {
      console.log(document.documentElement.scrollTop)
      if(document.documentElement.scrollTop > 350){
        document.getElementById('top-bar').style.display = "none";
        document.getElementById('scroll-bar').style.display = "flex";
      }
      else{
        document.getElementById('top-bar').style.display = "flex";
        document.getElementById('scroll-bar').style.display = "none";

      }

  }
     window.onscroll = scrollFunction;

}











// Dummmy custom component
fetch("./components/Mobilenav.html").then((res)=>{
    console.log(res.text);
    return res.text();
}).then((data)=>{
    document.querySelector('Mobilenav').innerHTML=data;
})