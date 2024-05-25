

let api="https://api.dictionaryapi.dev/api/v2/entries/en/<word>";
let input=document.getElementById("input");
let search=document.getElementById("search");
// let definition=document.querySelector("#defination")
// let searchInput=input.value.trim();


search.addEventListener("click",function(e){
    e.preventDefault();
    let searchInput=input.value.trim();
    if(searchInput!=""){
        getdata(searchInput);
        input.value='';
        
    }else{
        document.getElementById("definition").innerText="plese enter a word"
    }


});

function getdata(searchInput){
    //  let searchInput=input.value.trim();
    // console.log(searchInput);
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchInput}`)
    .then(Response=>Response.json())
    .then((data)=>{
        console.log(data);
            const definition=data[0].meanings[0].definitions[5].definition;
            document.getElementById("definition").innerText=definition;
            definition.value='';
    }).catch((error)=>{
        document.getElementById("definition").innerText="WORD NOT FOUND";
        console.error("Error fetching the definition:",error);
    });
   

}



