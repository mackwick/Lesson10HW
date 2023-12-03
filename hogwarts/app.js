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

    // Make a table
    const $body = $("body")
    const $table = $("<table>")
    $body.append($table)
    // Right above your table add an h5 that says 'Spring 2017'
    const $h5 = $("<h5>").text("Spring 2017")
    $table.before($h5)
    // Inside the table add a thead element
    const $thead = $("<thead>")
    $table.append($thead)
    // Inside the thead element add two th elements
    const $th1 = $("<th>")
    const $th2 = $("<th>")
    $thead.append($th1, $th2)
    // in the first th add the text Day
    $th1.text("Day")
    // in the second th add the text Classes
    $th2.text("Classes")
    // Create a tr element and add two td elements inside.
    const $tr = $("<tr>")
    $table.append($tr)
    const $td1 = $("<td>")
    const $td2 = $("<td>")
    $tr.append($td1, $td2)
    // in the first td add the day Monday
    $td1.text("Monday")
    // in the second td add the classes you are taking ( Herbology, Divination, History of Magic, Charms, Potions, Transfiguration, Defense Against the Dark Arts, Quidditch practice, etc.)
    $td2.text("Herbology, Potions, Charms, Care of Magical Creatures, Quidditch practice")
    // Create more tr elements with tds inside so that you have Monday - Friday and classes each of those days
    const $tr2 = $("<tr>")
    $table.append($tr2)
    const $tdtues = $("<td>").text("Tuesday")
    const $tdtuesClass = $("<td>").text("Transfiguration, Divination, History of Magic, Defense Against the Dark Arts")
    $tr2.append($tdtues, $tdtuesClass)
   
    const $tr3 = $("<tr>")
    $table.append($tr3)
    const $tdwed = $("<td>").text("Wednesday")
    const $tdwedClass = $("<td>").text("Herbology, Potions, Charms, Care of Magical Creatures, Quidditch practice")
    $table.append($tdwed, $tdwedClass)

    const $tr4 = $("<tr>")
    $table.append($tr4)
    const $tdthur = $("<td>").text("Thursday")
    const $tdthurClass = $("<td>").text("Transfiguration, Divination, History of Magic, Defense Against the Dark Arts")
    $table.append($tdthur, $tdthurClass)
  
    const $tr5 = $("<tr>")
    $table.append($tr5)
    const $tdfri = $("<td>").text("Friday")
    const $tdfriClass = $("<td>").text("Herbology, Potions, Study Hour, Charms")
    $table.append($tdfri, $tdfriClass)
    

    // Break your wand! (select the element that contains your wand and remove it)
    $h42.remove()
    // Class was hard! Drink all your butter beer! (remove just the butter beer from your list)
    $li1.remove()
    // Get a new wand (add the same element back with new text describing your new wand. Be sure to insert it after your pet in the DOM)
    const $h43 = $("<h4>").text("Holly with mermaid scales")
    $container.append($h43)
    // Make your new wand stand out by adding a color of indigo (or whatever color you like). But do it with magic (jQuery): Don't add this css in your main.css file
    $h43.css("color", "purple")
    // Send your pet on a spy mission (remove your pet from the DOM, put it somewhere else in your HTML). Make sure your pet's leash stays in your trunk (list item with the same class as your pet inside unordered list)
    $head = $("head")
    $head.append($h4)
    // Have your pet come back (remove your pet from the DOM, put it back in its original location)
    $h3.after($h4)
});