const input_item= document.getElementById('search-i');
console.log(input_item);
const dropdown_items=document.querySelectorAll('.dropdown li');
console.log(dropdown_items);
console.log(dropdown_items[0].innerText.toLowerCase())
console.log(input_item.value.toLowerCase());

function searchItem (){
    for (let i = 0; i< dropdown_items.length; i++){
        dropdown_items[i].style.display="none";
        if(dropdown_items[i].innerText.toLowerCase().includes(input_item.value.toLowerCase())){
        /*show all dropdown_items included in input_item */
            dropdown_items[i].style.display="block";
        }else{
            dropdown_items[i].style.display="none";
        }
    }

}

input_item.addEventListener('input', searchItem)
