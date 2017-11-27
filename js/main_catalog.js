var catalogFilter = {filterCategory: "allCatalogItems", filterColor: "allColors", filterMinPrice: "", filterMaxPrice: ""};


var url_string = window.location.href;
var url = new URL(url_string);
var urlParamCategory = url.searchParams.get("category");
//console.log(urlParamCategory);


//read demo json from json_demo_data.js

var catalogItems = JSON.parse(catalogItemsJson);
//console.log(catalogItems);



function drawCatalogList(){
    var catalogItemsTemp = [];
    
    for (var i=0; i < catalogItems.length; i++){
        
        //condition for category     
        var validCategorySelected = false;
        if (catalogFilter.filterCategory == "allCatalogItems"){
            validCategorySelected = true;
        } else if (catalogItems[i].categoryName == catalogFilter.filterCategory) {
            validCategorySelected = true;
        }
        
        //condition for color
        var validColorSelected = false;
        if (catalogFilter.filterColor == "allColors"){
            validColorSelected = true;
        } else if (catalogItems[i].colorName == catalogFilter.filterColor){
            validColorSelected = true;
        }
                  
        
        //condition for price
        var validMinPriceSelected = false;
        if ((catalogFilter.filterMinPrice == "") || (catalogFilter.filterMinPrice == "min_price_not_selected")){
            validMinPriceSelected = true;
        } else if (catalogItems[i].price >= catalogFilter.filterMinPrice){
            validMinPriceSelected = true;
        }
         
        var validMaxPriceSelected = false;
        if ((catalogFilter.filterMaxPrice == "") || (catalogFilter.filterMaxPrice == "max_price_not_selected")){
            validMaxPriceSelected = true;
        } else if (catalogItems[i].price <= catalogFilter.filterMaxPrice){
            validMaxPriceSelected = true;
        }
                 
         
        // draw element 
        if(validCategorySelected && validColorSelected && validMinPriceSelected && validMaxPriceSelected){
            drawItem(catalogItems[i]);
        }
    }
}


drawCatalogList();




// category
var categorySelector = document.getElementById('category');

if (urlParamCategory){
    categorySelector.value = urlParamCategory;
    catalogFilter.filterCategory = urlParamCategory;
    clearDisplayedItems();
    drawCatalogList();
}

categorySelector.addEventListener('change', function(){
    var selectedCategory = this.value;
    catalogFilter.filterCategory = selectedCategory;
    clearDisplayedItems();
    drawCatalogList();
});




//color
var colorSelector = document.getElementById('color');

colorSelector.addEventListener('change', function(){
    var selectedColor = this.value;
    catalogFilter.filterColor = selectedColor;
    clearDisplayedItems();
    drawCatalogList();
});




//price min
var priceSelectorMin = document.getElementById('min_price');

priceSelectorMin.addEventListener('change', function(){
    var selectedMinPrice = this.value;
    //console.log("pricemin selectedMinPrice: " + selectedMinPrice);
    var selectedMaxPrice = getMaxPriceSelectedValue();
    //console.log("pricemin selectedMaxPrice: " + selectedMaxPrice);
    //console.log("selectedMinPrice < selectedMaxPrice:" + (selectedMinPrice < selectedMaxPrice));
    
    if(selectedMinPrice < selectedMaxPrice){
        catalogFilter.filterMinPrice = selectedMinPrice;
        clearDisplayedItems();
        drawCatalogList();
    } else {
        alert('Выбрано неверное значение \n Минимальная цена должна быть меньше максимальной');
        this.value = 'min_price_not_selected';
        catalogFilter.filterMinPrice = 'min_price_not_selected';
    }
    
});

//price max
var priceSelectorMax = document.getElementById('max_price');

