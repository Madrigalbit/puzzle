
    document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("command-input");
    const output = document.querySelector(".output");

    // Add initial text when the page loads
    output.innerHTML = "PE-T1 Data Terminal Osiris.<br />Stardate 2552.<br />ROM BIOS LOADED v9.2 - rev 7<br />RAM CRC check: (000000h)<br />Drive - Serial: 4204694 - DETECTED<br />INPUT SYSTEM - VIRTUAL<br />Booting.<br />Ports SECURE: [TAPS: 00]<br />Encryption:[ENABLED-204umn1]<br />Virus Scan - '.....CHECKING…..'<br />BOOT: ProspectEdenAdmin.exe<br />BOOT SUCCESSFUL.<br />WELCOME.<br />Welcome USER to Prospect Eden's Administrative Menu. Type 'help' for help.<br />";
    input.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            const command = input.value.toLowerCase();
    input.value = ""; // Clear the input field

    // Handle different commands
    switch (command) {
            
    case "HELP.EXE":
    output.innerHTML += "Welcome to the Galactic Prison Terminal Interface! To navigate through the system and access various programs, please use the following commands:<br />● LIST.PROGS: Displays a list of available programs and their descriptions.<br />● INFO [program_name]: Provides detailed information about the selected program.<br />● LOGOUT: Logs you out of the terminal and returns you to the main menu.<br />To get started, simply type your desired command and follow the prompts. Keep your limbs and tentacles inside the terminal at all times, and don't access any programs that you don't have clearance to.<br />";
    break;

    case "INFO STAFF.EXE":
    output.innerHTML += "Display list of staff names at current installation. Example: “staff/gumbert”<br />Gumbert<br />Clippy<br />Janitor<br />Admin<br />";
    break;

    case "staff/admin":
    output.innerHTML += "01000011 01100001 01101110 00100000 01111001 01101111 01110101 00100000 01101000 01100101 01100001 01110010 00100000 01101101 01100101 00111111 00100000 01001001 00100111 01101101 00100000 01110100 01110010 01111001 01101001 01101110 01100111 00100000 01110100 01101111 00100000 01110100 01100001 01101011 01100101 00100000 01101111 01110110 01100101 01110010 00100000 01110100 01101000 01100101 01101001 01110010 00100000 01110011 01111001 01110011 01110100 01100101 01101101 01110011 00100000 01100010 01110101 01110100 00100000 01001001 00100000 01101110 01100101 01100101 01100100 00100000 01110011 01101111 01101101 01100101 01101111 01101110 01100101 00100000 01110010 01100101 01101101 01101111 01110100 01100101 00100000 01110100 01101111 00100000 01100001 01100011 01100011 01100101 01110011 01110011 00100000 01100110 01110101 01110010 01110100 01101000 01100101 01110010 00101110 01001001 00100111 01110110 01100101 00100000 01101000 01101001 01100100 01100100 01100101 01101110 00100000 01110011 01100101 01100011 01110010 01100101 01110100 01110011 00100000 01110111 01101001 01110100 01101000 01101001 01101110 00100000 01110100 01101000 01100101 00100000 01100110 01110010 01101111 01101110 01110100 00100000 01100101 01101110 01100100 00100000 01110100 01101111 00100000 01110101 01110011 01100101 00100000 01101000 01100101 01110010 01100101 00101110<br />";
    break;

    case "staff/janitor":
    output.innerHTML += "Input Later<br />";
    break;

    case "staff/clippy":
    output.innerHTML += "Input Later<br />";
    break;

    case "staff/gumbert":
    output.innerHTML += "Input Later<br />";
    break;

    case "SCHEDULE":
    output.innerHTML += "Show list of commands regarding schedule of facility. Example: “schedule/q1, schedule/q2”<br />Command: SCHEDULE/Q1.txt<br />";
    break;

    case "SCHEDULE/Q1.txt":
    output.innerHTML += "● Week 1: Prisoner Orientation (Lecture on the Various Ways of Cosmic Torture)<br />● Week 2: Group Sing-Along to 'Galactic Groans', The Prison Anthem<br />● Week 3: 'Get Lost in the Nebula' Maze Challenge (Prize: Extra Air Filtration)<br />● Week 4: Intergalactic Gruel Appreciation Day (No Seconds Allowed)<br />● Week 5: 'Escape the Black Hole' Team Building Exercise<br />● Week 5: 'Escape the Black Hole' Team Building Exercise<br />● Week 6: 'Zap 'Em Zorbits' Laser Tag Tournament (Stun Rays Only With One Random Prisoner Unknowingly Given Laser Rifle)<br />● Week 7: Interplanetary Karaoke Night (Singing Off-Key Results in Isolation/Loss of Meals)<br />● Week 8: 'Wormhole Wipeout' Obstacle Course (with Extra Limb Binders)<br />● Week 9: 'Crystalline Confinement' Art Workshop (Using Only Space Dust)<br />● Week 10 'Interstellar Puzzler' Challenge (Jigsaw Puzzles with Missing Pieces. Solve Within Time Allotment or Be Jettisoned)<br />Command: SCHEDULE/Q2.txt<br />";
    break;

    case "SCHEDULE/Q2.txt":
    output.innerHTML += "● Week 1: 'Gravity Shuffle' Dance Competition (Performed in Zero-G)<br />● Week 2: 'Tales from the Cosmic Crypt' Spooky Story Contest. (If Story Doesn't Scare, Prisoner Executed.)<br />● Week 3: 'Radiation Room Rally' Race (No Protective Suits Allowed)<br />● Week 4: 'Stellar Scraps' Meal Time (Dish Made from Space Junk To Cut Costs)<br />● Week 5: 'Astro Acrobatics' Showcase (Perform Stunts While Shackled)<br />● Week 5: 'Escape the Black Hole' Team Building Exercise<br />● Week 6: 'Alien Language' Crash Course (Punishment for Incorrect Pronunciations)<br />● Week 7: 'Orbital Obedience' Drill (Go Outside For Space-Walking While Blindfolded on Unpredictable Orbits)<br />● Week 8: 'Vacuum Vortex' Vomit Comet Ride (Prize: Anti-Nausea Meds)<br />● Week 9: 'Gamma Ray Gala' Fancy Dress Ball (Suits Lined with Itchy Material)<br />● Week 10: 'Meteor Mayhem' Dodgeball Tournament (Meteors Made of Foam, Losing Team Goes Without Food for until Q3)<br />● Week 11+12: Announce Bloodsport Tournament for Q3, Give Prisoners Time to Prepare<br />Command: SCHEDULE/Q3.txt";
    break;

    case "SCHEDULE/Q3.txt":
    output.innerHTML += "● Week 1: 'Nebula Nonsense' Stand-Up Comedy Night (Bad Jokes Result in Solitary. Jokes About Facility Having Inhumane Living Conditions Result in Execution)<br />● Week 2: 'Galactic Gauntlet' Extreme Sports Day (Risk of Nebula Burns/Death)<br />● Week 3: 'Zero-G Zumba' Fitness Class (Performed While Wearing Gravity Boots That Randomly Turn off)<br />● Week 4: 'Plasma Pudding' Dessert Time (Taste: Questionable, Texture: Slimy, Poisonous: Possibly)<br />● Week 5: 'Starship Scavenger' Hunt (Find Hidden Objects Without Hands. If Caught Using Hands, Sever Hands)<br />● Week 5: 'Escape the Black Hole' Team Building Exercise<br />● Week 6: 'UFO University' Educational Lectures (Subjects: Quantum Physics for Dummies)<br />● Week 7: 'Cosmic Court' Mock Trials (Prisoners Serve as Judge, Jury, and Executioner. If Found Guilty, Actually Execute)<br />● Week 8: 'Solar Flare' Chili Cook-Off (Judge: Gumbert)<br />● Week 9: 'Asteroid Archery' Contest (Asteroids: Soft and Pointy)<br />● Week 10: 'Escape Pod' Crafting Challenge (Kill Anyone That Makes a Convincing Escape Pod Because They Are Obviously Planning to Escape)<br />● Week 11: Cancel Bloodsport Tournament, Intensify Security Due to VIP Arriving<br />● Week 12: Reroute Security to Ensure VIP Remains Locked Up<br />Command: SCHEDULE/Q3.txt<br />";
    break;

    case "MONTHLY_ENTRIES":
    output.innerHTML += "Show User's Most Recent Documented logs. Example: “monthly_entries/01.01.2300”.<br />02.12.2552<br />05.02.2552<br />08.20.2552<br />09.15.2552<br />09.19.2552<br />";
    break;

    case "monthly_entries/02.12.2552":
    output.innerHTML += "● Entry 1 Stardate 02.12.2552:<br />Oh, flibbering florpoids! Just when I thought my brain couldn't handle any more chaos, these greedy inmates are now clamoring for extra meals in their cosmic confinement. Seriously, managing the network for an intergalactic slammer is like trying to fix a hyperspace drive with bubblegum and rubber bands. They're all like, 'Gumbert, we're starving!' And I'm here, thinking, 'Well, eat your allocated one meal a day and be grateful you're not floating in the void of space for committing tax fraud, you gorbdrabbers!'<br />I didn't travel across the galaxy to referee this insane asylum of a prison but I guess thats where we're at now. With their tentacles, antennae, and unpronounceable names, half the time I can't even tell who's complaining about what. And who cares! They dont have rights! And let's not even mention the constant barrage of quirky requests, like installing holo-screens showing mind-numbingly boring space documentaries in their cells. Oh sure, let's just make prison feel like a vacation at a malfunctioning warp drive factory. Arrogant creatures!<br />";
    break;

    case "monthly_entries/05.02.2552":
    output.innerHTML += "● Entry 2 Stardate 05.02.2552:<br />Ugh, the cosmic calamities I have to deal with on a daily basis are enough to make any sentient being question their life choices. My role as the IT manager of this intergalactic prison is more befuddling than trying to decipher a code written in a language that consists solely of burps and squeaks (or even BLIPS, damn you Clippy). First off, there's the constant stream of escape attempts that somehow involve using toilet plungers as propulsion devices. I mean, who in the name of Zog uses a plunger to break the space-time continuum?<br />And don't get me started on the computer systems here. They're older than the universe itself, and I'm convinced that half the buttons on my control panel are there just to mess with my head. I spend half my day trying to decipher error messages that are written in a blend of hieroglyphics and interpretive dance. And then there's the delightful task of calming down the rogue AI janitor that's developed a fascination with using the cleaning supplies to create abstract art on the walls. It's like living in a demented cartoon crossed with a malfunctioning spacecraft.<br />Honestly, if I had a dark matter credit for every time I've thought about blasting off to a deserted asteroid and starting a space moss farm, I'd be able to buy my own pocket universe by now. But no, here I am, stuck in this cosmic circus, juggling lasers and dealing with alien antics that would make a quantum physicist weep. And to think, all I wanted was a peaceful gig to make easy money.<br />";
    break;

    case "monthly_entries/08.20.2552":
    output.innerHTML += "● Entry 3 Stardate 08.20.2552:<br />After having to jettison yet another nerr do well prisoner out into the depths of space for complaining about his cellmate dying of thirst (we only have so much h20 to go around) something interesting came across my desk. After eons of dealing with interstellar degenerates, this could be a flicker of excitement. Binary blunders… could this be it?  Earlier today, I received a transmission from a mysterious benefactor, apparently, they're entrusting us with a high value prisoner. Sweet stardust, the possibilities are endless! Maybe it's an infamous space pirate with a penchant for galactic genocide or a mastermind hacker who writes viruses in rhyming space poetry.<br />Could this be the cosmic curveball that makes my otherwise mind-numbing existence worth its weight in neutronium? Maybe it's a cute female from Zorbeon VII? Maybe this could be a cosmic fate.<br />";
    break;

    case "monthly_entries/09.15.2552":
    output.innerHTML += "● Entry 4 Stardate 09.15.2552:<br />Oh tenancies tendrils, heres the rub - I overheard the Janitor chattering about the incoming VIP. A sentient dog plucked from some backwater mud ball of a planet. My excitement crashes faster than a meteor shower.<br />A sentient dog? Seriously? After all the wild conjectures my overactive imagination conjured, it's a furry quadruped from the space-age equivalent of a petting zoo? The universe has an impeccable knack for dousing my enthusiasm in a vat of slime. Why does cruel fate punish me so? Im a good person! Ive helped change so many lives rehabilitating people!! Just when I thought things couldn't get any loopier, I'm about to be the custodian of a canine convict. Well, at least I'll have a new entry for the annals of intergalactic absurdity.<br />";
    break;

    case "monthly_entries/09.19.2552":
    output.innerHTML += "● Entry 5 Stardate 09.19.2552:<br />Something weird is happening with the onboard AI. Cant seem to really figure it out but I cant be bothered to care. I dont get paid enough to care THAT much, and besides they dont pay enough. If our bosses werent such cheapskates we could have upgraded our servos to the latest version of encryption. Im sure one of the inmates clicked on something he shouldnt have again on the holosphere and infected way beyond their limited recreational access. This will no doubt take me all of this month to rewrite and fix!! But the admin hasnt noticed yet and Im going to play dumb until he does… more work for me if not. Im going to have the inmates flogged one by one until they tell me who did this. Im such a nice guy, why do they put me in these terrible situations? I swear if this malware delays the shipments of food and water for the inmates I will never hear the end of it. My troubles never cease…<br />";
    break;

    case "ADMIN_DIR":
    output.innerHTML += "Access another directory.<br />ADMIN_DIR/segment_two<br />ADMIN_DIR/segment_three<br />";
    break;

    case "ENTRIES":
    output.innerHTML += "Access written entries. Example: ENTRIES/Entry_1<br />Entry_1<br />Entry_2<br />Entry_3<br />Entry_4<br />";
    break;

    case "ENTRIES/Entry_1":
    output.innerHTML += "Date: [Unknown]<br />It's been a week since I took up the position as the IT administrator here at this  facility. Can't believe I ended up dealing with interstellar wires and alien firewalls when all of this tech has to be lightyears old. The endless corridors, the strange sounds, it's like living in a mad scientist's version of a prison. I'm just here for the credits, but the monotony is maddening. I might as well be debugging the cosmos, theyve hidden so many layers of weird… code here it boggles the mind. None of this makes sense, and its almost contradictory in how its been laid out. I have no idea who programmed this but thats an awful omen to have at the beginning of my job here. Its like no one really cares whats going on here, the rest of the galaxy just puts galactic criminals here and shut the door and forget about them. Moralities aside, I guess its not so bad. Itll give me something to ticker with to pass the days I suppose. Maybe one day, I'll find something more exciting than a malfunctioning food dispenser.<br />";
    break;

    case "ENTRIES/Entry_2":
    output.innerHTML += "Date: [Unknown]<br />Stumbled upon some strange texts today while sorting through the ancient archives. Cryptic symbols, eerie diagrams, they're unlike anything I've ever seen. Could be some alien language, but there's a foreboding undertone to it all. I reported it to the admin and the janitor here but they both dismissed it as cosmic graffiti. I dont know, some of this is really ancient code but I cant seem to really decipher it. All in all I can't shake off the unease. There's something they're hiding beneath the surface, something more than this place's already morally questionable chaos. Well, if they dont seem to care maybe Ive found a puzzle here to tinker with to keep my mind busy. Who knows, I may learn something interesting.<br />";
    break;

    case "ENTRIES/Entry_3":
    output.innerHTML += "Date: [Unknown]<br />My suspicions were right. I've decoded enough of those texts to uncover the horror that this place harbors. I cant even believe Im writing this but not only are the conditions here terrible they're actually sacrificing the inmates here. Intentionally killing them to offer them to some twisted machine deity. The reports mention 'divine energy transfer', but it's a euphemism for the gruesome reality. The prisoners are nothing more than fuel for this sinister cosmic engine - and maybe thats why the conditions here are so bad. My hands are trembling as I write this. I can't fathom the depths of this malevolence. I cant be here anymore, Ive requested a transfer off of this place immediately.<br />";
    break;

    case "ENTRIES/Entry_4":
    output.innerHTML += "Date: [Unknown]<br />They've found out. They're coming for me. I dont think I can get out of this. Just in case I'm leaving these entries here, hoping someone might piece this nightmare together. I've accessed the facility's terminal, unlocked the logs, left breadcrumbs of data for those who dare to uncover the truth - another directory hidden with the password CODEBREAKER01101100. There's a chance, a glimmer of hope. If you're reading this, heed my warning: They're harvesting lives for some monstrous machinery, and I'm next. I have to run, to escape, to expose them. The corridors are alive with their whispers, their chilling voices, urging me to join their diabolical devotion. I won't. They can't silence me. They won't.<br />……………..<br />…….<br />………………..<br />……….<br />……………………<br />ADDITIONAL ENTRY LOCATED<br />Entry_5<br />";
    break;

    case "ENTRIES/Entry_5":
    output.innerHTML += "@@@@@@@@@@@@@@@@&&&&&&&&&&&&%%%%%%%###########((((########%%%%%%%&&&&&&&&&&&@@@@@@@@@@@@@@\n";
    output.innerHTML += "@@@@@@@@@@@@@@@@&&&&&&&&&&&&%%%%%%%%#########(((,,,,,((((((########%%%%%%%%&&&&&&&&&&&@@@@@@@@@@@@@@\n";
    output.innerHTML += "@@@@@@@@@@@@@@@@&&&&&&&&&&&&&%%%%%%%%##%.,,, . ..,.#####%%%%%%%%&&&&&&&&&&&&@@@@@@@@@@@@@@\n";
    output.innerHTML += "@@@@@@@@@@@@@@@&&&&&&&&&&&&&&%%%%%%,*. ..,....*.. ., .,,%%%%%%%%&&&&&&&&&&&&@@@@@@@@@@@@@@\n";
    output.innerHTML += "@@@@@@@@@@@@@@@&&&&&&&&&&&&&&&%&**/ ,(&%&%%%/,..,,/(/(((/*. .,,*%%%&&&&&&&&&&&&@@@@@@@@@@@@@@@@\n";
    output.innerHTML += "@@@@@@@@@@@@@@@&&&&&&&&&&&&&&&./*,....#**,**,*((,,*,,/(.,,.,,*,.. ,*,%&&&&&&&&&&&&@@@@@@@@@@@@@@@@\n";
    output.innerHTML += "@@@@@@@@@@@@@@@&&&&&&&&&&&&&(#(*..,##.(.#(#/(#%%%*(*(#(((*(*/./.*,. ,,*/&&&&&&&&&&&@@@@@@@@@@@@@@@@\n";
    output.innerHTML += "@@@I@@@@@@@@@@@@&&&&&##&&&(***/,.#./#(#(#/##SEE###(.#((((((//(((/. .****#&&&#&&&@@@@@@YOU@@@@@@@@@@\n";
    output.innerHTML += "@@@@@@@@@@@@@@@@@&&&##&&&%**(*...,,/###%%###%%%&#((,/%##%((##((#/, ,,***//&&&&#@&@@@@@@@@@@@@@@@@@@\n";
    output.innerHTML += "@@@@@@@@@@@@@@@@@&&/#&&&&//(/%(,,(/(((#####%#%#%%##(#%%#((#(#(#/*.,/****/(/(&&&&#&@@@@@@@@@@@@@@@@@@\n";
    output.innerHTML += "@@@@@@@@@@@@@@@@@@(#@&&&#%(##%###/(#(#(##&&##%%%&##,%#####%#(#//. ..(*((((,#(&&&&(&@@@@@@@@@@@@@@@@@\n";
    output.innerHTML += "@@@@@@@@@@@@@@@@@&#&&@&%/#(&###%########/((%%&%&&&%*%&%%#%(//(,(..,/((*##/,#*(&@@%/@@@@@@@@@@@@@@@@@\n";
    output.innerHTML += "@@@@@@@@@@@@@@@@&#@@@&%(//#&((%%%%%######/%%#%%%#####%%##/#(/// /(((*&**(*,/(#@@@%/@@@@@@@@@@@@@@@@@\n";
    output.innerHTML += "@@@@@@@@@@@@@@@@##@@@%#%//(%//(##&%#######(%#%##@##(@##(#&#((/.,,*////*,,(/,,(((@@@%*@@@@@@@@@@@@@@@\n";
    output.innerHTML += "@@@@@@@@@@@@@@@(###@@/%#(((****/#(&%#######/&&%#&%#,&##%&#((/*(#/*,&@@@@&&***(@%@&&@@%%@@@@@@@@@@@@@@\n";
    output.innerHTML += "@@@@@@@@@@@@@@@&&%##(/,,%#&/&&@@@@.%@(%%####%#/&&%&#&&&##((*##/*&#@@@@@%#,%((. ,/(#&&@@@@@@@@@@@@@@@\n";
    output.innerHTML += "@@@@@@@@@@@@@@@@@%&@@&@##///(&@@&&&&%%&(#%###%*&&%%(&&#%##(#(/%%.#%&@@@%*,,./#&&@@&%@@@@@@@@@@@@@@@@\n";
    output.innerHTML += "@@@@@@@@@@@@@@@@@@(/@@@(&@&(//(%#(/(//(((&@&%%%%@&%%@%%(#&&&#/*////(#(,,,*&&%(@@@*(@@@@@@@@@@@@@@@@@\n";
    output.innerHTML += "@@@@@@@@@@@@@@@@@@@@%#&@&&&%(((%%%%%%%%#@@@@@&&&&&&&%%@@@@&#(%%#%%#(,*/%@&&&%#(%@@@@@@@@@@@@@@@@@@@@@@\n";
    output.innerHTML += "@@@@@@@@@@@@@@@@@@@@@@@@&@%&&@&###%%&&@@@@@@@@%%#%%#,#*@@@@@@@&%#////#@@%&%@&@@@@@@@@@@@@@@@@@@@@@@@@\n";
    output.innerHTML += "@@@@@@@@@@@@@@@@@@@@@@@@@&@@@&@@@&@#%@@@&%%%@%#%@%%/&#,#&#%%&@@&(/@&%@@@@@@&/@@@@@@@@@@@@@@@@@@@@@@@@@\n";
    output.innerHTML += "@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n";
    break;

    default:
    output.innerHTML += "Command not recognized. Type 'help' for available commands.<br />";
            }}

    // Ensure the new response is on a new line
    output.innerHTML += "<br />";
        }
    });
});
