const screen = document.querySelector(".item1")

const btns = document.querySelectorAll("div[type]") // first

const clear = document.querySelector(".item2")

const delet = document.querySelector(".item3")

const equal = document.querySelector(".item18")


const operations = document.querySelectorAll('div[value]')




// clear
clear.addEventListener("click",function(){
    screen.innerText = ""
})

// delete
delet.addEventListener("click",function(){
    let str =  screen.innerText
    let newStr = str.slice(0,str.length -1)
    screen.innerText = ""
    screen.append(newStr)
})

// selection
for(let btn of btns){
     // event
    btn.addEventListener("click",function(){
        let num = btn.innerText
            console.log(num)
            // append
            screen.append(num)
    })
}




let valeur1 = ''
let selectedOp = ''
// operations + x / -
for(let operation of operations){
    operation.addEventListener('click',function(){
        // screen.innerText = ""
        valeur1 = screen.innerText
        screen.innerText = ""
        console.log("valeur1 ===>",valeur1)
        selectedOp = operation.innerText
        screen.innerText =""
        console.log( "selectedOp ==>",selectedOp)

    })
}


// calculation
function calculate(x,op,y){
    if(op === '+'){
     return Number(x )+ Number(y) ;
    }else if (op === '−') {
        return x - y
    } else if (op === '×') {
        return x * y ;
    } else if(op === '÷'){
        if(y == 0){
           return "WE CAN'T DIVIDE BY 0"
        }else{
           return x / y
        }
    }
  }

equal.addEventListener("click",function(){
    let  valeur2 = screen.innerText
    let result = ''
    screen.innerText = ''
    result = calculate(valeur1,selectedOp,valeur2)
    console.log(result)
    return screen.append(result)
})

