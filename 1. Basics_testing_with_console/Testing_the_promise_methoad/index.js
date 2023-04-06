

  let v1;
document.getElementById("input").onclick = function(){

    if (document.getElementById("FileLoaded").checked)
    {
        v1 =true;
    }
    else
    {
        v1 = false;
    }

    const ThePromise = new Promise((resolve, reject) => {
        if (v1) {
          resolve("The File Is loaded");
        } else {
          reject("File is not yet loaded");
        }
      });
    ThePromise
    .then(result => {
      document.getElementById("Result").innerHTML = result;
    })
    .catch(error => {
        document.getElementById("Result").innerHTML = "the file is not loaded.";
    });




}



/*
1 producing code -------

const promich_me = new Promise((resolve, reject)=>
	{
		let fileLoaded = true;
	if(fileLoaded){
      resolve("File loaded");
	}
	else 
	{ reject("File not loaded");
	}
});
-------

2. consuming code, 

promich_me.then(value => console.log(value)).catch(error => console.log(error));
*/