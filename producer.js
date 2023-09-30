const {kafka} = require('./client');

async function init (){
    const producer = kafka.producer();

    console.log('Connecting Producer');
    await producer.connect();
    console.log('Producer Connected Successfully');

    await producer.send({
        topic: "user-location-updates",
        messages : [
            {
                partition : 0,
                key:"location updates",
                value : JSON.stringify({name:"Alice" , Loca:"Mumbai"})
            }
        ]
    });
    producer.disconnect();
    
}

init();