// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};
  
//   console.log($)

$(() => {
	// put jQuery in here
    const $container = $("#container")
    // console.log($container)
    const $h1 = $("<h1>")
    $h1.text("Hogwarts")
    $container.append($h1)

    // h2 element with your name
    const $h2 = $("<h2>").text("Mackenzie Wicker")
    $container.append($h2)
    // h3 element with your house (Hufflepuff, Gryffindor, Ravenclaw or Slytherin )
    const $h3 = $("<h3>").text("Ravenclaw")
    $container.append($h3)
    // h4 element with your pet's name
     // this h4 element should have a class with a value of your pet type (owl, cat, toad, etc)
    const $h4 = $("<h4>").text("Loki").addClass("wolf")
    $container.append($h4)
    // h4 element with your wand (You can make it whatever you want. Need help coming up with one? Here is one of many websites to help you find your wand playbuzz.com )
    const $h42 = $("<h4>").text("Hawthorn with Dragon Heartstring Core")
    $container.append($h42)
    // In your main.css add an attribute of font-family: fantasy; to all elements that have a class that matches your pet's class

    const $ul = $("<ul>").attr("storage", "trunk")
    $container.append($ul)

    const $li1 = $("<li>").text("butter beer")
    $ul.append($li1)
    const $li2 = $("<li>").text("invisibility cloak").addClass("secret")
    $ul.append($li2)
    const $li3 = $("<li>").text("magic map").addClass("secret")
    $ul.append($li3)
    const $li4 = $("<li>").text("time turner").addClass("secret")
    $ul.append($li4)
    const $li5 = $("<li>").text("leash").addClass("wolf")
    $ul.append($li5)
    const $li6 = $("<li>").text("Berty Bott's Every Flavor Beans")




    
});