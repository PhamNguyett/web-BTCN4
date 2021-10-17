var FirstNumber;
var SecondNumber;
var Result;
var Choose;
var Check1

const validator=function(string){
    if(/[a-z]/.test(string))
    {
        return false
    }
    else if (isNaN(string)){
        return false
    }
    return true
}
var FirstNumberElement= document.querySelector('#first-number');
FirstNumberElement.oninput=function(e){
    FirstNumber=e.target.value;
    console.log(FirstNumber);
    Check1=validator(FirstNumber)
    if(Check1){
        document.querySelector("#error_1").innerText=""
    }
    else{
        document.querySelector('#error_1').innerText="Giá trị của số thứ nhất phải là số";
        document.querySelector('#result').value='';
        document.querySelector('#success').innerText=''
    }
}

var SecondNumberElement = document.querySelector('#second-number')
SecondNumberElement.oninput=function(e){
    SecondNumber=e.target.value;
    console.log(SecondNumber);
    Check2=validator(SecondNumber)
    if(Check2){
        document.querySelector("#error_2").innerText=""
    }
    else{
        document.querySelector('#result').value='';
        document.querySelector('#error_2').innerText="Giá trị của số thứ hai phải là số";
        document.querySelector('#success').innerText=''
    }
}


var CalculateElement=document.querySelector('.Calculate');
CalculateElement.onclick =function(e){
    var type=document.querySelector('input[name=choose]:checked')
    Choose=type.value;
    if(Check1&&Check2){
        if(Choose=="add"){
            result=Number(FirstNumber)+Number(SecondNumber);
        }
        else if(Choose=="sub"){
            result=FirstNumber - SecondNumber;
        }
        else if(Choose=="mul"){
            result=FirstNumber * SecondNumber;
        }
        else if(Choose=="div"){
            result=FirstNumber / SecondNumber;
        }
        console.log(result)
        document.querySelector('#success').innerText="Thành công!";
        document.querySelector('#result').value=result;
    }

}

