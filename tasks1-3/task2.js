function addOneToTheStartAndToTheEnd(n) {
    var arr=[];
    while(n) {
        arr[arr.length]=n%10;
        n=parseInt(n/10);
    }
    var arrReverse=arr.reverse();
    arrReverse.unshift(1);
    arrReverse.push(1);
    
    return parseInt(arrReverse.join(''));
}

console.log(addOneToTheStartAndToTheEnd(54524));