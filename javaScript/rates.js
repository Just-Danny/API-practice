

var x='https://api.exchangeratesapi.io/latest';
let xhrRates = new XMLHttpRequest();


async function determine(){
    if(document.getElementById("MoneyType").value == "EUR"){
         x='https://api.exchangeratesapi.io/latest';
         xhrRates.open('GET',x);

         xhrRates.send();
        xhrRates.onload=()=>{
            
        
        const data = JSON.parse(xhrRates.response);
        console.log(data);
        console.log(xhrRates.readyState);
    
      
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
    
    }
    else if(document.getElementById("MoneyType").value == "USD"){
        var x ='https://api.exchangeratesapi.io/latest?base=USD';
        let xhrRates = new XMLHttpRequest();
        xhrRates.open('GET',x);

        xhrRates.send();
        xhrRates.onload=()=>{


        const data = JSON.parse(xhrRates.response);
        console.log(data);
        console.log(xhrRates.readyState);

       
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

else if(document.getElementById("MoneyType").value == "CAD"){
    var x ='https://api.exchangeratesapi.io/latest?base=CAD';
    let xhrRates = new XMLHttpRequest();
    xhrRates.open('GET',x);

    xhrRates.send();
    xhrRates.onload=()=>{


    const data = JSON.parse(xhrRates.response);
    console.log(data);
    console.log(xhrRates.readyState);

   
    document.getElementById("name1").innerHTML= "AUD: ";
    document.getElementById("name2").innerHTML= "BGN: ";
    document.getElementById("name3").innerHTML= "USD: ";
    document.getElementById("name4").innerHTML= "CNY: ";
    document.getElementById("name5").innerHTML= "DKK: ";
    document.getElementById("name6").innerHTML= "MYR: ";
    document.getElementById("name7").innerHTML= "JPY: ";
    document.getElementById("name8").innerHTML= "EUR: ";

    document.getElementById("CU1").value= data.rates.AUD;
    document.getElementById("CU2").value= data.rates.BGN;
    document.getElementById("CU3").value= data.rates.USD;
    document.getElementById("CU4").value= data.rates.CNY;
    document.getElementById("CU5").value= data.rates.DKK;
    document.getElementById("CU6").value= data.rates.MYR;
    document.getElementById("CU7").value= data.rates.JPY;
    document.getElementById("CU8").value= data.rates.EUR;
    document.getElementById("currentNOW").innerHTML= data.base;
    
    }
}

else if(document.getElementById("MoneyType").value == "DKK"){
    var x ='https://api.exchangeratesapi.io/latest?base=DKK';
    let xhrRates = new XMLHttpRequest();
    xhrRates.open('GET',x);

    xhrRates.send();
    xhrRates.onload=()=>{


    const data = JSON.parse(xhrRates.response);
    console.log(data);
    console.log(xhrRates.readyState);

   
    document.getElementById("name1").innerHTML= "AUD: ";
    document.getElementById("name2").innerHTML= "BGN: ";
    document.getElementById("name3").innerHTML= "USD: ";
    document.getElementById("name4").innerHTML= "CNY: ";
    document.getElementById("name5").innerHTML= "CAD: ";
    document.getElementById("name6").innerHTML= "MYR: ";
    document.getElementById("name7").innerHTML= "JPY: ";
    document.getElementById("name8").innerHTML= "EUR: ";

    document.getElementById("CU1").value= data.rates.AUD;
    document.getElementById("CU2").value= data.rates.BGN;
    document.getElementById("CU3").value= data.rates.USD;
    document.getElementById("CU4").value= data.rates.CNY;
    document.getElementById("CU5").value= data.rates.CAD;
    document.getElementById("CU6").value= data.rates.MYR;
    document.getElementById("CU7").value= data.rates.JPY;
    document.getElementById("CU8").value= data.rates.EUR;
    document.getElementById("currentNOW").innerHTML= data.base;
    
    }
}

else if(document.getElementById("MoneyType").value == "AUD"){
    var x ='https://api.exchangeratesapi.io/latest?base=AUD';
    let xhrRates = new XMLHttpRequest();
    xhrRates.open('GET',x);

    xhrRates.send();
    xhrRates.onload=()=>{


    const data = JSON.parse(xhrRates.response);
    console.log(data);
    console.log(xhrRates.readyState);

   
    document.getElementById("name1").innerHTML= "DKK: ";
    document.getElementById("name2").innerHTML= "BGN: ";
    document.getElementById("name3").innerHTML= "USD: ";
    document.getElementById("name4").innerHTML= "CNY: ";
    document.getElementById("name5").innerHTML= "CAD: ";
    document.getElementById("name6").innerHTML= "MYR: ";
    document.getElementById("name7").innerHTML= "JPY: ";
    document.getElementById("name8").innerHTML= "EUR: ";

    document.getElementById("CU1").value= data.rates.DKK;
    document.getElementById("CU2").value= data.rates.BGN;
    document.getElementById("CU3").value= data.rates.USD;
    document.getElementById("CU4").value= data.rates.CNY;
    document.getElementById("CU5").value= data.rates.CAD;
    document.getElementById("CU6").value= data.rates.MYR;
    document.getElementById("CU7").value= data.rates.JPY;
    document.getElementById("CU8").value= data.rates.EUR;
    document.getElementById("currentNOW").innerHTML= data.base;
    
    }
}

else if(document.getElementById("MoneyType").value == "JPY"){
    var x ='https://api.exchangeratesapi.io/latest?base=JPY';
    let xhrRates = new XMLHttpRequest();
    xhrRates.open('GET',x);

    xhrRates.send();
    xhrRates.onload=()=>{


    const data = JSON.parse(xhrRates.response);
    console.log(data);
    console.log(xhrRates.readyState);

   
    document.getElementById("name1").innerHTML= "AUD: ";
    document.getElementById("name2").innerHTML= "BGN: ";
    document.getElementById("name3").innerHTML= "USD: ";
    document.getElementById("name4").innerHTML= "CNY: ";
    document.getElementById("name5").innerHTML= "CAD: ";
    document.getElementById("name6").innerHTML= "MYR: ";
    document.getElementById("name7").innerHTML= "DKK: ";
    document.getElementById("name8").innerHTML= "EUR: ";

    document.getElementById("CU1").value= data.rates.AUD;
    document.getElementById("CU2").value= data.rates.BGN;
    document.getElementById("CU3").value= data.rates.USD;
    document.getElementById("CU4").value= data.rates.CNY;
    document.getElementById("CU5").value= data.rates.CAD;
    document.getElementById("CU6").value= data.rates.MYR;
    document.getElementById("CU7").value= data.rates.DKK;
    document.getElementById("CU8").value= data.rates.EUR;
    document.getElementById("currentNOW").innerHTML= data.base;
    
    }
}

else if(document.getElementById("MoneyType").value == "BGN"){
    var x ='https://api.exchangeratesapi.io/latest?base=BGN';
    let xhrRates = new XMLHttpRequest();
    xhrRates.open('GET',x);

    xhrRates.send();
    xhrRates.onload=()=>{


    const data = JSON.parse(xhrRates.response);
    console.log(data);
    console.log(xhrRates.readyState);

   
    document.getElementById("name1").innerHTML= "AUD: ";
    document.getElementById("name2").innerHTML= "DKK: ";
    document.getElementById("name3").innerHTML= "USD: ";
    document.getElementById("name4").innerHTML= "CNY: ";
    document.getElementById("name5").innerHTML= "CAD: ";
    document.getElementById("name6").innerHTML= "MYR: ";
    document.getElementById("name7").innerHTML= "JPY: ";
    document.getElementById("name8").innerHTML= "EUR: ";

    document.getElementById("CU1").value= data.rates.AUD;
    document.getElementById("CU2").value= data.rates.DKK;
    document.getElementById("CU3").value= data.rates.USD;
    document.getElementById("CU4").value= data.rates.CNY;
    document.getElementById("CU5").value= data.rates.CAD;
    document.getElementById("CU6").value= data.rates.MYR;
    document.getElementById("CU7").value= data.rates.JPY;
    document.getElementById("CU8").value= data.rates.EUR;
    document.getElementById("currentNOW").innerHTML= data.base;
    
    }
}

else if(document.getElementById("MoneyType").value == "CNY"){
    var x ='https://api.exchangeratesapi.io/latest?base=CNY';
    let xhrRates = new XMLHttpRequest();
    xhrRates.open('GET',x);

    xhrRates.send();
    xhrRates.onload=()=>{


    const data = JSON.parse(xhrRates.response);
    console.log(data);
    console.log(xhrRates.readyState);

   
    document.getElementById("name1").innerHTML= "AUD: ";
    document.getElementById("name2").innerHTML= "BGN: ";
    document.getElementById("name3").innerHTML= "USD: ";
    document.getElementById("name4").innerHTML= "DKK: ";
    document.getElementById("name5").innerHTML= "CAD: ";
    document.getElementById("name6").innerHTML= "MYR: ";
    document.getElementById("name7").innerHTML= "JPY: ";
    document.getElementById("name8").innerHTML= "EUR: ";

    document.getElementById("CU1").value= data.rates.AUD;
    document.getElementById("CU2").value= data.rates.BGN;
    document.getElementById("CU3").value= data.rates.USD;
    document.getElementById("CU4").value= data.rates.DKK;
    document.getElementById("CU5").value= data.rates.CAD;
    document.getElementById("CU6").value= data.rates.MYR;
    document.getElementById("CU7").value= data.rates.JPY;
    document.getElementById("CU8").value= data.rates.EUR;
    document.getElementById("currentNOW").innerHTML= data.base;
    
    }
}

else if(document.getElementById("MoneyType").value == "MYR"){
    var x ='https://api.exchangeratesapi.io/latest?base=MYR';
    let xhrRates = new XMLHttpRequest();
    xhrRates.open('GET',x);

    xhrRates.send();
    xhrRates.onload=()=>{


    const data = JSON.parse(xhrRates.response);
    console.log(data);
    console.log(xhrRates.readyState);

   
    document.getElementById("name1").innerHTML= "AUD: ";
    document.getElementById("name2").innerHTML= "BGN: ";
    document.getElementById("name3").innerHTML= "USD: ";
    document.getElementById("name4").innerHTML= "CNY: ";
    document.getElementById("name5").innerHTML= "CAD: ";
    document.getElementById("name6").innerHTML= "DKK: ";
    document.getElementById("name7").innerHTML= "JPY: ";
    document.getElementById("name8").innerHTML= "EUR: ";

    document.getElementById("CU1").value= data.rates.AUD;
    document.getElementById("CU2").value= data.rates.BGN;
    document.getElementById("CU3").value= data.rates.USD;
    document.getElementById("CU4").value= data.rates.CNY;
    document.getElementById("CU5").value= data.rates.CAD;
    document.getElementById("CU6").value= data.rates.DKK;
    document.getElementById("CU7").value= data.rates.JPY;
    document.getElementById("CU8").value= data.rates.EUR;
    document.getElementById("currentNOW").innerHTML= data.base;
    
    }
}
/*

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
*/
}
