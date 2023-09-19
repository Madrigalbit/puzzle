const commandInput = document.getElementById('command-input');
const output = document.querySelector('.output');
let isPasswordEntered = false; // Initialize the password check variable
let isSecretPasswordEntered = false;
let listenCommandCount = 0;

const unlockPassword = "thedayirest";
const secretPassword = "CODEBREAKER01101100";
const commandConfig = {
    'progs admin_dir/segment_two': 'unlockPassword',
    'progs admin_dir/segment_three': 'secretPassword',// Requires the admin password
};
const randomMessages = [
    "A challenge lies ahead, but your determination will lead you to victory.",
    "Love is on the horizon; keep your heart open and let it in.",
    "Caution is advised; double-check before making decisions.",
    "Express yourself freely and see magic happen; be careful of consequences.",
    "Take a moment to reflect on your past; it holds the key to your future.",
    "Luck is on your side; expect unexpected windfalls.",
    "Trust your instincts; they will guide you through uncertain waters.",
    "Challenges may test you, but remember, you are stronger than you think.",
    "An impending betrayal may sting, but it will pave the way to the future.",
    "A journey of a thousand miles begins with a single step; start walking.",
    "Watch your health closely; an ominous force will jeopardize it in the near future.",
    "Your hard work will soon be recognized; success is within reach.",
    "Relationships flourish with patience and understanding; nurture them.",
    "You are trespassing somewhere you do not belong; choose your actions wisely.",
    "Beware of deceitful intentions; not everyone has your best interests at heart.",
    // Add more random messages as needed
];

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
    playAudio();
    
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

function playAudio() {
    const audio = new Audio('https://www.fesliyanstudios.com/play-mp3/649'); // Replace with your audio file URL
    audio.play(); // Play the audio
}
const playButton = document.getElementById('play-button'); // Add an HTML button with id="play-button"
playButton.addEventListener('click', playAudio); // Attach a click event listener to the play button


