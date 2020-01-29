var fraction = {
    numerator : Number,
    denominator : Number,
    input: function(a, b)   {
        this.numerator = a,
        this.denominator = b
    }
}

function gcd(a, b) {
    if (a === 0)
        return b
    return gcd(b%a, a)
}

const lowest = function(den3, num3)  {  
    const common_factor = gcd(num3, den3);   
    den3 = den3/common_factor  
    num3 = num3/common_factor
    var ret = new fraction.input(num3, den3)
    return ret
}

const addFraction = function(n1, n2)     {
    var n3 = new fraction.input(0, 1)
    n3.denominator = gcd(n1.denominator, n2.denominator)
    n3.denominator = (n1.denominator * n2.denominator)/n3.denominator
    n3.numerator = (n1.numerator) * (n3.denominator/n1.denominator) + (n2.numerator) * (n3.denominator/n2.denominator)
    return n3
}  

const addFractionArray = function(array, n, sum)     {
    if(n == 0)
        return 0
    sum = addFraction(sum, array[n-1])
    if(n==1)    {
        sum = lowest(sum.denominator, sum.numerator)
        for(var i = 0; i < array.length; i++)  {
            if(i != array.length-1)
                process.stdout.write(array[i].numerator + "   ");
            else
                process.stdout.write(array[i].numerator + "   " + sum.numerator);
        }
        console.log()

        for(var j = 0; j < array.length+1; j++)  {
            if(j == array.length)
                process.stdout.write("- = --");
            else if(j < array.length-1)
                process.stdout.write("- + ");
        }
        console.log()

        for(var i = 0; i < array.length; i++)  {
            if(i != array.length-1)
                process.stdout.write(array[i].denominator + "   ");
            else
                process.stdout.write(array[i].denominator + "   " + sum.denominator);
        }
        console.log()
        console.log()
    }
    addFractionArray(array, n-1, sum)
}

module.exports = {
    fraction : fraction,
    addFraction : addFraction,
    addFractionArray : addFractionArray
}