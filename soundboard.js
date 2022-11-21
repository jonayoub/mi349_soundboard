const sounds = ["gunshots_x.wav","motorcycle_x.wav","rubber_ducky.wav"]
var buttons = document.querySelectorAll('.button');

function PlaySoundEffect(event)
{
    const audio = new Audio(sounds[parseInt(event.target.id)]);
    audio.play();
}

for(var i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener('click', PlaySoundEffect);
    // buttons[i].addEventListener('mouseenter', PlaySoundEffect);
}
