const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


  ///////////////////////////////// SEE THE OBJECT  ///////////////////////////////////////////////////////////////////
  // for(let i=0; i < companies.length ; i++){
  //    console.log(companies[i]);
  // }

  //FOR EACH LOOP
        //   let company;
        // companies.forEach(function(res){
        //   console.log(res);
        // });

  // FILTER
  //////// Get 21 or older ///////////
       ////////  Using For Loop  //////////

       
              // let canDrink= [];
              // for(let i=0; i< ages.length; i++){

              //   if(ages[i] >= 21){
              //     canDrink.push(ages[i]);

              //   }
              // }

              //   console.log(canDrink);

       ///////////// Ends For Loop /////////////

       ///////// For EACH  //////////

      //  let canDrink = ages.filter( function(age){
      //    if(age >= 21){
      //      return true; 
      //    }
      //  });
      // console.log(canDrink);



       ///  Arrow Function

    //    let canDrink = ages.filter( age => age>=21);

    //  console.log(canDrink);

     //////////////////////////////////////////  FILTER RETAIL COMPANY  ///////////////////////////////////////////////////////////////

                // const reatailCompany = companies.filter( function(company ){
                //   if(company.category === 'Retail'){
                //       return true;
                //   }
                // });
                // console.log(reatailCompany);
                

        const reatailCompany = companies.filter(res => res.category === 'Retail');

        console.log(reatailCompany);

 /////////////////////////////////////// GET 80'S COMPANIES  ///////////////////////////////////////////////////////////////
 
        // const eightiesCompany = companies.filter(function(res){
        //   if(res.start >= 1980 && res.start < 1990 ){
        //     return true;
        //   }
        // });

        // console.log(eightiesCompany);

        ////////////////// Arrow Function  ///////////////////////

        const eightiesCompany = companies.filter(res => (res.start >= 1980 && res.start < 1990));

        console.log(eightiesCompany);

