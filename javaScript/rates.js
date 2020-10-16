
var x='https://api.exchangeratesapi.io/latest';
let xhrRates = new XMLHttpRequest();

xhrRates.open('GET',x);

xhrRates.send();
function determine(){
    if(document.getElementById("MoneyType").value == "EUR"){
        x='https://api.exchangeratesapi.io/latest';
    const data = JSON.parse(xhrRates.response);
    console.log(data);
    
    console.log(data.base);
    document.getElementById("name1").innerHTML= "AUD: ";
    document.getElementById("name2").innerHTML= "BGN: ";
    document.getElementById("name3").innerHTML= "CAD: ";
    document.getElementById("name4").innerHTML= "CNY: ";
    document.getElementById("name5").innerHTML= "DKK: ";
    document.getElementById("name6").innerHTML= "MYR: ";
    document.getElementById("name7").innerHTML= "JPY: ";
    document.getElementById("name8").innerHTML= "USD: ";

    document.getElementById("CU1").value= data.rates.AUD;
    document.getElementById("CU2").value= data.rates.BGN;
    document.getElementById("CU3").value= data.rates.CAD;
    document.getElementById("CU4").value= data.rates.CNY;
    document.getElementById("CU5").value= data.rates.DKK;
    document.getElementById("CU6").value= data.rates.MYR;
    document.getElementById("CU7").value= data.rates.JPY;
    document.getElementById("CU8").value= data.rates.USD;
    document.getElementById("currentNOW").innerHTML= data.base;
    }
    else if(document.getElementById("MoneyType").value == "USD"){
        x ='https://api.exchangeratesapi.io/latest?base=USD';
        const data = JSON.parse(xhrRates.response);
        console.log("123"+data);
        console.log(data.rates.AUD);
        console.log(data.base);
        document.getElementById("name1").innerHTML= "AUD: ";
        document.getElementById("name2").innerHTML= "BGN: ";
        document.getElementById("name3").innerHTML= "CAD: ";
        document.getElementById("name4").innerHTML= "CNY: ";
        document.getElementById("name5").innerHTML= "DKK: ";
        document.getElementById("name6").innerHTML= "MYR: ";
        document.getElementById("name7").innerHTML= "JPY: ";
        document.getElementById("name8").innerHTML= "EUR: ";
    
        document.getElementById("CU1").value= data.rates.AUD;
        document.getElementById("CU2").value= data.rates.BGN;
        document.getElementById("CU3").value= data.rates.CAD;
        document.getElementById("CU4").value= data.rates.CNY;
        document.getElementById("CU5").value= data.rates.DKK;
        document.getElementById("CU6").value= data.rates.MYR;
        document.getElementById("CU7").value= data.rates.JPY;
        document.getElementById("CU8").value= data.rates.EUR;
        document.getElementById("currentNOW").innerHTML= data.base;
        }
}


xhrRates.onreadystatechange = e =>{
if(xhrRates.readyState ===4)
if(xhrRates.status ===200){
    //document.getElementById("BTNs").addEventListener("mouseup",determine);
    //determine();
    //console.log();
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


