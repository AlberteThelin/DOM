const main = document.querySelector("main");

const vacuum = "I sold my vacuum the other day. All it was doing was collecting dust.";
const forrest = "What is Forrest Gump’s email password? 1forrest1.";
const knock = "Did you hear about the guy who invented the knock-knock joke? He won the “no-bell” prize.";

const template = `
    <h2>My Jokes</h2>
    <ul>
        <li>${vacuum}</li>
        <li>${forrest}</li>
        <li>${knock}</li>
    </ul>
`;

main.innerHTML = template;

const p = document.createElement('p');
p.textContent = "That's all folks!";
main.appendChild(p);
