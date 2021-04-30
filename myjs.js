var i = 0;
function add(){
    let input = document.getElementById('add-item');
    if(input.value == ""){
        alert('Input is Empty');
    }else{
        let div_elem = document.createElement('div');
        div_elem.setAttribute('class','item');
        div_elem.setAttribute('id',i++);
        let p_elem = document.createElement("p");
        let i_elem = document.createElement('i');
        i_elem.setAttribute('class','fa fa-trash-alt');
        i_elem.setAttribute('onclick',"removeElement(this)")
        let text_node = document.createTextNode(input.value);
        let data = div_elem.appendChild(p_elem);
        data.appendChild(text_node);
        div_elem.appendChild(i_elem);
        document.getElementsByClassName('items')[0].appendChild(div_elem);
        input.value = "";
    }
}

function removeElement(x){
    let parent_id_name = x.parentElement.id;
    let item = document.getElementById(parent_id_name);
    item.remove();
    
}