priceSelectorMax.addEventListener('change', function(){
    var selectedMaxPrice = this.value;
    //console.log("pricemax selectedMaxPrice: " + selectedMaxPrice);
    var selectedMinPrice = getMinPriceSelectedValue();
    //console.log("pricemax selectedMinPrice: " + selectedMinPrice);
    //console.log("selectedMinPrice < selectedMaxPrice:" + ((selectedMinPrice * 1) < (selectedMaxPrice * 1)));
    
    if((selectedMinPrice*1 < selectedMaxPrice*1) || (selectedMinPrice == 'min_price_not_selected')){
        catalogFilter.filterMaxPrice = selectedMaxPrice;
        clearDisplayedItems();
        drawCatalogList();
    } else{
        alert('Выбрано неверное значение \n Максимальная цена должна быть больше минимальной');
        this.value = 'max_price_not_selected';
        catalogFilter.filterMaxPrice = 'max_price_not_selected';
    }
    
});


function getMinPriceSelectedValue(){
     return priceSelectorMin.value;
}

function getMaxPriceSelectedValue(){
     return priceSelectorMax.value;
}





// button for clear filter
var selectButton = document.getElementById('button_clear_filter');

selectButton.addEventListener('click', function(){
    categorySelector.value = 'allCatalogItems';
    catalogFilter.filterCategory = 'allCatalogItems';
    
    colorSelector.value = 'allColors';
    catalogFilter.filterColor = "allColors";
    
    priceSelectorMin.value = 'min_price_not_selected';
    catalogFilter.filterMinPrice = "";
    
    priceSelectorMax.value = 'max_price_not_selected';
    catalogFilter.filterMaxPrice = "";
    
    
    clearDisplayedItems();
    drawCatalogList();
});




//function clear catalog
function clearDisplayedItems(){
    var catalogItemsList = document.getElementsByClassName('catalog_items_list')[0];
    catalogItemsList.innerHTML = "";
}



//function draw item
function drawItem(itemObj){
    var catalogItemsList = document.getElementsByClassName('catalog_items_list')[0];
    
    var item = document.createElement('div');
    item.id = itemObj.id;
    item.className = 'catalog_item clear';
    
    var itemImage = document.createElement('img');
    itemImage.src = itemObj.thumbLink;
    item.appendChild(itemImage);
    
    var itemDetails = document.createElement('div');
    itemDetails.className = 'item_details';
    
    var itemDetailName = document.createElement('p');
    var itemLabel1 = document.createElement('span');
    itemLabel1.className = 'item_details_label';
    itemLabel1.textContent = 'Название: ';
    itemDetailName.appendChild(itemLabel1);
    var itemLabelName = document.createElement('span');
    itemLabelName.textContent = itemObj.name;
    itemDetailName.appendChild(itemLabelName);
    
    var itemDetailDescription = document.createElement('p');
    var itemLabel2 = document.createElement('span');
    itemLabel2.className = 'item_details_label';
    itemLabel2.textContent = 'Описание: ';
    itemDetailDescription.appendChild(itemLabel2);
    var itemlabelDescription = document.createElement('span');
    itemlabelDescription.textContent = itemObj.description;
    itemDetailDescription.appendChild(itemlabelDescription);
    
    var itemDetailPrice = document.createElement('p');
    var itemLabel3 = document.createElement('span');
    itemLabel3.className = 'item_details_label';
    itemLabel3.textContent = 'Цена: ';
    itemDetailPrice.appendChild(itemLabel3);
    var itemlabelPrice = document.createElement('span');
    itemlabelPrice.textContent = itemObj.price;
    itemlabelPrice.className = 'price_item';
    itemDetailPrice.appendChild(itemlabelPrice);
    var itemlabelPriceСurrency = document.createElement('span');
    itemlabelPriceСurrency.textContent = ' бел.руб';
    itemDetailPrice.appendChild(itemlabelPriceСurrency);
    
    var itemBuyButton = document.createElement('button');
    itemBuyButton.textContent = 'купить';
    itemBuyButton.className = 'catalog_button buy_button';
            
    itemDetails.appendChild(itemDetailName);
    itemDetails.appendChild(itemDetailDescription);
    itemDetails.appendChild(itemDetailPrice);
    itemDetails.appendChild(itemBuyButton);
    
    item.appendChild(itemDetails);
    
    catalogItemsList.appendChild(item);   
}






