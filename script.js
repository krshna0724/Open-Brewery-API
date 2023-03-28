document.body.innerHTML = `
<div class="header">
<h1>List of Breweries</h1>
</div>
<div id="main" class="main"></div>
`
let getBrewery = async () => {
    try{
        let data = await fetch ("https://api.openbrewerydb.org/breweries");
        let breweries = await data.json();
        main.innerHTML = "";
        breweries.forEach((brewery)=>{
            display(brewery);
        });
    }catch(error){
        console.log(error);
    }
};

getBrewery();

let display = (bre) => {
    main.innerHTML += `
    <div class = "container">
    <h3 class = "head-name">Breweries Name : <span>${bre.name}</span></h3>
    <p class = "name">Breweries Type : <span>${bre.brewery_type}</span></p>
    <p class = "name">Breweries Address 2 : <span>${bre.address_2}</span></p>
    <p class = "name">Breweries Address 3 : <span>${bre.address_3}</span></p>
    <p class = "name">Breweries Website : <span>${bre.website_url}</span></p>
    <p class = "name">Breweries Ph.no : <span>${bre.phone}</span></p>
    </div>
    `
}