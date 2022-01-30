var models = [
    {
        name : 'bmw 418d',
        image : 'img/bmw.jpg',
        link :
        'http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe'
    },
    {
        name : 'mazda cx-3',
        image : 'img/mazda.jpg',
        link : 
        'http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion'
    },
    {
        name : 'Volvo S60',
        image : 'img/volvo.jpg',
        link : 
        'http://aralar.com.tr/volvo/s6-/2018/1-5-t3-advance'
    },
    {
        name : 'skoda superb',
        image : 'img/skoda.jpg',
        link : 
        'http://www.arabalar.com.tr/skoda/superb/2018/1-4-tsi-active'
    },
    {
        name : 'Honda Civic',
        image : 'img/honda.jpg',
        link: 
        'http://arabalar.com.tr/honda/civic/2018/1-6-elegance'
    }
];

var index = 0;
var slaytCount = models.length;
var interval;

var settings={
    duration : '1000',
    random : false // rastgele slayt
};

init(settings);

showSlide(index);

document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
    index--;
    showSlide(index);
    console.log(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){
    index++;
    showSlide(index);
    console.log(index);
});


document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval); // mouse geldiğinde durur
    })
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings); // mouse çektiğimizde random devam eder

    })
});

function init(settings){

   var prev;
   interval = setInterval(function(){

    if(settings.random){
        // random index
        do{
            index = Math.floor(Math.random()* slaytCount);
        }while(index == prev)
        prev = index;
    }else{
        //artan index
        if(slaytCount == index+1){
            index = -1;
        }
        showSlide(index);
        console.log(index);
        index++;
    }
    showSlide(index);

   },settings.duration)





}




function showSlide(i){

    index = i;

    if(i<0){
       index = slaytCount - 1;
    }
    if(i >= slaytCount){
        index =0;
    }

    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src',models[index].image);

    document.querySelector('.card-link').setAttribute('href',models[index].link);

}
