function findXyzt(n) {
    var x=parseInt(Math.sqrt(n));
    var y=0,z=0,t=0;
    
    if((n-x*x)>0) {
        y=parseInt(Math.sqrt(n-x*x));
        if(n-x*x-y*y>0) {
            z=parseInt(Math.sqrt(n-x*x-y*y));
            if(n-x*x-y*y-z*z>0) {
                t=parseInt(Math.sqrt(n-x*x-y*y-z*z));
            }
        } 
    } 
    console.log("x = "+x+"\ny = "+y+"\nz = "+z+"\nt = "+t);
}

findXyzt(1545744);