const fs = require('node:fs');
const lineReader = require('line-reader');
const axios = require('axios');
const file = process.argv[2];

function cleanUrl(url) {
    return url.replace(/^(?:https?:\/\/)|(\/)/ig, "");
  }

lineReader.eachLine(`${file}`, (line, last, done) => {
     const response =  axios.get(line).then((res)=>{
        const fileName = cleanUrl(res.config.url)
        let status = res.status;
        console.log(fileName);
        let content = res.data
        fs.writeFile(`${fileName}`, content, { flag: 'a+' }, err => {});
     })

});
