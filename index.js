const axios =require("axios");


axios.post('https://my-notary-app.herokuapp.com/getCustomerDashboard',{ customerId : "6027b462059a1100152ef4db" })
  .then(function (response) {
    console.log(response.data);
  })

 
