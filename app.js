const http = require('http');
const server = http.createServer(dataSubmit);
function dataSubmit(request, respons){
  console.log('Server listen');
  let data = '';
  request.on('data', el => data += el);
  request.on('end', ()=>{
    let inMessag = JSON.parse(data);
    console.log(data);
    let outMessag = JSON.stringify({
      title: 'Hello',
      mes: `Your name: ${inMessag.name}, your age: ${inMessag.age}`
    });
    console.log(outMessag);
    respons.statusCode = 200;
    respons.setHeader('Content-Type', 'application/json');
    respons.end(outMessag);
  });
}
server.listen(4000, 'localhost', (err)=>{
  err?console.log(err):console.log('begin port 4000');
});

