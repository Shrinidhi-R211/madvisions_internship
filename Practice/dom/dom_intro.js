// DOM (Document Object Model): A programming interface that represents an HTML document as a tree of objects, allowing JavaScript to access and modify its structure, content, and attributes, and respond to events.



        const heading = document.getElementById("heading");

        const button = document.getElementById("changeBtn");

        const revert = document.getElementById("revertBtn");

        button.addEventListener("click", function (){
            heading.textContent = "Welcome To The Ultimate Platform to learn JS."
        });

        revert.addEventListener("click", function () {
            heading.innerHTML = "Hello JavaScript"
        })

        const container = document.getElementById("div1")

        console.log(document);
        console.log(document.documentElement);
        console.log(document.head);
        console.log(document.body);

        console.log(container.children);
        console.log(container.childNodes);



// // NOTES:
// // 1. What is the document object?
// // The document object represents the webpage's HTML document and provides methods and properties that JavaScript can use to access and manipulate it.

// // 2. Important properties of document.
// // a. document.title - Gets or changes the page's title.
// // b. document.URL - Returns the URL of the current document.
// // c. document.body - Returns the document's <body> element.
// // d. document.head - Returns the document's <head> element.


// // DOM Manipulation Properties :
// // 1. textContent - Reading and modifying the text inside the given element.
// // 2. innerHTML - Same as textContent but the only difference is that the innerHTML property can recognize the html elements, And perform the operation of HTML elements. 

// // for example: Let us consider the two paragraphs inside div2 class in gom_intro.html, and try to manipulate it using dom manipulation properties.

const message = document.getElementById("div2p1");
const message2 = document.getElementById("div2p2");

const message3 = document.getElementById("div3p1");
const message4 = document.getElementById("div3p2");

// // now let us perform the dom manipulation properties on all the variables.

message.textContent = "Welcome to new heading."
message2.textContent = "Adding new heading using <strong>textContent</strong> property."

message3.innerHTML = "Welcome to new heading, from innerHTML property."
message4.innerHTML = "Adding new heading using <strong>innerHTML</strong> property."

// note : the difference between textContent and innerHTML is simple, both modify the elements text but, textContent modifies or replaces the content with literal text written inside the element, whereas innerHTML looks out for the tags inside the text while replacing the contents with parsed HTML.

// // innerHTML replaces the existing children.
const message5 = document.getElementById("div4");
message5.innerHTML = "Replaced both the existing headings with this message."

// // innerHTML can create nested elements.
const message6 = document.getElementById("div5");
message6.innerHTML = "<ul><li>HTML</li><li>JS</li></ul>";
