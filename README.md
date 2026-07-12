# CalculADE
<img width="1908" height="1042" alt="Screenshot 2026-07-13 010106" src="https://github.com/user-attachments/assets/b6866816-367b-46a4-9bd5-fcda238b1515" />
The final output for The Odin Project's foundations course, applying the core fundamentals of HTML, CSS, and JavaScript.

[Live Demo]()

## Features
* **Calculate:** Obviously! This calculator performs the four basic arithmetic operations: addition, subtraction, multiplication, and division.
* **Button/Click Driven:** Functions based on click events. It gets inputs from user interaction by clicking the buttons on the screen.
* **Keyboard Support:** Retrieves inputs from the user's keyboard interaction, restricting other keys aside from numbers and operator symbols.

## Concepts Applied
* **CSS Grid:** Mainly used for layouting the buttons. I used `grid-template-columns` to divide the buttons into clean columns while making sure they perfectly cover the width of the calculator body.
* **JS DOM & Event Listeners:** These concepts are responsible for linking my HTML and JavaScript together so the buttons actually do something.
* **Objects:** I used an object to group the 3 main variables (`firstOperand`, `currentOperator`, `secondOperand`) for easier access and cleaner value reassignments. I also used objects to map the math operations, making the code way more efficient and styled.
* **State Management:** This is something I learned along the way through extra research, especially when I got stuck making the calculator chain operations correctly. This concept is all about handling data and making sure the internal variables are perfectly updated and synchronized with what the user sees on the screen.
* **Keyboard Events:** This makes the keyboard functionality possible. It updates and synchronizes data by listening to the user's keyboard interaction. Along the way, I learned about the two main events, `keydown` and `keyup`, as well as the now obsolete `keypress`.
* **RegEx (Regular Expressions):** This is something I learned through extra research to restrict the program from reading any keys except the ones needed for the calculator to operate. I used the `replace()` method combined with RegEx to completely strip away and erase all alphabetical letters and irrelevant symbols, leaving only the valid inputs.

## Takeaways
* I realized it is best to separate the button click events from the actual math logic we want to execute. In my initial code, the click event block was stacked with too many conditional statements. Aside from being hard to read and debug, sometimes it just didn't work the way I wanted it to. Now that I separated the conditions and put them into their own functions, the workflow is much clearer and everything works properly!

