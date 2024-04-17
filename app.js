const fs=require('fs');
const readStream = fs.createReadStream('./example.txt','utf-8');
readStream.on('data',(chunk)=>{
    console.log(chunk);
});