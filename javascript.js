// const stationURL = "https://api.meteostat.net/v2/stations/search";
// const dataURL = "https://api.meteostat.net/v2/stations/daily";

// let audio = new Audio('sounds/testing.mp3');

// testingGoogleSearch();
let device;




if (navigator.requestMIDIAccess){
    navigator.requestMIDIAccess().then(success,failure);

}

function failure(){
    console.log('Could not connect to MIDI');   
}

function updateDevices(event){
    console.log(event);
}

function success(midiAccess){
    midiAccess.addEventListener('statechange', updateDevices);
    const inputs = midiAccess.inputs;
    console.log(midiAccess.outputs);
    for (var output of midiAccess.outputs.values()) {
        device = output;
        console.log ('Output device selected', device);
    }
    //console.log(inputs);

    inputs.forEach((input) => {
        // console.log(input);
        input.addEventListener('midimessage' , handleInput)
    })
}

function colorKeys(key, clr) {
    device && device.send([0x90, key, clr]);
}
function clearAll(){
    for (let i = 0; i < 100; i++){
        colorKeys(i, 0)
    }
}
function colorAll(){
    for (let i = 0; i < 100; i++){
        colorKeys(i, i)
    }
}

function handleInput(input){
    // console.log(input);


    const command = input.data[0];
    const note = input.data[1];
    const velocity = input.data[2];

// console.log(`command: ${command}, note: ${note}, velocity: ${velocity}`);
    // console.log(command);
    // console.log(note);
    // console.log(velocity);

    switch (command) {
        case 144: 
        if(velocity > 0){
            noteOn(note);
        } else {
            noteOff(note);
        }
        break;
    }
}

function noteOn(note){
    console.log(`note:${note} //on`);
    if (note == 64){
        document.getElementById("testelm").innerHTML = "Note 64 is ON"
        colorKeys(65, 127);
    }
    if (note == 65){
        clearAll();
    }

    if (note == 96){
        b = 10;
        document.getElementById('testelm').style.backgroundColor = `rgba(0,0,${b},1)`;
        // document.getElementById("testelm").innerHTML = "Back to Normal"
    }

    if (note == 97){
         b = 100;
        document.getElementById('testelm').style.backgroundColor = `rgba(0,0,${b},1)`;
    }

    if (note == 98){
        b = 175;
        document.getElementById('testelm').style.backgroundColor = `rgba(0,0,${b},1)`;
    }

    if (note == 99){
        b = 255;
        let p5_ = new p5();
        console.log(p5_.map(0.5,0,1,1,100));
        document.getElementById('testelm').style.backgroundColor = `rgba(0,0,${b},1)`;
    }

    if (note == 60){
        let p5_ = new p5();
        
        

        
    }
}

function noteOff(note){
    console.log(`note:${note} //off`);
    if (note == 65){
        document.getElementById("testelm").innerHTML = "Back to Normal"
    }
    
    if (note == 96){
        document.getElementById('testelm').style.backgroundColor = `rgba(255,255,255,1)`;
        // document.getElementById("testelm").innerHTML = "Back to Normal"
    }
    // if (note == 99){
    //     audiopause();
    // }

}



// function audioplay(){
//     audio.play();
// }

// function audiopause(){
//     audio.pause();
// }

// deepai.setApiKey('');
// (async function() {

//     var resp = await deepai.callStandardApi("text2img", {
//         text: "Truck"
//     });
//     console.log(resp);
//     console.log(resp.output_url);
//     document.getElementById("wakyAI").src = resp.output_url;
// })()


// function testingGoogleSearch(){
//     api_key = 'ae6ab856a3fc2c0583a3e5e110106b400a68c9749e7deb93faf287406b79894c'
//     search = 'Chicago'
//     $.ajax({
//         type: 'GET',
//         dataType: 'json',
//         url: `https://serpapi.com/search.json?q=${search}&tbm=isch&ijn=0&api_key=${api_key}`,
//         async: false,
//         crossDomain: true,

//         complete: function (response) {
//              if(response.readyState == 4 && response.status == 200)
//          }
        
//     })

    
// }















 




























// const api_url =
// "https://meteostat.p.rapidapi.com/stations/monthly?station=72534&start=2015-01-01&end=2021-12-31&units=imperial"  

// async function getapi(url) {
//     const response = await fetch(url);
//     var data = await response.json();
//     console.log(data);
//     if (response) {
//         hideloader();
//     }
//     show(data);
//     getapi(api_url);

// }
// function hideloader() {
//     document.getElementById('loading').style.display = 'none';
// }



// function show(data) {
//     let tab = 
//         `<tr>
//         <th>Date</th>
//         <th>tavg</th>
//         </tr>`;

//     for (let r of data.list) {
//         tab += `<tr>
//     <td>${r.date} </td>
//     <td>${r.tavg}</td>
//     </tr>`;
//     }
//     document.getElementById("tavg").innerHTML = tab;
// }



