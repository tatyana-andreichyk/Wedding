var catalogItemsJson = '[' + '{"id": "dress_cream_1", "thumbLink": "image/dresses/dress_cream_1.jpg", "categoryName": "dressCatalog", "name": "кремовое платье", "colorName": "cream", "description": "платье кремового цвета, рукав 3/4, кружево, силуэт расходящийся от колена к низу, размеры 42-50", "price": 1230}, ' +
                            '{"id": "dress_pink_1", "thumbLink": "image/dresses/dress_pink_1.jpg", "categoryName": "dressCatalog", "name": "розовое платье", "colorName": "pink", "description": "платье розового цвета, короткий рукав, шифон, пышная юбка, размеры 42-50", "price": 1500}, ' +
                            '{"id": "dress_white_1", "thumbLink": "image/dresses/dress_white_1.jpg", "categoryName": "dressCatalog", "name": "белое платье", "colorName": "white", "description": "платье белого цвета, без рукавов, кружево, силуэт расходящийся от колена к низу, размеры 42-50", "price": 1770}, ' +
                            
                            '{"id": "rings_1", "thumbLink": "image/rings/rings_1.jpg", "categoryName": "ringsCatalog", "name": "кольца из желтого золота", "colorName": "", "description": "желтое золото 585 пробы, на кольце невесты вставка из 4 бриллиантов", "price": 870}, ' +
                            '{"id": "rings_2", "thumbLink": "image/rings/rings_2.jpg", "categoryName": "ringsCatalog", "name": "кольца из красного золота", "colorName": "", "description": "красное золото 585 пробы, на кольце невесты линия из 9 бриллиантов", "price": 1640}, ' +
                            '{"id": "rings_3", "thumbLink": "image/rings/rings_3.jpg", "categoryName": "ringsCatalog", "name": "кольца из желтого золота и платины", "colorName": "", "description": "желтое золото 585 пробы и платина, на кольце невесты вставка из 32 бриллиантов", "price": 2350},' +
                            
                            '{"id": "bouquet_pink_1", "thumbLink": "image/bouquets/bouquet_pink_1.jpg", "categoryName": "bouquetCatalog", "name": "розовый букет", "colorName": "pink", "description": "нежная розовая кустовая роза, пионовидная белая роза", "price": 87}, ' +
                            '{"id": "bouquet_orange_1", "thumbLink": "image/bouquets/bouquet_orange_1.jpg", "categoryName": "bouquetCatalog", "name": "оранжевый букет", "colorName": "orange", "description": "яркая оранжевая роза, белая фрезия, красные ягоды", "price": 95}, ' +
                            '{"id": "bouquet_red_2", "thumbLink": "image/bouquets/bouquet_red_2.jpg", "categoryName": "bouquetCatalog", "name": "красный букет", "colorName": "red", "description": "красная роза, белая роза, розовая кустовая роза, красные ягоды", "price": 99}, ' +                          
                            '{"id": "bouquet_cream_1", "thumbLink": "image/bouquets/bouquet_cream_1.jpg", "categoryName": "bouquetCatalog", "name": "кремовый букет", "colorName": "cream", "description": "кремовая роза, белая кустовая роза, белая фрезия, черемуха, зеленые ягоды", "price": 105}, ' +
                            '{"id": "bouquet_red_1", "thumbLink": "image/bouquets/bouquet_red_1.jpg", "categoryName": "bouquetCatalog", "name": "кремовый букет", "colorName": "red", "description": "красная и белая кустовая роза, белая фрезия", "price": 111}, ' +                         
                            '{"id": "bouquet_lilak_1", "thumbLink": "image/bouquets/bouquet_lilak_1.jpg", "categoryName": "bouquetCatalog", "name": "сиреневый букет", "colorName": "lilak", "description": "сиреневая и белая фрезия, кремовая роза", "price": 117}, ' +                            
                            '{"id": "bouquet_white_1", "thumbLink": "image/bouquets/bouquet_white_1.jpg", "categoryName": "bouquetCatalog", "name": "белый букет", "colorName": "white", "description": "крупная белая роза, белая кустовая роза, белая фрезия, стразы", "price": 125},' +
                            
                            
                            '{"id": "accessory_red_1", "thumbLink": "image/accessories/accessory_red_1.jpg", "categoryName": "accessoryCatalog", "name": "аксессуары в красных тонах", "colorName": "red", "description": "2 бокала, комплект свечей, 2 бутылки шампанского", "price": 100}, ' +
                            '{"id": "accessory_red_2", "thumbLink": "image/accessories/accessory_red_2.jpg", "categoryName": "accessoryCatalog", "name": "аксессуары в красных тонах", "colorName": "red", "description": "комплект свечей, ножик и лопатка для торта, обложка на свидетельство, сундучек, подвязка, подушечка, корзина", "price": 170}, ' +
                            '{"id": "accessory_red_3", "thumbLink": "image/accessories/accessory_red_3.jpg", "categoryName": "accessoryCatalog", "name": "аксессуары в красных тонах", "colorName": "red", "description": "2 бокала, комплект свечей, 2 бутылки шампанского, подвязка, подушечка, сундучек", "price": 185}, ' +
                            '{"id": "accessory_lilak_1", "thumbLink": "image/accessories/accessory_lilak_1.jpg", "categoryName": "accessoryCatalog", "name": "аксессуары в сиреневых тонах", "colorName": "lilak", "description": "2 бокала, комплект свечей, подушечка для колец, букет-дубликат", "price": 190}, ' +
                            '{"id": "accessory_lilak_2", "thumbLink": "image/accessories/accessory_lilak_2.jpg", "categoryName": "accessoryCatalog", "name": "аксессуары в темно-сиреневых тонах", "colorName": "lilak", "description": "2 бокала, комплект свечей, подушечка для колец, подвязка, сундучек, обложка на свидетельство", "price": 205}, ' +
                            '{"id": "accessory_pink_1", "thumbLink": "image/accessories/accessory_pink_1.jpg", "categoryName": "accessoryCatalog", "name": "аксессуары в розовых тонах", "colorName": "pink", "description": "2 бокала, 2 бутылки шампанского, комплект свечей, обложка на свидетельство, книга пожеланий, корзина, букет-дубликат", "price": 310}' +
 
 
 
 
 
 
                      ']';
