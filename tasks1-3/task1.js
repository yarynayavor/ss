//88 в)
function replaceFirstLastN(n) {
    var result=n;
    if(n>9) {
        var arr=[];
        while(n) {
            arr[arr.length]=n%10;
            n=parseInt(n/10);
        }
        var arrReverse=arr.reverse();
        var first=arrReverse[0];
        var last=arrReverse[arrReverse.length-1];
        arrReverse[0]=last;
        arrReverse[arrReverse.length-1]=first;
        result=parseInt(arrReverse.join(''));
    }
    return result;
}

console.log(replaceFirstLastN(54524));
