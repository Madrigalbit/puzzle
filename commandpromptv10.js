        document.addEventListener("DOMContentLoaded", function () {
            const input = document.getElementById("command-input");
            const output = document.querySelector(".output");

            output.innerHTML = "PE-T1 Data Terminal Osiris.<br />Stardate 2552.<br />ROM BIOS LOADED v9.2 - rev 7<br />RAM CRC check: (000000h)<br />Drive - Serial: 4204694 - DETECTED<br />INPUT SYSTEM - VIRTUAL<br />Booting.<br />Ports SECURE: [TAPS: 00]<br />Encryption:[ENABLED-204umn1]<br />Virus Scan - '.....CHECKING…..'<br />BOOT: ProspectEdenAdmin.exe<br />BOOT SUCCESSFUL.<br />WELCOME.<br />Welcome USER to Prospect Eden's Administrative Menu. Type 'help' for help.<br />";
            let currentIndex = 0;

            function typeWelcomeMessage() {
                if (currentIndex < welcomeMessage.length) {
                    output.innerHTML += welcomeMessage.charAt(currentIndex);
                    currentIndex++;
                    setTimeout(typeWelcomeMessage, 50); // Adjust typing speed here
                }
            }

            typeWelcomeMessage(); // Start typing the welcome message

            input.addEventListener("keyup", function (event) {
                if (event.key === "Enter") {
                    const command = input.value.toLowerCase().trim();
                    input.value = ""; // Clear the input field

                    // Handle different commands and display responses
                    switch (command) {
                        case "help":
                            output.innerHTML += "Available commands:<br/>- help: Show available commands<br/>- date: Display current date<br/>- clear: Clear the screen<br/>";
                            break;

                        case "date":
                            const currentDate = new Date();
                            const formattedDate = currentDate.toLocaleString();
                            output.innerHTML += `Current date and time: ${formattedDate}<br/>`;
                            break;

                        case "clear":
                            output.innerHTML = "";
                            typeWelcomeMessage(); // Re-type the welcome message after clearing
                            break;

                        default:
                            output.innerHTML += `Command not recognized: ${command}<br/>`;
                    }
                }
            });
        });
