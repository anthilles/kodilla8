//Dwie tablice z imionami
var femaleNames = ['Asia','Kasia','Ola','Jola']
var maleNames = ['Piotrek','Marek','Arek','Jarek']
//Połączenie tablic - CONCAT
var allNames = femaleNames.concat(maleNames);
//Nowe dodawane imie
var newName = 'Marian';
//Sprawdzenie czy newName jest w połączonej tablicy oraz dodanie/wyrzucenie błędu
if (allNames.indexOf(newName) === -1){
    var nowyMarian = allNames.push(newName);
    console.log(allNames);
}else{
    console.log('Marian znajduje się już na liście');
}

