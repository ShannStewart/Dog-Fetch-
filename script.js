function readyFunctions(){
    console.log("readyFuntions ran")
    let dogNumber = 1;
    getNumber();
}

async function getNumber(){
    console.log("getNumber ran")

    await $('.getDogs').off('click');

    await $('.getDogs').on('click', '.puppyButton', function(event){
        event.preventDefault();
    $('.dogDisplay').empty();
        console.log("Display emptied");
        dogNumber = $('.puppyNumber').val();

        let dogLink = '';
        dogLink = 'https://dog.ceo/api/breeds/image/random/' + dogNumber;

        console.log(dogLink);

        arrayAPI(dogLink);
    });
}

async function arrayAPI(puppyLink){
    console.log("arrayAPI ran");

    dogPool=[];
        await fetch(puppyLink)
        .then(response => response.json())
        .then(responseJSON => dogPool.push(responseJSON.message))
        .catch(error => alert('error! danger!'));

       await console.log(dogPool); 
       await console.log(dogPool.length);

    for (i=0; i<dogPool.length; i++){
           await console.log(dogPool[i]);
        }
        

    readyFunctions();
}


$(readyFunctions);