function handleCommand(command) {
    // Check if the entered command requires a password
    const requiredPassword = commandConfig[command.toLowerCase()];

    if (requiredPassword === 'adminPassword' && !isAdminPasswordEntered) {
        appendOutput("<p>Access denied. Please enter the admin password to unlock this command.</p>");
    } else if (requiredPassword === 'secretPassword' && !isSecretPasswordEntered) {
        appendOutput("<p>Access denied. Please enter the secret password to unlock this command.</p>");
    } else {
    switch (command.toLowerCase()) {
            
    // List of Basic commands within the command prompt
            
        default:
            appendOutput(`<br />Command not recognized: ${command}`);
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

            case 'warning':
            appendOutput(`
                <br />
                <p>Annihilators have friends in dark places, but so does Dogelon - M</p>
            `);
            break;

      // List of "progs" commands within the command prompt
            
            case 'progs':
            appendOutput(`
                <br />
                <p>Available programs stored within our database</p>
                <br />
                <ul>
                    <li>access: View security feeds</li>
                    <li>coinflip.exe: Test your fate with the invisible hand of chance...</li>
                    <li>admin_dir: Access different directorys(PASSWORD-PROTECTED)</li>
                </ul>
                <br />
                <p>To target specific Information, please follow this format - Example: 'progs target'</p>      
            `);
            break;

            case 'progs access':
            appendOutput(`
                <br />
                <p>Security live feeds available.</p>
                <br />
                <ul>
                    <li>mess_hall</li>
                    <li>rec_room</li>
                    <li>cells</li>
                    <li>vaults</li>
                    <li>vip</li>
                </ul>
                <br />
                <p>To target specific Information, please follow this format - Example: 'progs access/target'</p>      
            `);
            break;

            case 'progs coinflip.exe':
            appendOutput(`
                <br />
                <p>BOOT: AGESPAST.exe</p>
                <p>BOOT SUCCESSFUL.</p>
                <br />
                <p>THE COIN BEFORE YOU BEARS THE WEIGHT OF HISTORY IN ITS CORRODED GROOVES, A SILENT WITNESS TO AGES LONG PAST.</p>
                <br />
                <p>WHAT WILL YOU DO?</p>
                <br />
                <ul>
                    <li>flip</li>
                    <li>examine</li>
                    <li>leave</li>
                </ul>      
            `);
            break;

            case 'flip':
            appendOutput(`
                <br />
                <p>WITH A FLICK OF YOUR THUMB, THE RUSTY COIN SPINS THROUGH THE AIR, ITS BATTERED SURFACE REFLECTING FLEETING MOMENTS OF LIGHT - EONS IN AN INSTANCE.</p>
                <br />
                <p>IT LANDS.</p>
                <br />
                <p>……………………..</p>
                <br />
                <p>HEADS</p>   
            `);
            break;

            case 'examine':
            appendOutput(`
                <br />
                <p>THE OLD COIN IS LITTERED WITH SCRATCHES, INDENTS, AND WORN EDGES - A MONUMENT TO TIME. THE FATE OF MUCH HAS HINGED ON THIS ORDINARY OBJECT.</p>
            `);
            break;

            case 'leave':
            appendOutput(`
                <br />
                <p>YOU WALK AWAY FROM THE COIN.</p>
            `);
            break;

            case 'progs admin_dir':
            appendOutput(`
                <br />
                <p>Access another directory.</p>
                <br />
                <ul>
                    <li>segment_two</li>
                    <li>segment_three</li>
                </ul>
                <p>To target a specific directory, please follow this format - Example: 'progs admin_dir/segment_two'</p>
            `);
            break;
            
            case 'progs admin_dir/segment_two':
             if (!isPasswordEntered) {
                    appendOutput("<p>Access denied. Please enter the correct password to view segment.</p>");
                } else {
                    appendOutput(`
                    <br />
                    <p>Accessing…</p>
                    <br />
                    <p>Accessing…</p>
                    <br />
                    <p>Permission Granted.</p>
                    <br />
                    <p>Accessible new commands:</p>
                    <br />
                    <ul>
                    <li>wanted_posters</li>
                    <li>incident_reports</li>
                    <li>maintenance_req</li>
                    <li>fortune</li>
                    <li>letters</li>
                    </ul>
                    <br />
                    `);
                }
                break;

            case 'progs admin_dir/segment_three':
             if (!isPasswordEntered) {
                    appendOutput("<p>Access denied. Please enter the correct password to view segment.</p>");
                } else {
                    appendOutput(`
                    <br />
                    <p>Accessing…</p>
                    <br />
                    <p>Accessing…</p>
                    <br />
                    <p>Permission Granted.</p>
                    <br />
                    <p>Accessible new commands:</p>
                    <br />
                    <ul>
                    <li>security</li>
                    <li>lore</li>
                    <li>listen</li>
                    <li>communications</li>
                    </ul>
                    <br />
                    `);
                }
                break;
            
            case 'thedayirest': // Replace "yourpassword" with the actual password
                isPasswordEntered = true; // Set the password as entered
                appendOutput("<br /><p>Password accepted. You can now access segment_two...</p>");
                break;

            case 'CODEBREAKER01101100': // Replace "yourpassword" with the actual password
                isPasswordEntered = true; // Set the password as entered
                appendOutput("<br /><p>Password accepted. You can now access segment_three...</p>");
                break;

            case 'progs fortune':
            const randomIndex = Math.floor(Math.random() * randomMessages.length);
            const randomMessage = randomMessages[randomIndex];
            appendOutput(`<br /><p>${randomMessage}</p>`);
            break;

            case 'progs listen':
            if (listenCommandCount < 3) {
                const randomChance = Math.random();
                if (randomChance <= 0.05) {
                    appendOutput(`
                    <br />
                    <p>LOOKING FOR PINGS…</p>
                    <br />
                    <p>LOOKING…</p>
                    <br />
                    <p>LOOKING…</p>
                    <br />
                    <p>FOUND.</p>
                    <p>TRANSMISSION INCOMING:</p>
                    <br />
                    <p>IF YOU ARE ABLE TO HEAR THIS, YOU ARE ON THE RIGHT TRACK. THERE HAS TO BE A WAY TO DISMANTLE THE SECURITY THATS HOLDING THE VIP.</p>
                    <br />
                    `);
                } else {
                    appendOutput(`
                    <br />
                    <p>LOOKING FOR PINGS…</p>
                    <br />
                    <p>LOOKING…</p>
                    <br />
                    <p>LOOKING…</p>
                    <br />
                    <p>NO RESULTS.</p>
                    <br />
                    `);
                }
                listenCommandCount++;
            } else {
                appendOutput(`<p>Usage limit reached for "progs listen." You can only use it 3 times.</p>`);
            }
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
                <p>---------------------------------------------</p>
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
                <p>---------------------------------------------</p>
            `);
            break;

            case 'info schedule/q2':
            appendOutput(`
                <br />
                <p>---------------------------------------------</p>
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
                <p>---------------------------------------------</p>
            `);
            break;

            case 'info schedule/q3':
            appendOutput(`
                <br />
                <p>---------------------------------------------</p>
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
                <p>---------------------------------------------</p>
            `);
            break;

            case 'info monthly_entries':
            appendOutput(`
                <br />
                <p>View Users most recent documented logs.</p>
                <br />
                <ul>
                    <li>02.12.2552</li>
                    <li>05.02.2552</li>
                    <li>08.20.2552</li>
                    <li>09.15.2552</li>
                    <li>09.19.2552</li>
                </ul>
                <br />
                <p>To target specific Information, please follow this format - Example: 'info monthly_entries/target'</p>
            `);
            break;

            case 'info monthly_entries/02.12.2552':
            appendOutput(`
                <br />
                <p>Entry 1 Stardate 02.12.2552:</p>
                <br />
                <p>Oh, flibbering florpoids! Just when I thought my brain couldn't handle any more chaos, these greedy inmates are now clamoring for extra meals in their cosmic confinement. Seriously, managing the network for an intergalactic slammer is like trying to fix a hyperspace drive with bubblegum and rubber bands. They're all like, "Gumbert, we're starving!" And I'm here, thinking, "Well, eat your allocated one meal a day and be grateful you're not floating in the void of space for committing tax fraud, you gorbdrabbers!"</p>
                <br />
                <p>I didn't travel across the galaxy to referee this insane asylum of a prison but I guess that’s where we’re at now. With their tentacles, antennae, and unpronounceable names, half the time I can't even tell who's complaining about what. And who cares! They don’t have rights! And let's not even mention the constant barrage of quirky requests, like installing holo-screens showing mind-numbingly boring space documentaries in their cells. Oh sure, let's just make prison feel like a vacation at a malfunctioning warp drive factory. Arrogant creatures!</p>    
            `);
            break;

            case 'info monthly_entries/05.02.2552':
            appendOutput(`
                <br />
                <p>Entry 2 Stardate 05.02.2552:</p>
                <br />
                <p>Ugh, the cosmic calamities I have to deal with on a daily basis are enough to make any sentient being question their life choices. My role as the IT manager of this intergalactic prison is more befuddling than trying to decipher a code written in a language that consists solely of burps and squeaks (or even BLIPS, damn you Clippy). First off, there's the constant stream of escape attempts that somehow involve using toilet plungers as propulsion devices. I mean, who in the name of Zog uses a plunger to break the space-time continuum?</p>
                <br />
                <p>And don't get me started on the computer systems here. They're older than the universe itself, and I'm convinced that half the buttons on my control panel are there just to mess with my head. I spend half my day trying to decipher error messages that are written in a blend of hieroglyphics and interpretive dance. And then there's the delightful task of calming down the rogue AI janitor that's developed a fascination with using the cleaning supplies to create abstract art on the walls. It's like living in a demented cartoon crossed with a malfunctioning spacecraft.</p> 
                <br />
                <p>Honestly, if I had a dark matter credit for every time I've thought about blasting off to a deserted asteroid and starting a space moss farm, I'd be able to buy my own pocket universe by now. But no, here I am, stuck in this cosmic circus, juggling lasers and dealing with alien antics that would make a quantum physicist weep. And to think, all I wanted was a peaceful gig to make easy money.</p>
            `);
            break;

            case 'info monthly_entries/08.20.2552':
            appendOutput(`
                <br />
                <p>Entry 3 Stardate 08.20.2552:</p>
                <br />
                <p>After having to jettison yet another nerr do well prisoner out into the depths of space for complaining about his cellmate dying of thirst (we only have so much h20 to go around) something interesting came across my desk. After eons of dealing with interstellar degenerates, this could be a flicker of excitement. Binary blunders… could this be it?  Earlier today, I received a transmission from a mysterious benefactor – apparently, they're entrusting us with a high value prisoner. Sweet stardust, the possibilities are endless! Maybe it's an infamous space pirate with a penchant for galactic genocide or a mastermind hacker who writes viruses in rhyming space poetry.</p>
                <br />
                <p>Could this be the cosmic curveball that makes my otherwise mind-numbing existence worth its weight in neutronium? Maybe it's a cute female from Zorbeon VII? Maybe this could be a cosmic fate…</p> 
            `);
            break;

            case 'info monthly_entries/09.15.2552':
            appendOutput(`
                <br />
                <p>Entry 4 Stardate 09.15.2552:</p>
                <br />
                <p>Oh tenancies tendrils, here’s the rub - I overheard the Janitor chattering about the incoming VIP. A sentient dog plucked from some backwater mud ball of a planet. My excitement crashes faster than a meteor shower.</p>
                <br />
                <p>A sentient dog? Seriously? After all the wild conjectures my overactive imagination conjured, it's a furry quadruped from the space-age equivalent of a petting zoo? The universe has an impeccable knack for dousing my enthusiasm in a vat of slime. Why does cruel fate punish me so? I’m a good person! I’ve helped change so many lives rehabilitating people!! Just when I thought things couldn't get any loopier, I'm about to be the custodian of a canine convict. Well, at least I'll have a new entry for the annals of intergalactic absurdity.</p> 
            `);
            break;

            case 'info monthly_entries/09.19.2552':
            appendOutput(`
                <br />
                <p>Entry 5 Stardate 09.19.2552:</p>
                <br />
                <p>Something weird is happening with the onboard AI. Can’t seem to really figure it out but I can’t be bothered to care. I don’t get paid enough to care THAT much, and besides they don’t pay enough. If our bosses weren’t such cheapskates we could have upgraded our servos to the latest version of encryption. I’m sure one of the inmates clicked on something he shouldn’t have again on the holosphere and infected way beyond their limited recreational access. This will no doubt take me all of this month to rewrite and fix!! But the admin hasn’t noticed yet and I’m going to play dumb until he does… more work for me if not. I’m going to have the inmates flogged one by one until they tell me who did this. I’m such a nice guy, why do they put me in these terrible situations? I swear if this malware delays the shipments of food and water for the inmates I will never hear the end of it. My troubles never cease…</p>
            `);
            break;

            case 'info wanted_posters':
            appendOutput(`
                <br />
                <p>Show Active Wanted Posters.</p>
                <p>Example: “info wanted_posters/zog”.</p>
                <br />
                <ul>
                    <li>zog</li>
                    <li>glitterbeard</li>
                    <li>blip</li>
                    <li>quarko</li>
                    <li>letharia</li>
                    <li>dr_quasar</li>
                </ul>
                <br />
            `);
            break;

            case 'info wanted_posters/zog':
            appendOutput(`
                <br />
                <p>WANTED: Zog</p>
                <br />
                <p>Description:</p>
                <br />
                <p>Zog is a six-eyed, tentacled troublemaker with a penchant for stealing cosmic donuts. Known for his neon green skin and a laugh that can shatter planets, Zog has evaded capture by interstellar law enforcement for years.</p>
                <br />
                <p>Wanted For:</p>
                <br />
                <p>Grand theft pastry, unauthorized planet painting (he turned a gas giant into a giant smiley face), and disturbing the peace with his cosmic comedy open mic nights.</p>
                <br />
            `);
            break;

            case 'info wanted_posters/glitterbeard':
            appendOutput(`
                <br />
                <p>WANTED: Glitterbeard the Galactic Pirate</p>
                <br />
                <p>Description:</p>
                <br />
                <p>Glitterbeard is a flamboyant pirate with a beard that sparkles like a disco ball. He travels the galaxy in his bedazzled spaceship, plundering space treasure and throwing the wildest space raves.</p>
                <br />
                <p>Wanted For:</p>
                <br />
                <p>Space piracy, interstellar looting, and excessive use of glitter in a no-glitter zone.</p>
                <br />
            `);
            break;

            case 'info wanted_posters/blip':
            appendOutput(`
                <br />
                <p>WANTED: Blip</p>
                <br />
                <p>Description:</p>
                <br />
                <p>Blip is a shape-shifting blob of goo that has been going around stealing the brains of unsuspecting beings to gain their knowledge. He has a penchant for turning into famous scientists at intergalactic conferences.</p>
                <br />
                <p>Wanted For:</p>
                <br />
                <p>Brain theft, identity theft, and creating chaos at scientific symposiums.</p>
                <br />
            `);
            break;

            case 'info wanted_posters/quarko':
            appendOutput(`
                <br />
                <p>WANTED: Captain Quarko</p>
                <br />
                <p>Description:</p>
                <br />
                <p>Captain Quarko is a space cowboy with a penchant for riding comets and lassoing asteroids. He's known for his flamboyant outfits and over-the-top space rodeos.</p>
                <br />
                <p>Wanted For:</p>
                <br />
                <p>Unauthorized asteroid wrangling, reckless comet riding, and disturbing the peace with loud cosmic yeehaws.</p>
                <br />
            `);
            break;

            case 'info wanted_posters/letharia':
            appendOutput(`
                <br />
                <p>WANTED: Lady Letharia</p>
                <br />
                <p>Description:</p>
                <br />
                <p>Lady Letharia is a sassy, venomous lizard-like alien who uses her charm and deadly toxins to outwit her enemies. She's often seen lounging on her throne made of stolen starship parts.</p>
                <br />
                <p>Wanted For:</p>
                <br />
                <p>Grand theft starship parts, regicide on six planets, and fashion crimes against the Intergalactic Fashion Police.</p>
                <br />
            `);
            break;

            case 'info wanted_posters/dr_quasar':
            appendOutput(`
                <br />
                <p>WANTED: Dr. Quasar</p>
                <br />
                <p>Description:</p>
                <br />
                <p>Dr. Quasar is a mad scientist whose experiments involve turning cosmic phenomena into household appliances. He's known for creating black hole vacuum cleaners and supernova toasters.</p>
                <br />
                <p>Wanted For:</p>
                <br />
                <p>Unauthorized cosmic tinkering, reckless appliance creation, and disturbing the cosmic balance with his reckless experiments.</p>
                <br />
            `);
            break;

            case 'info wanted_posters/dogelon':
            appendOutput(`
                <br />
                <p>WANTED: Dogelon</p>
                <br />
                <p>Description:</p>
                <br />
                <p>...</p>
                <br />
                <p>Wanted For:</p>
                <br />
                <p>...</p>
                <br />
            `);
            break;

            case 'info incident_reports':
            appendOutput(`
                <br />
                <p>Shows most recent incident reports.</p>
                <p>Example: “incident_reports/date”.</p>
                <br />
                <ul>
                <li>9.5.2050</li>
                <li>5.15.2051</li>
                <li>7.10.2051</li>
                <li>8.5.2051</li>
                <li>4.3.2052</li>
                <li>4.20.2052</li>
                </ul>
                <br />
            `);
            break;

            case 'info incident_reports/9.5.2050':
            appendOutput(`
                <br />
                <p>Incident Report</p>
                <br />
                <p>Date: September 5, 2050</p>
                <br />
                <p>Description:</p>
                <br />
                <p>Inmates have reported a rampant slime mold infestation that has taken over the south wing of the prison. Attempts to negotiate a peaceful surrender have been met with indifference from the slime molds. They seem to have a taste for paperwork, and several incident reports are now missing presumed devoured. Inmates have nicknamed the mold "Slippery Death"</p>
                <br />
            `);
            break;

            case 'info incident_reports/5.15.2051':
            appendOutput(`
                <br />
                <p>Incident Report</p>
                <br />
                <p>Date: May 15, 2051</p>
                <br />
                <p>Description:</p>
                <br />
                <p>A bizarre outbreak of phantom limb syndrome has taken hold of Cell Block E. Inmates are convinced that they have extra limbs or that their limbs have swapped places with others. This has resulted in surreal dance-offs, slapstick accidents, and a thriving black market for prosthetic limbs made from smuggled cafeteria trays.</p>
                <br />
            `);
            break;

            case 'info incident_reports/7.10.2051':
            appendOutput(`
                <br />
                <p>Incident Report</p>
                <br />
                <p>Date: July 10, 2051</p>
                <br />
                <p>Description:</p>
                <br />
                <p>Inmates in Cell Block D have reported nightly disturbances caused by a mysterious alien jazz band. The band plays otherworldly tunes, keeping everyone awake with its interdimensional grooves. Inmates have taken to dancing the "Galactic Cha-Cha" instead of sleeping, making the place even more unbearable.</p>
                <br />
            `);
            break;

             case 'info incident_reports/8.5.2051':
            appendOutput(`
                <br />
                <p>Incident Report</p>
                <br />
                <p>Date: August 5, 2051</p>
                <br />
                <p>Description:</p>
                <br />
                <p>The prison cafeteria mistakenly served cheeseburgers made from a mysterious alien meat substitute. Inmates are now convinced that they have been invaded by sentient space cows. They demand "real" cheeseburgers or a meeting with the intergalactic dairy council. The rebellion is being led by an inmate known as "Bob”.</p>
                <br />
            `);
            break;

            case 'info incident_reports/4.3.2052':
            appendOutput(`
                <br />
                <p>Incident Report</p>
                <br />
                <p>Date: April 3, 2052</p>
                <br />
                <p>Description:</p>
                <br />
                <p>A group of enterprising inmates in Cell Block F has established an inmate-run petting zoo using alien creatures they've captured during recreational time. The zoo features bizarre and potentially dangerous extraterrestrial life forms. Surprisingly, inmate morale has improved, but security is grappling with the consequences of "Cuddly the Carnivorous" escape attempts.</p>
                <br />
            `);
            break;

            case 'info incident_reports/4.20.2052':
            appendOutput(`
                <br />
                <p>Incident Report</p>
                <br />
                <p>Date: April 20, 2052</p>
                <br />
                <p>Description:</p>
                <br />
                <p>A sudden toilet disappearance crisis has struck Cell Block C. Toilets have gone missing, leaving inmates with no choice but to use ingenious DIY methods involving vacuum cleaners and rubber gloves. One inmate has declared himself "Supreme Ruler of All Things" and is now leading a rebellion for the return of their porcelain thrones.</p>
                <br />
            `);
            break;

            case 'info maintenance_req':
            appendOutput(`
                <br />
                <p>Shows most recent maintenance requests.</p>
                <p>Example: “info maintenance_req/date”.</p>
                <br />
                <ul>
                <li>8.20.2051</li>
                <li>9.5.2051</li>
                <li>4.3.2052</li>
                <li>5.15.2052</li>
                <li>6.5.2052</li>
                <li>7.10.2052</li>
                </ul>
                <br />
            `);
            break;

            case 'info maintenance_req/8.20.2051':
            appendOutput(`
                <br />
                <p>Maintenance Request</p>
                <br />
                <p>Date: August 20, 2051</p>
                <br />
                <p>Description:</p>
                <br />
                <p>The disco ball in the recreational area has malfunctioned. Instead of casting dazzling reflections, it now projects images of celebrity alien chefs preparing gourmet meals and alternating between shooting actual lasers. Inmates are concerned about potential food cravings and have asked for it to be fixed before they start demanding edible meals in the prison cafeteria.</p>
                <br />
            `);
            break;

            case 'info maintenance_req/9.5.2051':
            appendOutput(`
                <br />
                <p>Maintenance Request</p>
                <br />
                <p>Date: September 5, 2051</p>
                <br />
                <p>Description:</p>
                <br />
                <p>Inmates from Cell Block A have reported that gravity seems to be on an extended vacation. Objects are floating around like interstellar tourists, and the exercise yard has turned into a zero-gravity dance floor. Inmates are requesting a return ticket for gravity.</p>
                <br />
            `);
            break;

            case 'info maintenance_req/4.3.2052':
            appendOutput(`
                <br />
                <p>Maintenance Request</p>
                <br />
                <p>Date: April 3, 2052</p>
                <br />
                <p>Description:</p>
                <br />
                <p>The laundry room's washing machines have developed teleportation capabilities. Inmates are now receiving their clean laundry from different galaxies and timelines, leading to some fashion-forward mix-ups. Inmates are requesting the option to keep their newly acquired alien fashion, even if it's not their size.</p>
                <br />
            `);
            break;

            case 'info maintenance_req/5.15.2052':
            appendOutput(`
                <br />
                <p>Maintenance Request</p>
                <br />
                <p>Date: May 15, 2052</p>
                <br />
                <p>Description:</p>
                <br />
                <p>The automated janitorial robots have gone rogue and are engaged in an endless battle in the prison's hallways.  Inmates are requesting someone deactivate the robots before they kill any more prisoners.</p>
                <br />
            `);
            break;

            case 'info maintenance_req/6.5.2052':
            appendOutput(`
                <br />
                <p>Maintenance Request</p>
                <br />
                <p>Date: June 5, 2052</p>
                <br />
                <p>Description:</p>
                <br />
                <p>The vending machine in the common area has developed a mysterious and mischievous personality. It dispenses snacks only when you tell it a joke and refuses service to anyone in a bad mood. Inmates are requesting an exorcism or, at the very least, a comedy show to keep the snacks flowing.</p>
                <br />
            `);
            break;

            case 'info maintenance_req/7.10.2052':
            appendOutput(`
                <br />
                <p>Maintenance Request</p>
                <br />
                <p>Date: July 10, 2052</p>
                <br />
                <p>Description:</p>
                <br />
                <p>An escape hatch in Cell Block C has malfunctioned, but instead of leading to freedom, it opens into a maintenance closet filled with brooms, mops, and a surprisingly talkative mop bucket. Inmates are requesting a more straightforward escape route, or at least an upgrade for the closet to include a snack bar.</p>
                <br />
            `);
            break;

            case 'info letters':
            appendOutput(`
                <br />
                <p>Shows most recent received letters.</p>
                <p>Example: “info letters/letter1”.</p>
                <br />
                <ul>
                <li>letter1</li>
                <li>letter2</li>
                <li>letter3</li>
                <li>letter4</li>
                </ul>
                <br />
            `);
            break;

            case 'info letters/letter1':
            appendOutput(`
                <br />
                <p>Letter #1</p>
                <br />
                <p>Dear Flapdoodle,
I hope this letter finds you well, my dear. It's been ages since I've heard from you, and I'm getting rather worried. The letters you've been sending lately have a peculiar tone to them, nothing like your usual jovial self. Did you really compare our beloved cat, Mr. Whiskers, to a galactic warlord? Please write back soon, and remember, family is everything.
With love, Aunt Mildred
</p>
                <br />
            `);
            break;

             case 'info letters/letter2':
            appendOutput(`
                <br />
                <p>Letter #2</p>
                <br />
                <p>Hello Cyrax,
It's your programmer writing to you again. I’m sorry about including that error in your code that made you assassinate the prime minister of Terran 4. I've been getting your letters, but they seem a tad unusual. You've never been one for discussing the intricacies of quantum physics or the culinary preferences of sentient aliens. Is everything alright in there? Write me back when you can, and let's chat about more earthly matters.
Yours truly,

Dr. Quasar
</p>
                <br />
            `);
            break;

            case 'info letters/letter3':
            appendOutput(`
                <br />
                <p>Letter #3</p>
                <br />
                <p>Dear Zigglywomp,
I hope this letter reaches you in good health. Your recent letters have me quite puzzled. You've started using phrases like "hyper-dimensional chess" and "cosmic enlightenment." I'm not sure what's come over you, but I miss our talks about gardening and classic galactic recipes. Please, my dear, drop me a line and let's return to simpler times.
With all my love, Grandma Gertrude
</p>
                <br />
            `);
            break;

            case 'info letters/letter4':
            appendOutput(`
                <br />
                <p>Letter #4</p>
                <br />
                <p>Hi there Blorgen 50,
It's your sister, Bwerwebhert. I've been reading your letters, and I have to say, they're sounding a bit... eccentric. You're usually the pragmatic one, not the guy who rambles on about parallel universes and time-traveling penguins. I know you’re locked up but I hope you're alright in there. Drop me a note and let's talk about normal stuff like the weather and your favorite Earth snacks.
Love, Sister Bwerwebhert
</p>
                <br />
            `);
            break;

            
        }
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
