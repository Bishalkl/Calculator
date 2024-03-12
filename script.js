
appendtoDisplay = function(value){
    document.getElementById('display_area').value += value;
}

clearDisplay = function(){
    document.getElementById('display_area').value = '';
}

calculate= function(){
    let num = document.getElementById('display_area').value;
    // evaluation 
    let result;
    try{
        result = eval(num);
    }catch(error){
        result ='error';
    }
    

    // display result
    document.getElementById('display_area').value = result
}
