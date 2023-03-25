mapArea = document.getElementById('map');

// major function which is check localStorage elements if those available then disable the Gro Location button.. otherwise check if the browser have the navigator tool or not.. if not, deliver a alert message.. then further taken showPosition funcion as an argument //  
function getLocation() {
 let lattt = localStorage.getItem('lat');
 let longgg = localStorage.getItem('long');
    if(lattt && longgg){
      document.getElementById('getButton').disabled = true;
      document.getElementById('getButton').style.backgroundColor = '#BA55D3';
     }
   else{
          if (navigator.geolocation) {
             navigator.geolocation.getCurrentPosition(showPosition);
          } else { 
                 mapArea.innerHTML = "Geolocation is not supported by this browser.";
              }
     }
  }

  let latt = "";
  let longg = "";

// to store lat, long values in localStorage and applying DOM //
  function showPosition(postion) {
    latt = postion.coords.latitude;
    longg = postion.coords.longitude;

    localStorage.setItem('lat', JSON.stringify(latt));
    localStorage.setItem('long', JSON.stringify(longg));
    
    mapArea.innerHTML = `
                    <iframe class="mapBody" src="https://maps.google.com/maps?q=${latt}, ${longg}&output=embed" width="800px" height="300px" frameborder="0" style="border:0"></iframe>
                    `
     }
// to remove location and to clear localSotrag //
  function removeLocation(){
    document.getElementById('getButton').disabled = false;
    document.getElementById('getButton').style.backgroundColor = '#651d88';
      latt = 0;
      longg = 0;
      mapArea.innerHTML = `
                      <iframe class="mapBody" src="https://maps.google.com/maps?q=${latt}, ${longg}&output=embed" width="800px" height="300px" frameborder="0" style="border:0"></iframe>
                       `
        localStorage.clear();
  }