const deves = [

    {
        id       : 1 ,

        name     :'Rupa Roy' ,

        age      : 30 ,

        skill    :'java',

        income   : 4000 ,

        location :'Jessore' ,

        gender   :'Female'



    },

    {
        id       : 2 ,

        name     :'Hasan Anamul' ,

        age      : 33 ,

        skill    :'java',

        income   : 2800 ,

        location :'Dhaka' ,

        gender   :'Male'



    },

    {
        id       : 3 ,

        name     :'Joy Shaheb' ,

        age      : 30 ,

        skill    :'php',

        income   : 3900 ,

        location :'Khulna' ,

        gender   :'Male'



    },
    
    {
        id       : 4 ,

        name     :'Lima Khatun' ,

        age      : 21 ,

        skill    :'MERN',

        income   : 2000 ,

        location :'Dhaka' ,

        gender   :'Female'



    },

    {
        id       : 5 ,

        name     :'ANirban Biswas' ,

        age      : 36 ,

        skill    :'MERN',

        income   : 4000 ,

        location :'Jessore' ,

        gender   :'Male'



    },

    {
        id       : 6 ,

        name     :'Protish Biswas' ,

        age      : 20 ,

        skill    :'php',

        income   : 3700 ,

        location :'Khulna' ,

        gender   :'Male'



    },

    {
        id       : 7 ,

        name     :'Chandra Biswas' ,

        age      : 25 ,

        skill    :'java',

        income   : 2000 ,

        location :'Jessore' ,

        gender   :'Female'



    },

    {
        id       : 8 ,

        name     :'Mahmud Hasan' ,

        age      : 32 ,

        skill    :'java',

        income   : 3500 ,

        location :'Dhaka' ,

        gender   :'Male'



    },

    {
        id       : 9 ,

        name     :'Rupali Roy' ,

        age      : 28 ,

        skill    :'MERN',

        income   : 3000 ,

        location :'Khulna' ,

        gender   :'Female'



    },

    {
        id       : 10 ,

        name     :'Deloar Khan' ,

        age      : 40 ,

        skill    :'php',

        income   : 1000 ,

        location :'Dhaka' ,

        gender   :'Male'



    }


] ;


let data3 = JSON.stringify(deves) ;

console.log(data3);

let data4 = JSON.parse(data3);

console.log(data4);


localStorage.setItem('developers data' , data3);