module.exports= {
    replaceFirstLastN: (n) => {
        let num=n;
        let k=1;
        let lastNumber=n%10;
        while(num>10) {
            num/=10;
            k*=10;
        }
        let firstNumber=num-num%1;
        let result=lastNumber*k+n%k-(lastNumber*k+n%k)%10+firstNumber;
        return result;
    }
}