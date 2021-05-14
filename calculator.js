function sum(a,b){
    return a+b;
}

function res(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function div(a,b){
    if(b==0){
        throw new Error('El Pepe');
    }
    return a/b;
}

module.exports = {sum, res, mul, div};