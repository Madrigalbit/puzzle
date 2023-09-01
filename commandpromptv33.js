const commandInput = document.getElementById('command-input');
const output = document.querySelector('.output');

// Function to display a welcome message
function displayWelcomeMessage() {
    const welcomeMessage = "Welcome to the Command Prompt!\nType 'help' to see available commands.";
    const messageLines = welcomeMessage.split('\n');
    
    messageLines.forEach(line => {
        appendOutput(line); // No need to create a new div for each line
    });
}

// Call the function to display the welcome message when the page loads
window.addEventListener('load', displayWelcomeMessage);

commandInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const command = commandInput.value;
        commandInput.value = '';

        // Display the entered command in the output area
        appendOutput(`> ${command}`);

        // Handle the command and provide a response here
        handleCommand(command);
    }
});

function handleCommand(command) {
    // You can implement your command handling logic here
    // For example, you can check the command and provide a response

    // Sample commands and responses
    switch (command.toLowerCase()) {
        case 'hello':
            appendOutput('Hello, world!');
            break;
        case 'date':
            const currentDate = new Date();
            appendOutput(currentDate.toDateString());
            break;
        case 'help':
            const helpMessage = "Available commands:\n- hello: Displays a greeting.\n- date: Displays the current date.";
            appendOutput(helpMessage);
            break;
        default:
            appendOutput(`Command not recognized: ${command}`);
            break;
    }
}

function appendOutput(content) {
    // Create a div for the content
    const newOutput = document.createElement('div');

    // If the content is a string, set it as text content
    if (typeof content === 'string') {
        content.split('\n').forEach(line => {
            if (line.trim() !== '') {
                // Create a div for each non-empty line
                const lineDiv = document.createElement('div');
                lineDiv.textContent = line;
                newOutput.appendChild(lineDiv);
            } else {
                // Add an empty line for empty lines in the content
                const emptyLine = document.createElement('div');
                emptyLine.textContent = '';
                newOutput.appendChild(emptyLine);
            }
        });
    } else {
        // If the content is an HTML element, append it directly
        newOutput.appendChild(content);
    }

    // Add an empty line as a separator
    const emptyLine = document.createElement('div');
    emptyLine.textContent = '';
    newOutput.appendChild(emptyLine);

    // Insert the content before the existing content
    output.insertBefore(newOutput, output.firstChild);

    // Scroll to the bottom of the output container
    output.scrollTop = output.scrollHeight;
}
