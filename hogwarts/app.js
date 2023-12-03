// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};
  
//   console.log($)

$(() => {
	// put jQuery in here

//***************************************** */
// YEAR 1
//***************************************** */

    const $container = $("#container")
    // console.log($container)
    const $h1 = $("<h1>")
    $h1.text("Hogwarts")
    $container.append($h1)

//***************************************** */
// YEAR 2
//***************************************** */

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

//***************************************** */
// YEAR 3
//***************************************** */

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
    $ul.append($li6)

//***************************************** */
// YEAR 4
//***************************************** */

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
  
//***************************************** */
// YEAR 5
//***************************************** */

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

//***************************************** */
// YEAR 6
//***************************************** */

// Nosey roommate alert! hide (use jQuery method hide) to hide all your belongings with a class of secret (give an argument of 'slow' - to see this function in action)
// Nosey roommate falls asleep 2 seconds later (chain the jQuery method delay on your hide method (give argument of at least 2000) to prevent showing your secret elements too soon.
// Use jQuery method show to reveal all of your belongings with a class of secret (give an argument of 'slow' - to see this function in action)
$(".secret").hide("slow").delay(2000).show("slow")

// Accident! You transmogrified your pet's leash into half cabbage
$li5.text("half cabbage")

// add the class cabbage to your pet's leash. Do not replace your pet's leash's original class. Your pet, which also has the same class should remain unaffected
$li5.addClass("cabbage")


// Fix your pet's leash by removing the class of cabbage (be sure to keep your pet's leash's original class)
$li5.removeClass("cabbage")


//***************************************** */
// YEAR 7
//***************************************** */

// Update your class schedule to read 'Fall 2018'
$h5.text("Fall 2018")
// Celebrate by buying more butter beer! Append a list item with the text 'Butter beer' as the first list item inside your unordered list with the value of trunk
const $linew = $("<li>").text("Butter beer")
$li2.before($linew)
// Whoops! You broke your trunk when you stood on it while singing karaoke. Get a new storage container for your stuff; replace the unodered list's property of trunk with a new property of chest
$ul.removeAttr("storage", "trunk").attr("storage", "chest")
// Add some CSS to your page. Feel free to experiment and make this page your own
// Take a screenshot of your page and add it to your homework folder
});