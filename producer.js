const {kafka} = require('./client');
const readline = require('readline');

const rl = readline.createInterface ({
    input : process.stdin,
    output : process.stdout
})

async function init (){
    const producer = kafka.producer();

    console.log('Connecting Producer');
    await producer.connect();
    console.log('Producer Connected Successfully');

    rl.setPrompt('> ')
    rl.prompt();

    rl.on('line', async function(line) {
        const [userName , location] = line.split(' ');
        await producer.send({
            topic: "user-location-updates",
            messages : [
                {
                    partition : location.toLowerCase() === "north" ? 0 :1,
                    key:"location updates",
                    value : JSON.stringify({name:userName , location:location})
                }
            ]
        });
    }).on('close', async ()=>{
        producer.disconnect();
    })

}

init();