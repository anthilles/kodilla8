var add = document.getElementById('addElem'),
    list = document.getElementById('list');

add.addEventListener('click', function(){
    var element = document.createElement('li');
    element.innerHTML = 'item ' + list.getElementsByTagName('li').length;
    list.appendChild(element);
});