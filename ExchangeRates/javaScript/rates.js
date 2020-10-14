//document.getElementsByClassName("btn").addEventListener("click",determine());
const curency = document.querySelector(".CU1");

let xhrRates = new XMLHttpRequest();

xhrRates.onreadystatechange = e =>{
if(xhrRates.readyState ===4)
if(xhrRates.status ===200){
    const data = JSON.parse(xhrRates.response);
    console.log(data);
    curency.innerHTML= data.xhrRates.rates[x];
}
else if (xhrRates.status === 404)
{
    alert("That page is not found");
}
else if(xhrRates.status ===500)
{
    alert("the server is a lie")
}
};

xhrRates.open('GET','https://api.exchangeratesapi.io/latest');

xhrRates.send();