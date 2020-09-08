const request = require('request-promise');

const hook = '00ada4e7-5df7-4d64-8c0e-49bd56e32442@61803a52-a8b2-4f9c-a024-e9dfa8d68034/IncomingWebhook/556cddc746cb47f1857f6d243883bf70/c7a999bf-f7a1-41ea-85c5-c11457289bee';

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
