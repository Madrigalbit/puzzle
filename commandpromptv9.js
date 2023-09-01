        document.addEventListener("DOMContentLoaded", function () {
            const input = document.getElementById("command-input");
            const output = document.querySelector(".output");

            const welcomeMessage = "Welcome to the Command Prompt!<br/>Type 'help' for available commands.<br/>";
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
