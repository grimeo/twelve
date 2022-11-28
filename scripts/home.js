var createbackground = () => {
    for(let x = 1; x<6; x++){
        let divs = document.createElement('div');
        divs.setAttribute('class', 'warp-speed-bg')
        divs.setAttribute('id', 'warpspeed'+x)
        divs.style.marginTop = '110px';    
        document.body.appendChild(divs)
    }
}
createbackground();