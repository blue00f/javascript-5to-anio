
const vec=[2,7,5,4,8,10];
let i=0, numero=4;
/*
// primera forma
for(let i=0; i<length; i++){
    if(vec[i]==numero){
        vec.splice(i,1);
    }
}
*/
// segunda forma
do{
    if(vec[i]==numero){
        vec.splice(i,1);
        i=vec.length;
    }
    else{i++}
}while(i<vec.length);
