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
                    <li>gumbert</li>
                    <li>clippy</li>
                    <li>garthak</li>
                    <li>admin</li>
                </ul>
                <br />
                <p>To target specific Information, please follow this format - Example: 'info staff/target'</p>      
            `);
            break;

             case 'info staff/gumbert':
            appendOutput(`
                <br />
                <p>STAFF: Gumbert | Cyber-security / Interdimentional Connection Specialist</p>
                <br />
                <p>INPUT LATER// Want different bio's instead of copying off website - Matt</p>     
            `);
            break;
            
            case 'info staff/clippy':
            appendOutput(`
                <br />
                <p>STAFF: Clippy | On-Board AI</p>
                <br />
                <p>INPUT LATER// Want different bio's instead of copying off website - Matt</p>     
            `);
            break;
            
            case 'info staff/garthak':
            appendOutput(`
                <br />
                <p>STAFF: Garthak | Custodian</p>
                <br />
                <p>INPUT LATER// Want different bio's instead of copying off website - Matt</p>     
            `);
            break;
            
            case 'info staff/admin':
            appendOutput(`
                <br />
                <p>STAFF: Admin | Admin</p>
                <br />
                <p>01000011 01100001 01101110 00100000 01111001 01101111 01110101 00100000 01101000 01100101 01100001 01110010 00100000 01101101 01100101 00111111 00100000 01001001 00100111 01101101 00100000 01110100 01110010 01111001 01101001 01101110 01100111 00100000 01110100 01101111 00100000 01110100 01100001 01101011 01100101 00100000 01101111 01110110 01100101 01110010 00100000 01110100 01101000 01100101 01101001 01110010 00100000 01110011 01111001 01110011 01110100 01100101 01101101 01110011 00100000 01100010 01110101 01110100 00100000 01001001 00100000 01101110 01100101 01100101 01100100 00100000 01110011 01101111 01101101 01100101 01101111 01101110 01100101 00100000 01110010 01100101 01101101 01101111 01110100 01100101 00100000 01110100 01101111 00100000 01100001 01100011 01100011 01100101 01110011 01110011 00100000 01100110 01110101 01110010 01110100 01101000 01100101 01110010 00101110 01001001 00100111 01110110 01100101 00100000 01101000 01101001 01100100 01100100 01100101 01101110 00100000 01110011 01100101 01100011 01110010 01100101 01110100 01110011 00100000 01110111 01101001 01110100 01101000 01101001 01101110 00100000 01110100 01101000 01100101 00100000 01100110 01110010 01101111 01101110 01110100 00100000 01100101 01101110 01100100 00100000 01110100 01101111 00100000 01110101 01110011 01100101 00100000 01101000 01100101 01110010 01100101 00101110</p>    
            `);
            break;

            case 'info schedule':
            appendOutput(`
                <br />
                <p>Posted schedule information by quarters.</p>
                <br />
                <ul>
                    <li>q1</li>
                    <li>q2</li>
                    <li>q3</li>
                    <li>q4</li>
                </ul>
                <br />
                <p>To target specific Information, please follow this format - Example: 'info schedule/target'</p>
            `);
            break;

            case 'info schedule/q1':
            appendOutput(`
                <br />
                <p>---------------</p>
                <br />
                <ul>
                    <li>Week 1: Prisoner Orientation (Lecture on the Various Ways of Cosmic Torture)</li>
                    <li>Week 2: Group Sing-Along to "Galactic Groans" – The Prison Anthem</li>
                    <li>Week 3: "Get Lost in the Nebula" Maze Challenge (Prize: Extra Air Filtration)</li>
                    <li>Week 4: Intergalactic Gruel Appreciation Day (No Seconds Allowed)</li>
                    <li>Week 5: "Escape the Black Hole" Team Building Exercise</li>
                    <li>Week 6: "Zap 'Em Zorbits" Laser Tag Tournament (Stun Rays Only With One Random Prisoner Unknowingly Given Laser Rifle)</li>
                    <li>Week 7: Interplanetary Karaoke Night (Singing Off-Key Results in Isolation/Loss of Meals)</li>
                    <li>Week 8: "Wormhole Wipeout" Obstacle Course (with Extra Limb Binders)</li>
                    <li>Week 9: "Crystalline Confinement" Art Workshop (Using Only Space Dust)</li>
                    <li>Week 10: "Interstellar Puzzler" Challenge (Jigsaw Puzzles with Missing Pieces. Solve Within Time Allotment or Be Jettisoned)</li>
                    <li>Week 11+12: N/A</li>
                </ul>
                <br />
                <p>---------------</p>
            `);
            break;

            case 'info schedule/q2':
            appendOutput(`
                <br />
                <p>---------------</p>
                <br />
                <ul>
                    <li>Week 1: "Gravity Shuffle" Dance Competition (Performed in Zero-G)</li>
                    <li>Week 2: "Tales from the Cosmic Crypt" Spooky Story Contest. (If Story Doesn’t Scare, Prisoner Executed.)</li>
                    <li>Week 3: "Radiation Room Rally" Race (No Protective Suits Allowed)</li>
                    <li>Week 4: "Stellar Scraps" Meal Time (Dish Made from Space Junk To Cut Costs)</li>
                    <li>Week 5: "Astro Acrobatics" Showcase (Perform Stunts While Shackled)</li>
                    <li>Week 6: "Alien Language" Crash Course (Punishment for Incorrect Pronunciations)</li>
                    <li>Week 7: "Orbital Obedience" Drill (Go Outside For Space-Walking While Blindfolded on Unpredictable Orbits)</li>
                    <li>Week 8: "Vacuum Vortex" Vomit Comet Ride (Prize: Anti-Nausea Meds)</li>
                    <li>Week 9: "Gamma Ray Gala" Fancy Dress Ball (Suits Lined with Itchy Material)</li>
                    <li>Week 10: "Meteor Mayhem" Dodgeball Tournament (Meteors Made of Foam, Losing Team Goes Without Food for until Q3)</li>
                    <li>Week 11+12: Announce Bloodsport Tournament for Q3, Give Prisoners Time to Prepare</li>
                </ul>
                <br />
                <p>---------------</p>
            `);
            break;

            case 'info schedule/q3':
            appendOutput(`
                <br />
                <p>---------------</p>
                <br />
                <ul>
                    <li>Week 1: "Nebula Nonsense" Stand-Up Comedy Night (Bad Jokes Result in Solitary. Jokes About Facility Having Inhumane Living Conditions Result in Execution)</li>
                    <li>Week 2: "Galactic Gauntlet" Extreme Sports Day (Risk of Nebula Burns/Death)</li>
                    <li>Week 3: "Zero-G Zumba" Fitness Class (Performed While Wearing Gravity Boots That Randomly Turn off)</li>
                    <li>Week 4: "Plasma Pudding" Dessert Time (Taste: Questionable, Texture: Slimy, Poisonous: Possibly)</li>
                    <li>Week 5: "Starship Scavenger" Hunt (Find Hidden Objects Without Hands. If Caught Using Hands, Sever Hands)</li>
                    <li>Week 6: "UFO University" Educational Lectures (Subjects: Quantum Physics for Dummies)</li>
                    <li>Week 7: "Cosmic Court" Mock Trials (Prisoners Serve as Judge, Jury, and Executioner. If Found Guilty, Actually Execute)</li>
                    <li>Week 8: "Solar Flare" Chili Cook-Off (Judge: Gumbert)</li>
                    <li>Week 9: "Asteroid Archery" Contest (Asteroids: Soft and Pointy)</li>
                    <li>Week 10: "Escape Pod" Crafting Challenge (Kill Anyone That Makes a Convincing Escape Pod Because They Are Obviously Planning to Escape)</li>
                    <li>Week 11: Cancel Bloodsport Tournament, Intensify Security Due to VIP Arriving</li>
                    <li>Week 12: Reroute Security to Ensure VIP Remains Locked Up</li>
                </ul>
                <br />
                <p>---------------</p>
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
