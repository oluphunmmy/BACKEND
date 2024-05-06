function readFileAsync (callback){

    setTimeout(()=>{
  
        const data = [
              {
                    name: "Abimbola",
                    salary: 500000
              },
  
              {
                    name: "Funmilayo",
                    salary: 7000000
              },
  
              {
  
                    name: "Obinna",
                    salary: 90000000
              }
        ]
        callback(null, data);
    }, 6000)
  
  }
  
  
  setTimeout(()=>{
  
        console.log("Start reading files....")
  
        readFileAsync((err, data)=>{
  
        if (err){
              console.log("Error loading files..")
              return
        }
  
        console.log("File Content: ", data);
        })
  
  
  
        setTimeout(()=>{
              console.log("After calling readFileAsync, continue with other tasks.....")
        },3000)
  
  }, 1000)
  
  
  // console.log("Start reading files....")
  
  // readFileAsync((err, data)=>{
  
  //       if (err){
  //             console.log("Error loading files..")
  //             return
  //       }
  
  //       console.log("File Content: ", data);
  // })
  
  // console.log("After calling readFileAsync, continue with other tasks.....")