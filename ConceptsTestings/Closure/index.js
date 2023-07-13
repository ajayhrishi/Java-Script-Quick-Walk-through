console.log('Testing the Closures- How much the closure is memmory efficient(Pro sides)');

console.log('As per the below example the array will be created only once');

function createArray(){
    const theBigArray = new Array(7000).fill('Haha');
    console.log('The Array is created: ',theBigArray);
    return (index)=>{
        console.log('data request received.')
        return theBigArray[index];
    }
}

const fetcher = createArray();

console.log('trying to fetch data for the first time,',fetcher(100));
console.log('trying to fetch data for the Second time,',fetcher(300));
console.log('trying to fetch data for the Third time,',fetcher(400));
console.log('trying to fetch data for the Fourth time,',fetcher(600));
console.log('trying to fetch data for the Fifth time,',fetcher(1000));

/*
in this code, the array was created and once the created and the function createArray has be removed from the main thread, the function should be removed along with deallocating all the memmory
it kept for it's variable, but in here the array 'theBigArray' did not get removed from the memmory due to the closure and the reference to these memmory was kept by the fetcher function.
*/ 