let output1=document.getElementById("output1");
function soutput(number){
 output1.value += number ;
}
function Del() {
    output1.value= output1.value.slice(0,-1);
}
function ketqua(){
    
    ketqua2 = eval(output1.value);
    document.getElementById('output1').value = ketqua2;
}
function clear1(){
    
    document.getElementById("output1").value= "0";
}