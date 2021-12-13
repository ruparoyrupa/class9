const phone_book = [

    {
       

        name     :'Tripty Roy' ,

        age      : 55 ,

        relation : 'mother' ,

        location :'Jessore' ,

        gender   :'Female',

        phone    : '01767372689'



    },

    {
       

        name     :'Hasan Anamul' ,

        age      : 33 ,

        relation : 'Brother',

        location :'Dhaka' ,

        gender   :'Male',

        phone    : '01348755433'



    },

    {
        

        name     :'Joy Shaheb' ,

        age      : 30 ,

        relation : 'Friend',

        location :'Khulna' ,

        gender   :'Male',

        phone    : '01884562345'



    },
    
    {
        

        name     :'Lima Khatun' ,

        age      : 21 ,

        relation : 'Sister',

        location :'Dhaka' ,

        gender   :'Female',

        phone    : '01745927467'



    },

    {
       

        name     :'ANirban Biswas' ,

        age      : 36 ,

        relation : 'Brother',

        location :'Jessore' ,

        gender   :'Male',

        phone    : '01873456325'



    },

    {
        

        name     :'Protish Biswas' ,

        age      : 38 ,

        relation :'Husband',

        location :'Khulna' ,

        gender   :'Male',

        phone    : '01723765543'



    }

    

] ;


let data2 = JSON.stringify(phone_book);

localStorage.setItem('phone_book data' , data2) ;



let pb  = localStorage.getItem('phone_book data');

console.log(JSON.parse(pb) );

