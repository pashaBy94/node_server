let form = document.forms[0];
form.addEventListener = async function(ev){
  ev.preventDefault();
  let user = {
    name: 'paha',
    age: 27,
};
let response = await fetch('http://localhost:4000/', {
  mode: "no-cors",
  method: 'POST',
headers:{
  'Content-Type':'application/json',
},
body: JSON.stringify(user),
});
console.log(response.status);
let json = await response.json();
console.log(json);
}
