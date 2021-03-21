//1.Create a request variable
var request =new XMLHttpRequest();
//2.Create a connection.
//Open has three parameter(get method,url,boolean)
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//3.Send the request
request.send();
//4.Process and Load the response
request.onload = function(){  //function name not necessary coz attached to event
  let data=JSON.parse(this.response);
  
  let usCurrency=data.filter((item) =>{
    if(item.currencies[0].code==='USD'){ 
    console.log(item);
    }
    });
}