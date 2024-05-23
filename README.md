# Clone the repository:

git clone <repository link>
cd chatbot

## Install dependencies:

npm install


### Run the project: 

npm start

### Usage
Open the ChatBot:
Click on the chatbot icon located at the bottom right corner of the screen to open the chat window.

Send a Message:
Type your message in the input field and press "Send". The bot will respond based on predefined responses or generate a Google search link if the input is not recognized.

Close the ChatBot:
Click the "X" button in the chat window to close it.

### Customization
Add/Modify Responses:
Modify the mockApiResponse function to add or change the bot's responses to specific user inputs.

Change Styles:
Update the Tailwind CSS classes in the JSX to customize the appearance of the chat window and messages.

### Test chatbot with below examples:

 user: "hello"
 bot: Hello! I'm a bot here to assist you. You can ask me about programming languages, web development, and more. For example, try asking "What is JavaScript?"

 user: "what is javascript?"
 bot: JavaScript is a programming language commonly used in web development. Learn more at https://developer.mozilla.org/en-US/docs/Web/JavaScript.

default case:
It generates google link with entered string, like if user have entered "test".
the bot will reply- https://www.google.com/search?q=test
 
