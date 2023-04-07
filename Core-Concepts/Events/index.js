const School = require('./school');

// //raise an event
// setTimeout(()=>{
//     emitter.emit('bellRing',{
//         period: 'first',
//         text: 'period ended',
//     });
// },2000)
// // emitter.emit('bellRing');

const school = new School();

//register a listener for bellRing event
school.on('bellRing',({period,text})=>{
    console.log(`We need to go to our home the ${period} ${text}`);
});

school.startPeriod();