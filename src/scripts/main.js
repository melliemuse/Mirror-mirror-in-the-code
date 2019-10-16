console.log("You're doing an amazing job!")

// The learning objective for this exercise is to listen for the keyup event, and update the DOM when it is broadcast.

// Create an input field in your DOM. Give it an id of message.

// Create two article elements with unique id values. Use Flexbox to display them in a row, each taking 50% of the width of the browser.



// Give each article a different border color.



// Write an event listener that listens for the keyup event on the input field.

const inputEl = document.querySelector('#message');


// The event handler function should update the textContent property of both sections

const articleEls = document.querySelectorAll('article');

const eventHandler = (domElement) => {
    let domElementArray = []
    for (let i = 0; i < domElement.length; i++) {
        domElement[i].textContent = inputEl.value;
        domElementArray.push(domElement[i])
    }
        return domElementArray;
}

inputEl.addEventListener('keyup', () => eventHandler(articleEls))