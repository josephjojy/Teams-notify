const request = require('request-promise');

const hook = '<hook ID>';

const getData = async function(){

    const json =await request({
        uri: 'https://next.json-generator.com/api/json/get/4J8XXreEK',
        json:true
    });


    return json;
};

(async function(){
try{
    
    //get data
     const jsonData = await getData();
    console.log(jsonData);

    //post to teams
    const res = await request({
        url:`https://outlook.office.com/webhook/${hook}`,
        method:'POST',
        body: jsonData,
        json:true
    });
    console.log(res);
}
catch(e){
    console.log('Error:',e);
}
})();
