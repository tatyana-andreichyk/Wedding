/* slider */

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 3000);

function nextSlide(){
    goToSlide(currentSlide + 1);
}

function previousSlide(){
    goToSlide(currentSlide - 1);
}

function goToSlide(n){
    slides[currentSlide].className = 'slide';
    currentSlide = (n + slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

var playing = true;

function pauseSlideshow(){
    playing = false;
    clearInterval(slideInterval);
}

function playSlideshow(){
    playing = true;
    slideInterval = setInterval(nextSlide, 3000);
}


var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function(){
    pauseSlideshow();
    nextSlide();
};

previous.onclick = function(){
    pauseSlideshow();
    previousSlide();
};

/* /slider */





/* catalog */

var catalogProdJson = '[{"id": "dressCatalog", "thumbLink": "image/dress.jpg", "categoryDispName": "Свадебные платья"}, {"id": "ringsCatalog", "thumbLink": "image/rings.jpg", "categoryDispName": "Обручальные кольца"}, {"id": "bouquetCatalog", "thumbLink": "image/bouquet.jpg", "categoryDispName": "Букет невесты"}, {"id": "accessoryCatalog", "thumbLink": "image/accessory.jpg", "categoryDispName": "Аксессуары"}]';

var catalogProdusts = JSON.parse(catalogProdJson);
console.log(catalogProdusts);

for (var i=0; i < catalogProdusts.length; i++){
   /*console.log(catalogProdusts[i]);*/
    drawSectionCatalog(catalogProdusts[i]); 
}

function drawSectionCatalog(sectionObj){
    var catalog = document.getElementsByClassName('catalog')[0];
    
    var sectionCatalog = document.createElement('div');
    sectionCatalog.id = sectionObj.id;
    sectionCatalog.className = 'catalog_section';
     
    var sectionLink = document.createElement('a');
    sectionLink.href = 'main_catalog.html?category=' + sectionObj.id;
    sectionCatalog.appendChild(sectionLink);
    
    var linkImage = document.createElement('img');
    linkImage.src = sectionObj.thumbLink;
    linkImage.alt = sectionObj.categoryDispName;
    sectionLink.appendChild(linkImage);
    
    var linkName = document.createElement('span');
    linkName.textContent = sectionObj.categoryDispName;
    sectionLink.appendChild(linkName);
    
    catalog.appendChild(sectionCatalog);  
}

/* /catalog */