
function sum(op1, op2, op3){
    const resultado= op1+op2+op3;
    return resultado;    
}

function mult(op1, op2){
    const resultado= op1*op2
    return resultado
}
function subs(op1, op2){
    const resultado= op1-op2
    return resultado
}
function div(op1,op2){
    const resultado= op1/op2
    return resultado
}

function pot(op1,op2){
    const resultado= math.pow(op1,op2)
    return resultado
}  

module.exports={mult,subs,div,pot
}
