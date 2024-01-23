var reasons=[
    " Provides Oxygen",
    " Gives Shade",
    " Makes Fruits",
    " Helps the Environment",
    " Conserves water"
]
var details=[
  "Trees provide Oxygen, this is detrimental to our ability of breathing air. It helps us to breathe more oxygen than carbon dioxide. Did you know that one tree provides oxygen for four people? This is a good reason to not cut down the trees. Trees are very important to people and we should take care of the trees.",
  "Trees give us shade. When it is really hot outside, and you are outside, you might choose to sit underneath a tree. This is because trees provides shade to us and many types of animals. Did you know that some animals make their dens underneath or in trees because of their benefits? That is why you shouldn't cut down trees.",
  "Trees can grow fruits on them. Some of the yummiest fruits you eat, including apples are grown on trees. Once the apples are ripe, you can pick them, or they will fall down the tree with a fresh taste. If you love fruits, then why do you cut down trees? If you do, you will have no more apples, then you will be sad",
  "Trees help the environment because they provide food for the animals, and they can also create shelter for all the animals that make their dens underneath trees. In an area that has lots of trees, it will rain a lot, rain will give fresh water to plants and animals, and the tree will flourish.",
  "Trees are also very important because they are able to conserve water. Trees can take the water that lands on them, and it is stored in their roots in in the ground. This can help make aquifers and it can make small streams. These will form on the ground and might become lakes or river someday."
]
var images = [
  "pic1.jpeg",
  "pic2.jpeg",
  "pic3.jpeg",
  "pic4.jpeg",
  "pic5.jpeg"
  
]
  
var i=0;
  
function changeScreen(){
  document.getElementById("subtitle").innerHTML=reasons[i];
  document.getElementById("reason1").innerHTML=details[i];
  document.getElementById("picture1").src=images[i];
  document.getElementById("backgroundMusic").play()
  i=i+1;

  if(i>4){
    i=0
  }
}