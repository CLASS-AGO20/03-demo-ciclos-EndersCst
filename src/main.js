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
contarImparesFor(inicio, fin){    //en realidad el inicio siempre debe ser más pequeño
let impares = 0;

if(inicio > fin){
                                  //variable temporal "t" para guardar el valor de inicio
    let t =inicio;
    inicio = fin;
    fin = t;                     //invertimos el inicio, a fin le paso el valor de inicio porque se pierde el valor (fijese en la línea 46)
}
//                          i= i + 1
for(let i = inicio; i<=fin; i++){
    if(i%2 != 0){
                   
        impares++;               //es lo mismo que impares = impares + 1
    }
}
return  impares;
}

//ejercicio3
sumarParesWhile(){
let i = 1;                                                 //definición de variables
let suma = 0;

    while(i<= 20){                                         //condición
        if(i%2===0){             //Si i es par, lo agregamos a la suma 
            suma = suma + i;
        }
                                 //Hasta aquí i nunca va a llegar a 20, lo que provocará un bucle infinito. Para eso agregaremos "i = i + 1" ó "i++""
    i = i + 1;                                             //incremento o expresión de actualización
}
return suma;
}

//ejercicio4
contarImparesWhile(inicio, fin){
    let i = inicio;
    let impares = 0;

    while( i <= fin){
        
        if (i%2 != 0) {
            impares++;
        }
        
        i++;
    }

return impares;
}
}
let app = new App();


app.sumarParesFor();
app.restarparesFor();


console.log(app.sumarParesFor());
console.log(app.sumarParesFor());


console.log(app.contarImparesFor(5, 11));                   //el inicio es más pequeño que el final
console.log(app.contarImparesFor(11,5));                    //el inicio es más grande que el final y da 0


console.log(app.sumarParesWhile());


console.log(app.contarImparesWhile(5, 11));