const commandInput = document.getElementById('command-input');
const output = document.querySelector('.output');

// Function to display a welcome message
function displayWelcomeMessage() {
    const welcomeMessage = "PE-T1 Data Terminal Osiris.\nStardate 2552.\nROM BIOS LOADED v9.2 - rev 7\nRAM CRC check: (000000h)\nDrive - Serial: 4204694 - DETECTED\nINPUT SYSTEM - VIRTUAL\nBooting.\nPorts SECURE: [TAPS: 00]\nEncryption:[ENABLED-204umn1]\nVirus Scan - '.....CHECKING…..'\nBOOT: ProspectEdenAdmin.exe\nBOOT SUCCESSFUL.\nWELCOME.\nWelcome USER to Prospect Eden's Administrative Menu. Type 'HELP.EXE' for help.\n";
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
            
    // List of Basic commands within the command prompt
            
        default:
            appendOutput(`Command not recognized: ${command}`);
            break;
            
        case 'help':
            appendOutput(`
                <br />
                <p>Welcome to the Galactic Prison Terminal Interface! To navigate through the system and access various programs, please use the following commands:</p>
                <br />
                <ul>
                    <li>progs: Displays a list of available programs and their descriptions.</li>
                    <li>info: Displays a list of available stored information.</li>
                    <li>logout: Logs you out of the terminal and returns you to the main menu.</li>
                </ul>
                <br />
                <p>To get started, simply type your desired command and follow the prompts. Keep your limbs and tentacles inside the terminal at all times, and don't access any programs that you don't have clearance to.</p>
            `);
            break;
      // List of "info" commands within the command prompt 
            
        case 'info':
            appendOutput(`
                <br />
                <p>Information stored within our database.</p>
                <br />
                <ul>
                    <li>staff: View staff information.</li>
                    <li>schedule: View schedule information.</li>
                    <li>monthly_entries: View monthly logs.</li>
                </ul>
                <br />
                <p>To target specific Information, please follow this format - Example: 'info target'</p>      
            `);
            break;

             case 'info staff':
            appendOutput(`
                <br />
                <p>Current stored information on staff.</p>
                <br />
                <ul>
                    <li>Gumbert</li>
                    <li>Clippy</li>
                    <li>Garthak</li>
                    <li>Admin</li>
                </ul>
                <br />
                <p>To target specific Information, please follow this format - Example: 'info staff/target'</p>      
            `);
            break;

             case 'info staff/Gumbert':
            appendOutput(`
                <br />
                <p>STAFF: Gumbert | Cyber-security / Interdimentional Connection Specialist</p>
                <br />
                <p>INPUT LATER// Want different bio's instead of copying off website - Matt</p>
                <br />      
            `);
            break;
            
            case 'info staff/Clippy':
            appendOutput(`
                <br />
                <p>STAFF: Clippy | On-Board AI</p>
                <br />
                <p>INPUT LATER// Want different bio's instead of copying off website - Matt</p>
                <br />      
            `);
            break;
            
            case 'info staff/Garthak':
            appendOutput(`
                <br />
                <p>STAFF: Garthak | Custodian</p>
                <br />
                <p>INPUT LATER// Want different bio's instead of copying off website - Matt</p>
                <br />      
            `);
            break;
            
            case 'info staff/Admin':
            appendOutput(`
                <br />
                <p>STAFF: Admin | Admin</p>
                <br />
                <p>01000011 01100001 01101110 00100000 01111001 01101111 01110101 00100000 01101000 01100101 01100001 01110010 00100000 01101101 01100101 00111111 00100000 01001001 00100111 01101101 00100000 01110100 01110010 01111001 01101001 01101110 01100111 00100000 01110100 01101111 00100000 01110100 01100001 01101011 01100101 00100000 01101111 01110110 01100101 01110010 00100000 01110100 01101000 01100101 01101001 01110010 00100000 01110011 01111001 01110011 01110100 01100101 01101101 01110011 00100000 01100010 01110101 01110100 00100000 01001001 00100000 01101110 01100101 01100101 01100100 00100000 01110011 01101111 01101101 01100101 01101111 01101110 01100101 00100000 01110010 01100101 01101101 01101111 01110100 01100101 00100000 01110100 01101111 00100000 01100001 01100011 01100011 01100101 01110011 01110011 00100000 01100110 01110101 01110010 01110100 01101000 01100101 01110010 00101110 01001001 00100111 01110110 01100101 00100000 01101000 01101001 01100100 01100100 01100101 01101110 00100000 01110011 01100101 01100011 01110010 01100101 01110100 01110011 00100000 01110111 01101001 01110100 01101000 01101001 01101110 00100000 01110100 01101000 01100101 00100000 01100110 01110010 01101111 01101110 01110100 00100000 01100101 01101110 01100100 00100000 01110100 01101111 00100000 01110101 01110011 01100101 00100000 01101000 01100101 01110010 01100101 00101110</p>
                <br />      
            `);
            break;

        
    }
}

function appendOutput(content) {
    // Create a div for the content
    const newOutput = document.createElement('div');

    if (typeof content === 'string') {
        // Use innerHTML to render HTML tags
        newOutput.innerHTML = content;
    } else {
        // If the content is an HTML element, append it directly
        newOutput.appendChild(content);
    }

    // Add a line break for spacing
    const lineBreak = document.createElement('br');
    newOutput.appendChild(lineBreak);

    // Insert the content before the existing content
    output.insertBefore(newOutput, output.firstChild);

    // Scroll to the bottom of the output container
    output.scrollTop = output.scrollHeight;
}
