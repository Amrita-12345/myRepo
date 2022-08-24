
/* let URL = "https://www.javascripttutorial.net/pic.jpg";
function upload(url) {
    console.log(`Uploading the picture ${url} ...`);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url) {
          resolve(url);
        } else {
          reject(url);
        }
      }, 1000);
    });
  }
  function process(url) { 
    return new Promise((resolve, reject) => { 
      console.log(`processing the picture ${url} ...`); 
      setTimeout(() => { 
        resolve(["url"]); 
      }, 2 * 1000); 
    }); 
  } 

  function execute() {
    setTimeout(() => {
      console.log(`The Uploading & Processing of Picture ${URL} is Done`);
    }, 2000 * 2);
  }

 
  //upload(URL).then(process(URL)).thenthen(console.log); 
  
  async function show() 
  { 
    let upload = await upload(URL); 
    let process = await process(URL); 
    let getExecute = await execute();
    //console.log('completed ${URL}');
   }
   show();*/

   //2nd way
   let URL = "https://www.javascripttutorial.net/pic.jpg";
function upload(url) {
   
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Uploading the picture ${url} ...`)
        resolve();
      }, 1000 );
    
    });
}
  
function process(url) {
   
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Processing the picture ${url} ...`)
            resolve();
          }, 2000 );
    });
}
function execute() {
    setTimeout(() => {
      console.log(`The Uploading & Processing of Picture ${URL} is Done`);
    }, 3000 );
  }

async function show() {
    let getUpload = await upload(URL);
    let getProcess = await process(URL);
    let getExecute = await execute();
}
  
show();