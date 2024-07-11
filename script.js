
const scroll = new LocomotiveScroll({
     el: document.querySelector('#full'),
     smooth: true
 });

function mousefollower(){
    window.addEventListener("mousemove",function (dets){
        document.querySelector(".cursorcircle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px`;
    })
}
mousefollower();