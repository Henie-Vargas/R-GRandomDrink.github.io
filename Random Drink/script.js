let allSyrups=[
       coffee= [
            'Almond',
            'Brown Sugar Cinnamon',
            'Butterscotch',
            'Caramel',
            'Salted Caramel',
            'Cheesecake',
            'Chocolate Fudge',
            'White Chocolate',
            'Cookie Dough',
            'Chocolate',
            'Cinnamon',
            'Cupcake',
            'Hazelnut',
            'English Toffee',
            'Toasted Marshmallow',
            'Vanilla',
            'Irish Cream',
            'Golden Tumeric',
            'Praline',
            'Caramel Apple Butter',
            'Tiramisu',
            'Maple',
            'Butter Pecan',
            'Toffee Nut',
            'Chocolate Macadamia Nut',
            'German Chocolate Cake',
            'Gingerbread',
            'Peppermint',
            'Pistachio',
            'Ube',
            'Lavender',
            'Blueberry',
            'Banana Cream',
            'Coconut'],
        sugarfree=[
            'SF Caramel',
            'SF Cookie Dough',
            'SF Chocolate',
            'SF Cinnamon',
            'SF English Toffee',
            'SF Toasted Marhmallow',
            'SF Vanilla',
            'SF Irish Cream',
            'SF Macadamia Nut',
            'SF Gingerbread',
            'SF Peppermint',
            'SF Coconut'],
        fruity=[
            'Lychee',
            'Apple',
            'Blue Raspberry',
            'Blueberry',
            'Blue Curacao',
            'White Peach',
            'Passion Fruit',
            'Rock Melon Cantaloupe',
            'Hibiscus',
            'Elderflower',
            'Cucumber',
            'Coconut',
            'Peach',
            'Mango',
            'Strawberry',
            'Strawberry Rose',
            'Raspberry',
            'Dessert Pear',
            'Green Apple',
            'Watermelon',
            'Lemon',
            'Lime',
            'Pineapple',
            'Sour Gummy Candy',
            'Orange',
            'Huckleberry',
            'Blackberry',
            'Guava',
            'Dragonfruit',
            'Kiwi',
            'Pear',
            'Cherry',
            'Ruby Red Grapefruit',
            'Pomegranate',
            'Cranberry',
            'Spicy Mango',
            'Chipotle Pineapple']
]
let allDrinks=[
    Caff=[
        'Americano',
        'Latte',
        'Machiato',
        'Mocha',
        'Cappuccino',
        'Cold Brew',
        'Shaken Expresso',
        'Frappe'],
    nonCaff=[
        'Lemonade',
        'Matcha',
        'Chai Latte',
        'Steamer',
        'Italian Soda',
    ]


]
 function getDrink(){document.getElementById('submit').innerHTML= "How about A/An...    "
}
//Random Syrups
    let randomCoffeeSyrup= allSyrups[0][Math.floor(Math.random()*coffee.length)];
    let randomSFSyrup= allSyrups[1][Math.floor(Math.random()*sugarfree.length)];
    let randomFruitySyrup= allSyrups[2][Math.floor(Math.random()*fruity.length)];

//Random Drinks
    let randomCaffDrink= allDrinks[0][Math.floor(Math.random()*Caff.length)];
    let randomNonCaffDrink= allDrinks[1][Math.floor(Math.random()*nonCaff.length)];
//Drink Combinations
function Random(){
    function getDrink()
        {return document.getElementById('submit')}
//Lotus
    if(document.getElementById('lotus-check').checked==true && document.getElementById('two-syrups').checked ==true){
        return getDrink().innerHTML= "How about A...    "+ allSyrups[2][Math.floor(Math.random()*fruity.length)] + ' & '+ allSyrups[2][Math.floor(Math.random()*fruity.length)]+ " Lotus?"
    }
    else if(document.getElementById('lotus-check').checked==true){
       return getDrink().innerHTML="How about A...    " + allSyrups[2][Math.floor(Math.random()*fruity.length)] + " Lotus?"
//Non Caff
    }else if(document.getElementById('noCaff').checked==true && document.getElementById('two-syrups').checked==true){
        return getDrink().innerHTML="How about A...    " + allSyrups[0][Math.floor(Math.random()*coffee.length)] +' & ' + allSyrups[0][Math.floor(Math.random()*coffee.length)] + ' ' +  allDrinks[1][Math.floor(Math.random()*nonCaff.length)] + '?'
    }else if(document.getElementById('noCaff').checked==true){
        return getDrink().innerHTML="How about A...    " + allSyrups[0][Math.floor(Math.random()*coffee.length)] + ' '+allDrinks[1][Math.floor(Math.random()*nonCaff.length)]+'?'
//Sugar Free
    }else if(document.getElementById('SF').checked==true && document.getElementById('two-syrups').checked==true){
        return getDrink().innerHTML="How about A...    " + allSyrups[1][Math.floor(Math.random()*sugarfree.length)] + ' & '+ allSyrups[1][Math.floor(Math.random()*sugarfree.length)] + ' ' + allDrinks[0][Math.floor(Math.random()*Caff.length)]+ '?'
    }else if(document.getElementById('SF').checked==true){
        return getDrink().innerHTML="How about A...    " + allSyrups[1][Math.floor(Math.random()*sugarfree.length)] + ' '+allDrinks[0][Math.floor(Math.random()*Caff.length)]+'?'
//Regular Coffee
    }else if(document.getElementById('two-syrups').checked==true){
        return getDrink().innerHTML="How about A...    " + allSyrups[0][Math.floor(Math.random()*coffee.length)]+ ' & ' + allSyrups[0][Math.floor(Math.random()*coffee.length)]+ ' ' + allDrinks[0][Math.floor(Math.random()*Caff.length)]+'?'
    }else{
        return getDrink().innerHTML="How about A...    " + allSyrups[0][Math.floor(Math.random()*coffee.length)]+ ' ' + allDrinks[0][Math.floor(Math.random()*Caff.length)]+'?'
    }
}





    
