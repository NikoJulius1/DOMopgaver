
//Task 1
//======= Write JavaScript below that logs:
   // 1. all the "p" element nodes of the document,
  //  --> should log a list of nodes with a length of 6
const paragraphs = document.querySelectorAll("p")
console.log(paragraphs);

   // 2. the first div element node
 //--> should log the ".site-header" node

const siteHeader = document.querySelector("div")
console.log(siteHeader);

   // 3. the element with id "jumbotron-text"
   // --> should log the "#jumbotron-text" node
const jumbotron = document.querySelector("#jumbotron-text")
console.log(jumbotron)

  //  4. all the "p" elements of contained inside  the .primary-content element node
  //  --> should log a list of nodes with a length of 3
const primary = document.querySelectorAll(".primary-content p")
console.log(primary)

//*/


/*
Task 2
======
When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
 const knap = document.querySelector("#alertBtn")
knap.addEventListener("click", function() {
 alert("thanks for visiting bikes for refugees!");
} )

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
const farve = document.querySelector("#bgrChangeBtn")
farve.addEventListener("click", function() {
    document.querySelector("body").style.backgroundColor = 'red'
})

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
//const readMore = document.querySelector("#addTextBtn")
//readMore.addEventListener("click", function() {
  //  (readMore.insertAdjacentHTML('afterend', `<p>Tilføjet tekst</p>`))
//})


/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
const tekst = document.querySelector("#largerLinksBtn")
tekst.addEventListener("click", function() {
   const aTag = document.querySelectorAll("a");
for (a of aTag) {
    a.style.fontSize = '200%';
}
})

// Task 6
const tilføj = document.querySelector("#addArticleBtn");
const tekstFelt = document.querySelector(".addArticle");

tilføj.addEventListener("click", function() {
    const inputValue = tekstFelt.value;

    if (inputValue) {
        tekstFelt.insertAdjacentHTML('afterend', `<ul><li>${inputValue}</li></ul>`);
        tekstFelt.value = '';
    }
});

