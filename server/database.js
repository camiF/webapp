var mongoose = require('mongoose');
var GroceryItem = require('./models/GroceryItem.js')

mongoose.connect('mongodb://localhost/grocery', function(){
    console.log("connected");
    
    mongoose.connection.db.dropDatabase();
    
     var items =[{

            name: 'Ice cream'
        },{
            name: 'waffles'
        },{
            name: 'candy',
            purchased: true
        },{
            name: 'snarks'
        }
        ];
    
    items.forEach(function(item){
        
        new GroceryItem(item).save();
    })
});