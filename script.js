// How to compare two JSON have the same properties without order

var obj1 = {
    "name" : "user1",
    "age" : 22,
}

var obj2 = {
    "age" : 22,
    "name" : "user1"
}

var isSame = true;

if(Object.keys(obj1).length == Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            isSame = false;
            break;
        }
    }
}
else {
    isSame = false;
}
console.log("Two JSON has the same properties : " + isSame);

// Use rest Countries API and display all the country flags in the console  

const getCountryFlag = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://restcountries.eu/rest/v2/all");
    
    xhr.onload = () => {
        const data = xhr.response;
        console.log(data);
        console.log(JSON.parse(data));

        const result = JSON.parse(data)
        .map((country)=>({
            "flag" : country.flag
        }));
        console.log(result)
    };
    xhr.send();
};
getCountryFlag();

// Use rest countries API and print names, region sub-region and populations

const getCountries = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://restcountries.eu/rest/v2/all");
    
    xhr.onload = () => {
        const data = xhr.response;
        console.log(data);
        console.log(JSON.parse(data));

        const result = JSON.parse(data)
        .map((country)=>({
            "name" : country.name,
            "population" : country.population,
            "region" : country.region,
            "subregion" : country.subregion
        }));
        console.log(result)
    };
    xhr.send();
};
getCountries();