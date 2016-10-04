var socialItems= document.querySelector(".social_items");
var items= socialItems.getElementsByTagName('DIV');
console.log(socialItems);
//function()
for (var i = items.length-1; i>=0; i--) {
 socialItems.appendChild(items[i]);
};
console.log(items[0]);
console.log(items[1]);
console.log(items[2]);
console.log(items[3]);
console.log(items[4]);

// var first = document.getElementById("social_items_id").children[0];
// var last = document.getElementById("social_items_id").children[1];

  
//   document.getElementById("social_items_id").insertBefore(last, first);


