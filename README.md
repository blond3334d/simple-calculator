# CalculADE
The final output for The Odin Project's foundations course, applying the core fundamentals of HTML, CSS, and JavaScript.

## Features
* **Calculate:** Obviously! This calculator performs the four basic arithmetic operations: addition, subtraction, multiplication, and division.
* **Button/Click Driven:** Functions based on click events. It gets inputs from user interaction by clicking the buttons on the screen.
* **Keyboard Support:** To be added soon.

## Concepts Applied
* **CSS Grid:** Mainly used for layouting the buttons. I used `grid-template-columns` to divide the buttons into clean columns while making sure they perfectly cover the width of the calculator body.
* **JS DOM & Event Listeners:** These concepts are responsible for linking my HTML and JavaScript together so the buttons actually do something.
* **Objects:** I used an object to group the 3 main variables (`firstOperand`, `currentOperator`, `secondOperand`) for easier access and cleaner value reassignments. I also used objects to map the math operations, making the code way more efficient and styled.
* **State Management:** This is something I learned along the way through extra research, especially when I got stuck making the calculator chain operations correctly. This concept is all about handling data and making sure the internal variables are perfectly updated and synchronized with what the user sees on the screen.

## Takeaways
* I realized it is best to separate the button click events from the actual math logic we want to execute. In my initial code, the click event block was stacked with too many conditional statements. Aside from being hard to read and debug, sometimes it just didn't work the way I wanted it to. Now that I separated the conditions and put them into their own functions, the workflow is much clearer and everything works properly!

