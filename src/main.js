export default class App {
//presentación del ciclo For
    sumarParesFor() {
    for(let i = 1; i<=20; i = i + 1) {
        console.log(i);
    }

    console.log("Terminó el ciclo creciente");
    }
restarparesFor(){
    for (let i = 25; i>=5;i = i-1){
        console.log(i);
    }

    console.log("terminó el ciclo decreciente");
}
//ejercicio1 03a
sumarParesFor(){
    let suma = 0;

    for(let i =1; i<=20; i =i + 1){
        if(i%2 === 0) {
            suma =suma + i;
        }
    }
    return suma;

}
sumarParesFor() {
    let suma = 0;

    for(let i= 0;i <=20; i = i + 2){
        if(i%2 === 0){
            suma = suma +i;
        }
    }
    return suma;
}
//ejercicio2
contarImparesFor(){

}

//ejercicio3
sumarParesWhile(){
let i = 1;
let suma = 0;

    while(i<= 20){
        if(1&2===0){
            suma = suma + i;
        }
    i = i + 1;
}
return suma;
}
}
let app = new App();

app.sumarParesFor();
app.restarparesFor();

console.log(app.sumarParesFor());
console.log(app.sumarParesFor());

console.log(app.sumarParesWhile());