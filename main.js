const companies= [
    {name: "AXIS", category: "Finance", start: 1981, end: 2004},
    {name: "MORE", category: "Retail", start: 1992, end: 2008},
    {name: "HONDA", category: "Auto", start: 1999, end: 2007},
    {name: "EASYDAY", category: "Retail", start: 1989, end: 2010},
    {name: "IBM", category: "Technology", start: 2009, end: 2014},
    {name: "ICICI", category: "Finance", start: 1987, end: 2010},
    {name: "BMW", category: "Auto", start: 1986, end: 1996},
    {name: "GOOGLE", category: "Technology", start: 2011, end: 2016},
    {name: "SYS", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


  ///////////////////////////////// SEE THE OBJECT  ///////////////////////////////////////////////////////////////////
  for(let i=0; i < companies.length ; i++){
//      console.log(companies[i]);
  }

  //FOR EACH LOOP

          let company;
        companies.forEach(function(res){
       //    console.log(res);
        });

 //////////////////////////////////////// FILTER  /////////////////////////////////////////////////

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

       // let canDrink = ages.filter( function(age){
       //   if(age >= 21){
       //     return true; 
       //   }
       // });
      // console.log(canDrink);



       ///  Arrow Function

       // let canDrink = ages.filter( age => age>=21);

    //  console.log(canDrink);

     //////////////////////////////////////////  FILTER RETAIL COMPANY  ///////////////////////////////////////////////////////////////

              //   const reatailCompany = companies.filter( function(company ){
              //     if(company.category === 'Retail'){
              //         return true;
              //     }
              //   });
                // console.log(reatailCompany);
                

       //  const reatailCompany = companies.filter(res => res.category === 'Retail');

       //  console.log(reatailCompany);

 /////////////////////////////////////// GET 80'S COMPANIES  ///////////////////////////////////////////////////////////////
 
       //  const eightiesCompany = companies.filter(function(res){
       //    if(res.start >= 1980 && res.start < 1990 ){
       //      return true;
       //    }
       //  });

        // console.log(eightiesCompany);

        ////////////////// Arrow Function  ///////////////////////

       //  const eightiesCompany = companies.filter(res => (res.start >= 1980 && res.start < 1990));

       //  console.log(eightiesCompany);

        ///////////////////////////// MAP ///////////////////////////////////
    
        
       //    const companyName = companies.map( function(res){
       //        return res.name;
       //    });
       //    console.log(companyName);

          ///// ARROW FUNCTION /////////

       //    const companyName = companies.map(res => res.name);
       //      console.log(companyName);

         ///////////// Company name Start and End date  /////////////////
         
       //   const bitdata = companies.map(res => `${res.name} [${res.start }] - ${[res.end]}`);
       //   console.table(bitdata);




         ///////////////////////////// SORT METHOD ////////////////////////////////////

         /////// Sort Companies By Start year /////////////////////

              // const companyDate = companies.sort(function(res1 ,res2){
              
                                          //        if(res1.start > res2.start){
                                          //               return 1;
                                          //        }
                                          //        else{
                                          //               return -1;
                                          //        }

                                          // });
                                          // console.log(companyDate);


                                   //   const companyDate = companies.sort( (res1,res2) => (res1 >res2) ? 1: -1);
                                   //   console.log(companyDate); 
             
            //////////  SORT AGE ///////
            
            // MIN TO MAX///
       //      const sortAge = ages.sort( (res1, res2) => res1- res2);
       //      console.log(sortAge);

          // max to min ///

       //    const sortAge = ages.sort( (res1, res2) => res2- res1);
       //      console.log(sortAge);


       ////////////////////////////// REDUCE METHOD /////////////////////////////////////

       