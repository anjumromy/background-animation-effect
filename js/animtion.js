function myfunction()
{
    for (let i = 0; i < 400; i++) {
        let banner = document.getElementsByClassName('banner')[0];
        banner.innerHTML += "<span class='block'></span>";
        const dur = Math.random() * 5;
        let block = document.getElementsByClassName('block');
        block[i].style.animationDuration = 2 + dur + "s";
        block[i].style.animationDelay = dur + "s";
    }
    const Sectio = document.querySelector('section');
    setTimeout(function () {
        Sectio.classList.add('active')
    }, 15000)
    
}