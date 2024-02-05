let images = {
    titan: "./img/white.png",
    white: "./img/salon.png",
    black: "./img/titan.png"
}

let btns = document.querySelectorAll('#titan, #black, #white')
let img = document.querySelector('#image')
// console.log(btns);
btns.forEach(btn => {
    btn.onclick = () => {
        let color = btn.innerHTML;
        img.setAttribute('src', images[color])
    }
})


//wrong
// let turn_off = document.querySelectorAll('#on')
// let turn_on = {
//     img: "./img/image 7.png"
// }
// turn_off.forEach(chn => {
//     chn.onclick = () => {
//         turn_on.src = "./img/image7.png";
//     };
// })
// console.log(turn_on.img);

// 2
// turn_off.forEach(bn => {

//     bn.onclick = () => {
//         let chng = bn.innerHTML
//         turn_on.setAttribute('src', images[chng])
//     }
// })