function grey(element){
    document.getElementById(element).classList.remove('hidden');
}

function remove(element){
    document.getElementById(element).classList.add('hidden');
}

function greyfabric(){
    grey('fabric-hoop');
}

function greyneedle(){
    grey('needle');
}

function greyscissors(){
    grey('scissors');
}

function greyspool(){
    grey('spool');
}

function greypens(){
    grey('pens');
}

function greyroses(){
    grey('roses');
}

function greyflower(){
    grey('flower');
}

function greydaisy(){
    grey('daisy');
}

function greyknots(){
    grey('knots');
}

function greyknots1(){
    grey('knots1');
}

function greyleaves(){
    grey('leaves');
}

function greybackstitch(){
    grey('backstitch');
}

document.getElementById('fabric-button').onmouseover = greyfabric;
document.getElementById('needle-button').onmouseover = greyneedle;
document.getElementById('scissors-button').onmouseover = greyscissors;
document.getElementById('spool-button').onmouseover = greyspool;
document.getElementById('pens-button').onmouseover = greypens;
document.getElementById('roses-button').onmouseover = greyroses;
document.getElementById('flower-button').onmouseover = greyflower;
document.getElementById('daisy-button').onmouseover = greydaisy;
document.getElementById('knots-button').onmouseover = greyknots;
document.getElementById('knots-button1').onmouseover = greyknots1;
document.getElementById('leaves-button').onmouseover = greyleaves;
document.getElementById('backstitch-button').onmouseover = greybackstitch;

function removefabric(){
    remove('fabric-hoop');
}

function removeneedle(){
    remove('needle');
}

function removescissors(){
    remove('scissors');
}

function removespool(){
    remove('spool')
}

function removepens(){
    remove('pens');
}

function removeroses(){
    remove('roses');
}

function removeflower(){
    remove('flower');
}

function removedaisy(){
    remove('daisy');
}

function removeknots(){
    remove('knots');
}

function removeknots1(){
    remove('knots1');
}

function removeleaves(){
    remove('leaves');
}

function removebackstitch(){
    remove('backstitch');
}
document.getElementById('fabric-button').onmouseout = removefabric;
document.getElementById('needle-button').onmouseout = removeneedle;
document.getElementById('scissors-button').onmouseout = removescissors;
document.getElementById('spool-button').onmouseout = removespool;
document.getElementById('pens-button').onmouseout = removepens;
document.getElementById('roses-button').onmouseout = removeroses;
document.getElementById('flower-button').onmouseout = removeflower;
document.getElementById('daisy-button').onmouseout = removedaisy;
document.getElementById('knots-button').onmouseout = removeknots;
document.getElementById('knots-button1').onmouseout = removeknots1;
document.getElementById('leaves-button').onmouseout = removeleaves;
document.getElementById('backstitch-button').onmouseout = removebackstitch;

function dropdown(){
    document.getElementById(element).classList.toggle('hidden')
}

document.getElementById('dropdown').onclick = dropdown;