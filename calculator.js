class Calculator{    /* this is the class*/
    constructor(){
        this.numArr=[]
        this.currentNum=""
        this.result=""
        this.prevResult=""
        this.operation=[]
    }
    add(numOne,numTwo){
        return Number(numOne)+Number(numTwo)
    }
    substract(numOne,numTwo){
        return Number(numOne)-Number(numTwo)
        
    }
    multiply(numOne,numTwo){
        return Number(numOne)*Number(numTwo)

    }
    division(numOne,numTwo){
        return Number(numOne)/Number(numTwo);
    }
    reminder(numOne,numTwo){
        return  Number(numOne)%Number(numTwo);

    }
    setCurrentNum(value){
        this.currentNum+=value
    }
    clearCurrentNum(){
        this.numArr.push(this.currentNum)
        this.currentNum=""
    }
    allClear(){
        this.numArr=[]
        this.currentNum=""
        this.result=""
        this.prevResult=""
        this.operation=[]

    }
    setNumOne(value){
        this.numOne+=value
    }
    setNumTwo(value){
        this.numTwo+=value
    }
    setOperation(operation){
       this.operation.push(operation)  
       this.numArr.push(this.currentNum)
       this.currentNum=""      
    }

    
    changeSign(forNumOne){
        if(forNumOne){
            this.numArr=substring(Number(this.numArr) * -1)
            return
        }
        this.currentNum=substring(Number(this.currentNum)* -1)
        
    }
    undo(forNumOne){
        if(forNumOne){
            this.numArr=this.numArr.substring(0,(this.numArr.length-1))
            return;
        }
        this.currentNum=this.currentNum.substring(0,(this.currentNum.length-1))
    }

}
const signObject={
    ADD:"+"
    ,
    SUBSTRACT:"-",

    MULTIPLY:"x",

    DIVISION:"÷",

    REMINDER:"%"
}







 



const calculator= new Calculator() /*this calculator Object created from Calculator Class and has thouse atributes */

const keyclickhandler =(num)=>{
    calculator.setCurrentNum(num)
    updateMainDisplay()
    updateSecoundarydisplay()
    }

    const updateMainDisplay = ()=>{
        const main=document.getElementById("main-display")
        main.innerText=calculator.currentNum ||0
    }
    const updateSecoundarydisplay=()=>{
        const secoundary=document.getElementById("secoundary-display")
        const newNumArr=[...calculator.numArr]
        const newOperation=[...calculator.operation]
        let innerHTML=""
        while(newNumArr.length !==0){
            const num=newNumArr.shift()
            const operation=newOperation.shift()
            innerHTML+= `${num}<span class="operand">${signObject[operation]?signObject[operation]:""}</span>`
        }
        secoundary.innerHTML=innerHTML
    }
    


    const operandclickhandler=(operation)=>{
        calculator.setOperation(operation)
        console.log(operation)
        updateMainDisplay()
        updateSecoundarydisplay()

    }
    const result=()=>{
        console.log("working")
         if(calculator==null){
            updateMainDisplay()
             
             
         }



        
        calculator.clearCurrentNum()
        
        const newNumArr=[...calculator.numArr]
        const newOperation=[...calculator.operation]
     while(newNumArr.length !== 1){
        const numOne=newNumArr.shift()
        const numTwo=newNumArr.shift()
        const operation=newOperation.shift()
        
    switch(operation){
        case "ADD":
                newNumArr.unshift(calculator.add(numOne,numTwo))
                break;
        case "SUBSTRACT":
                newNumArr.unshift(calculator.substract(numOne,numTwo))
                 break;
        case "MULTIPLY":
              newNumArr.unshift(calculator.multiply(numOne,numTwo));
              break;
        case "DIVISION":
            newNumArr.unshift(calculator.division(numOne,numTwo))
        case "REMINDER":
            newNumArr.unshift(calculator.reminder(numOne,numTwo))
            break;
            

        default:
                 break;
        }
    }    updateSecoundarydisplay()
        const main=document.getElementById("main-display")
        main.innerText=newNumArr[0]

    }
    
    

const actionkeyclickhandler=(action)=>{
    switch(action){
        case 'ALL_CLEAR':
            calculator.allClear()
            break;


         case 'CHANGE_SIGN':
             calculator.changeSign(calculator.operation?false:true)
             break;
             


    }
    updateMainDisplay()
    updateSecoundarydisplay()
    }


    const undoclickhandler=()=>{
        
        calculator.undo(calculator.operation?false:true)
        updateMainDisplay()
        

    }




    function Check(){
        console.log("working")
    }



    function dayThemeClickhandler(){
        console.log("working")
        var daythemeDisplay=document.querySelector(".calc-container");
        var daythemeKeys=document.querySelector(".keypad-container")
        daythemeDisplay.classList.add("day-display")
        daythemeKeys.classList.add("day-keys")

    }
//need to add more functions

    
    
       

    









































