// Code your solutions in this file
const patrons=["Guadalupe", "Ollie", "Aki"];

function writeCards(names, event){
    // this function needs an array of names and an event name
    // write a for loop, start at 0 and stop at length of array
    // collect messages in new araryand return this array at end of function
    // names=patrons;
    // event="surprise";
    const messages=[];
    for(let i=0; i<names.length; i++){
        // console.log(`Thank you, ${names[n]}, for the wonderful ${event} gift!`);
        messages[i]=`Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        // messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    // return console.log(messages);
    return messages;
}
writeCards(patrons, "surprise");
// writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

function countDown(integer){
    while(integer>=0){
        console.log(integer);
        integer--;
    }
}

// countDown(patrons.length);