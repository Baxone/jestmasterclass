function adding(pNumberA, pNumberB)
{
   
    if( !isNaN(Number(pNumberA)) && !isNaN(Number(pNumberB)) ){
        return pNumberA + pNumberB;
    }
    else{
        return "input values are not numeric";
    }
}



module.exports = adding;