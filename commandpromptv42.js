const commandInput = document.getElementById('command-input');
const output = document.querySelector('.output');

// Function to display a welcome message
function displayWelcomeMessage() {
    const welcomeMessage = "PE-T1 Data Terminal Osiris.\nStardate 2552.\nROM BIOS LOADED v9.2 - rev 7\nRAM CRC check: (000000h)\nDrive - Serial: 4204694 - DETECTED\nINPUT SYSTEM - VIRTUAL\nBooting.\nPorts SECURE: [TAPS: 00]\nEncryption:[ENABLED-204umn1]\nVirus Scan - '.....CHECKING…..'\nBOOT: ProspectEdenAdmin.exe\nBOOT SUCCESSFUL.\nWELCOME.\nWelcome USER to Prospect Eden's Administrative Menu. Type 'help' for help.\n";
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
        case 'help':
            appendOutput('\nWelcome to the Galactic Prison Terminal Interface! To navigate through the system and access various programs, please use the following commands:\n\n● LIST.PROGS: Displays a list of available programs and their descriptions.\n● INFO [program_name]: Provides detailed information about the selected program.\n● LOGOUT: Logs you out of the terminal and returns you to the main menu.\nTo get started, simply type your desired command and follow the prompts. Keep your limbs and tentacles inside the terminal at all times, and dont access any programs that you dont have clearance to.\n');
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
        const lines = content.split('\n');
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim(); // Trim to handle empty lines
            if (line !== '') {
                const lineDiv = document.createElement('div');
                lineDiv.textContent = line;
                newOutput.appendChild(lineDiv);
            }
        }
    } else {
        // If the content is an HTML element, append it directly
        newOutput.appendChild(content);
    }

    // Create an empty line for spacing
    const spacingLine = document.createElement('div');
    spacingLine.style.height = '10px'; // Adjust the height for desired spacing

    // Insert the spacing line before the content
    output.insertBefore(spacingLine, output.firstChild);
    output.insertBefore(newOutput, spacingLine);

    // Scroll to the bottom of the output container
    output.scrollTop = output.scrollHeight;
}
