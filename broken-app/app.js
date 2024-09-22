const express = require('express');
let axios = require('axios');
var app = express();

const resolvePromises = async (params) => {
  const results = [];
  const promise = await Promise.all(params).then((values) =>{
    for(value of values) {
      results.push(value.data)
    }
  })
  console.log(results)
  return results
}

app.use(express.json());

app.post('/', async function(req, res, next) {
  try {

    let results = req.body.developers.map(async d => {
      return await axios.get(`https://api.github.com/users/${d}`);
    });

    
    let resultsPromise = await resolvePromises(results) ;
   

    
    let out = resultsPromise.map(r => ({ name: r.name, bio: r.bio }));
    
    
    return res.send(JSON.stringify(out));
  } catch(err) {
    next(err);
  }
});


app.use( function (req, res, next){
  return new ExpressError('NOT FOUND', 404)
})



app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    error: err.message,
  });
})


app.listen(3000, function() {
  console.log('Runing por port 3000')
});
