//ADD NEW COMPONENT HERE--------------------------------------------------------------------------------------------------
const pageComponent=[
  {
    path:"./header.html",
    file:'header',
    func:runHeaderScript,
  },
  {
    path:"./components/Navbar.html",
    file:'Navbar',
    func:runNavbar,

  },
  {
    path:"./components/Dashboard.html",
    file:'Dashboard',
    func:displayDash,
  }
]
const icons=[

]

pageComponent.map((component)=>{
  fetch(`${component.path}`)
  .then((response) => response.text())
  .then((data) => {
    document.querySelector(`${component.file}`).innerHTML = data;
    component.func == ""? "":component.func();
  })
  .catch((error) => {
    console.error("Error fetching header:", error);
  });

})

//FUNCTIONS DEFINED HERE --------------------------------------------------------------------------------------------------




// function for responsive scroll Header 
  function runHeaderScript() {
    function scrollFunction() {
      console.log(document.documentElement.scrollTop)
      if(document.documentElement.scrollTop > 50){
        document.getElementById('top-bar').style.display = "none";
        document.getElementById('scroll-bar').style.display = "flex";
        document.getElementById('navbar').style.marginTop = "80px";
        document.getElementById('navbar').style.top = "80px";
      }
      else{
        document.getElementById('top-bar').style.display = "flex";
        document.getElementById('scroll-bar').style.display = "none";
        // document.getElementById('navbar').style.marginTop = "80px";
        console.log("screen-width: ", window.innerWidth)
        if(window.innerWidth>1024){

          document.getElementById('navbar').style.marginTop = "160px";
          document.getElementById('navbar').style.top = "160px";
        }

      }

  }
     window.onscroll = scrollFunction;

}



// fetching images from uplash API when the function is trigered.
async function getData() {
  try {
    const res = await fetch(`https://api.unsplash.com/photos/?client_id=nxqsfFYnW7Kmx88PonlFI9AQCUpeHyVyzPrb85RlK-Q&per_page=30`);
    return res.json(); 
  } catch (e) {
    console.log(e);
  }
}


// Funtion to display dashboard images importing the HTML in Dashboard.html
async function displayDash() {
  const data = await getData(); // Fetch data

  
  const dashboard = document.getElementById('dashboard');
  dashboard.innerHTML = ''; 

  const fragment = document.createDocumentFragment();

  data.forEach((carousel) => {
    const carouselDiv = document.createElement('div');
    carouselDiv.className = 'w-66 contain flex flex-col gap-4 bg-slate-100  rounded-lg cursor-pointer hover:border-rose-500 hover:border-2 active:opacity-80' ; 

    carouselDiv.innerHTML = `
      <div class="flex">
        <img src="${carousel.urls.small}" alt="imgs" class="object-cover h-60 rounded-md w-72">
      </div>
      <div class="flex-col">
        <div class="font-semibold">Join a session with </div>
        <div>Hosted by</div>
        <div class="font-semibold">Sold out</div>
      </div>
    `;
    
    
    fragment.appendChild(carouselDiv);
  });

  dashboard.appendChild(fragment);
}



function runNavbar(){
  let icons='';

  for(let i=0;i<20;i++){
    icons+=
    `<div class="flex flex-col items-center justify-center h-12 w-12 gap-2 opacity-60 contain ">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
    </svg>
    <div class="text-sm">Cart</div>
  </div>`
  }

  document.getElementById('navIconDiv').innerHTML= icons;
   

}
