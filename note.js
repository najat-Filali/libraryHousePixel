const tab = []; //length-1 == last Index of tab

//delete tab[1]; //supprime la valeur et le remplace par undefined
//tab.push();    //ajout a la fin du tableau
//tab.pop();    //supprime le dernier élément
//tab.unshift(); //ajoute au début
//tab.shift();  //supprime premier élément 
/*
const num = tab.pop(); //récupere l'élément supprimé
const num = tab.push(); //récupere la nouvelle length du tab

console.log(num);   // affiche l'élément supprimé
*/
/* la methode slice()

tab.slice(); //retourne une copie du tab
const tab2 = tab.slice(); 
const tab2 = tab.slice(1); //copie a partir de index 1
tab.slice(1,3)              //tranche de tab 2 éléments a partir d'id1, exclu l'index3
*/

/*la methode indexOf()
const indexItem = tab.indexOf(56); //recupere l'index de cet élément
const t2 = tab.slice(indexItem, indexItem+1) //recupere cet element ds un nouveau tab

*/
/* tableau 2D Tab ds un tab

const map = [
    [0,'ok',0,0,0,0,0,0,0,0], //map index 0
    [0,0,0,0,0,0,0,0,0,0],  // map index 1
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
];
 pour atteindre 'ok':
 map[0][1]; //premier index ==tab genéral 2e index tab ds le tab

 let value = '';
 for (let row of map){  //parcours le 1er tableau 
    for( let col of row){ //parcours le 2e tab
        value += col + ' '; 
    }
    console.log(value)
    value = ''; //reinitialise value
}
// let value pour affichage en ligne 

//maison
const map = [
    [0,0,0,0,0,0,0,0,0,0,0], 
    [0,0,0,0,0,2,0,0,0,0,0],  
    [0,0,0,0,2,2,2,0,0,0,0],
    [0,0,0,2,2,2,2,2,0,0,0],
    [0,0,2,2,2,2,2,2,2,0,0],
    [0,0,1,0,0,0,0,0,1,0,0],
    [0,0,1,0,0,0,0,0,1,0,0],
    [0,0,1,0,0,3,3,0,1,0,0],
    [0,0,1,0,0,3,3,0,1,0,0],
];

let value = '';
 for (let row of map){  
    for( let col of row){ 
        switch (col){
            case 0 : value += " "; break; 
            case 1 : value += "|"; break; 
            case 2 : value += "°"; break; 
            case 3 : value += "#"; break; 
        }
    }
    console.log(value)
    value = ''; 
}



*/