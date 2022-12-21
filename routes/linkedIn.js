const router = require('express').Router();
const axios = require("axios");
const { Router } = require('express');


router.post('/', (req, res) => {
  const title = req.body.title;
  const location = req.body.location;
  const pages = req.body.pages;

  const options = {
    method: 'POST',
    url: 'https://linkedin-jobs-search.p.rapidapi.com/',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': process.env.X-RapidAPI-Key,
      'X-RapidAPI-Host': 'linkedin-jobs-search.p.rapidapi.com'
    },
    data: `{"search_terms":"${title}","location":"${location}","page":"${pages}"}` 
  };
  
  axios.request(options).then(async function (response) {
      const results = await response.data
      let date = new Date();
      let now = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
      if (results){
        return res.render('result', {results, now});
      } 
      return res.render('404')

      
  }).catch(function (error) {
      console.error(error);
  });
})

module.exports = router;

