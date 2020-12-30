let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quote = 
[
    '"The Internet has given us 10 or 15 new styles of communication: long messages like blogging, and then short messages like texting and tweeting. I see it all as part of an expanding array of linguistic possibilities." David Crystal',
    '"Doing linear scans over an associative array is like trying to club someone to death with a loaded Uzi." Larry Wall',
    '"If the Net becomes the center of the universe, which is what seems to be happening, then the dizzying array of machines that will be plugged into it will virtually guarantee that the specifics of which chip and which operating system youve got will be irrelevant." Marc Andreessen',
    '"The queen of aggregation is, of course, Arianna Huffington, who has discovered that if you take celebrity gossip, adorable kitten videos, posts from unpaid bloggers and news reports from other publications, array them on your Web site and add a left-wing soundtrack, millions of people will come." Bill Keller',
    '"Now, as a writer, the whole world is your nail polish display, and whats more, you can help yourself. A thrilling, colourful array of gorgeous human peculiarity revolves before your eyes, and you still cant quite believe its all yours for the taking." Lynn Coady Eyes',
];

btn.addEventListener('click', function(){
    var randomQuote = quote[Math.floor(Math.random() * quote.length)]
    output.innerHTML = randomQuot