async function insertionSort() {
    const elements = document.querySelectorAll(".bars");
    length = elements.length;

    for(let i = 1; i < length; i++){
        let j = i - 1;
        let key = elements[i].style.height;
        elements[i].style.background = 'red';

        await wait(delay);

        while(j >= 0 && (parseInt(elements[j].style.height) > parseInt(key))){
        
            elements[j].style.background = 'red';
            swap(elements[j],elements[j+1])
            j--;

            await wait(delay);

            for(let k = i; k >= 0; k--){
                elements[k].style.background = 'green';
            }
        }
    }    
}
const insertionBtn = document.getElementById("insertion-sort");

insertionBtn.addEventListener("click", async function() {
    await insertionSort();
})
