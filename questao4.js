
let vetor=[10, 50, 15, 100, 09];
let semValor
let achou = true;


function inicio(){

    while (achou) {
        achou=false
        for(i=0; i<4; i++){
            if(vetor[i]>vetor[i+1]){
                semValor=vetor[i]
                vetor[i]=vetor[i+1]
                vetor[i+1]=semValor
                achou=true
            }
        }
    }

    for(i=0;i<5;i++){

        console.log(vetor[i]+"\n")
    }



}
console.log(inicio())