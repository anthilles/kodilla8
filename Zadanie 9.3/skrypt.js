var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.',
    dinosaur = 'triceratops',
    BigDinosaur = dinosaur.toUpperCase();

var changeDino = text.replace('Velociraptor',BigDinosaur);

var SliceDino = changeDino.slice(0,text.length/2);

console.log(SliceDino);

