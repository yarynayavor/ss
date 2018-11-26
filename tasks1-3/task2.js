module.exports= {
    addOneToTheStartAndToTheEnd:(n)=> {
        let arr=[];
         while(n) {
             arr.push(n%10);
             n=parseInt(n/10);
         }
         let arrReverse=arr.reverse();
         let finalArr=[1,...arrReverse,1];
     
         return finalArr.reduce((a,b)=> a+b,'');
     }
}