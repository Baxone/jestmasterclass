class Calculate{

    constructor(){}

    adding(...numbers)
    {
        let result = 0;
        const arrNumbers = [...numbers];
        arrNumbers.forEach( number => {
            result += number
        });
       return this.checkResult(result);
    }

    substrating(...numbers)
    {
        
        const arrNumbers = [...numbers];
        let result = arrNumbers[0];
        arrNumbers.slice(1,arrNumbers.length).forEach( (number) => {
           result -= number
        });
        return this.checkResult(result)
    }

    checkResult(value)
    {
        if(!isNaN(Number(value)))
        {
            return value;
        }else{
            return 0
        }
    }


}

module.exports = Calculate;