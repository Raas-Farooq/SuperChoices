const choice = document.getElementById('text');

const bestShot = document.getElementById('btn');
const myList = document.querySelector('.list');
const message = document.querySelector('.mes');

let edit = false;
edit_text = '';
console.log("Alhamdulia! Allah(SWT) keep us Strong ande Steadfast");


bestShot.addEventListener('click', (e) => {
    e.preventDefault();

    const num = new Date().getTime().toString();
    const days = new Date().getTime();
    const day = Math.floor(days/(1000 * 60 * 60 * 24))
    console.log("day: ", day);
    if(choice.value && !edit)
    {
        const article = document.createElement('div');
        article.classList.add('article');
        article.style.display = "flex";
        const num_id = document.createAttribute('data-uni');
        num_id.value = num;
        article.setAttributeNode(num_id);
        
 
        article.innerHTML =
        `<p class="golden" style="padding-right:10px">${choice.value}</p>
            <div class="btns" style="position:absolute; right:120px">
                
                <span class="delIt" >
                    
                    <i class="fas fa-trash"></i> 
                </span>
                <span class="edit">
                    
                    <i class="fas fa-user"></i> 
                </span>
            </div>
        </div>`;
    
        myList.appendChild(article);
        setMessage('Success', 'pink');

        AddingLocalStorage(num, choice.value)

        value = '';
        resetIt(value, 'Insert');
        let del;
        article.addEventListener('click', event => {
            console.log("event target: ", event.target);
            console.log("event. current: ", event.currentTarget);
            console.log("classList: ",event.target.classList);


           if(event.target.classList.contains('fa-trash')){
            console.log("yes It contains")
            deleteFun(event);
           }
           else if(event.target.classList.contains('fa-user')){
            editFun(event);
           }
            

        })  
        // del.addEventListener("click", (e) => {
            
            

        // })
    }

    else if(choice.value && edit){
     
        edit_text.textContent = choice.value;
        edit = false;
        setMessage('Congrats! Entered', 'lightGreen')
        resetIt('', 'Insert');
      
    }

    else{
        setMessage("Plz Enter VAlue", 'gold');
    }

})

// Clear All button
const clear = document.querySelector(".clear");

clear.addEventListener('click', (e) => {
    const items = document.querySelectorAll('.article');
    console.log("myList children: ", myList.children);
    console.log("thesea are the items: ",items);
    if(myList.children.length <= 0){
        setMessage('Empty List Jani', 'violet')
    }
    else{
        // second method but it doesn't delete the item which has edited

        // console.log("myList Children: ", myList.children);
        // for(let i=0; i <= myList.children.length; i++){
        //     console.log("each Child: ", myList.children[i])
        //     myList.removeChild(myList.children[i])
        // }
        items.forEach(item => {
            myList.removeChild(item)
        })
        setMessage('Cleaned!', 'purple')
    }
   

})

    const deleteFun = (event) =>{
        const list_item = event.currentTarget;
        myList.removeChild(list_item);
        resetIt('','Insert')
        setMessage('successfully deleted', "orange")
    }

    function editFun(event)
    {    
            edit_text = event.target.parentElement.parentElement.previousElementSibling;
      
            console.log("this is the edit text: ", edit_text);
            choice.value = edit_text.textContent;
            bestShot.textContent = 'Edit';
            edit = true;
            
            //scond method which i learnt in React Section

            // resetIt(present, 'Edit'); 
            // choice.addEventListener('keydown', (e) => {
            //     if(e.keyCode === 13 || e.key === "Enter")
            //     {

            //         const index = Array.from(myList.children).indexOf(currentArticle);
            //         // const text_item = event.target.parentElement.parentElement.previousElementSibling;
            //         let listChildren = myList.children;
            //         console.log("this is the Index: ",index);
            //         text_item = currentArticle.querySelector('.golden');
            //         text_item.textContent = choice.value;
            //         myList.insertBefore(currentArticle, listChildren[index]);
            //         // console.log("Show me something");
            //         // console.log("after Assignment: ", text_item);     
            //     }
            // })
    }
    
        
    function setMessage(mes, col){
        message.innerHTML = mes;
        message.style.background = col;

        setTimeout(() => {
            message.innerHTML = '';
            message.style.background = "none";
        },1000)
    }

    const resetIt = (val, ins) => {
        choice.value = val;
        edit_text = '';
        edit=false;
        btn.textContent = ins;    
    }

 

    function AddingLocalStorage(num, val){
        const list = {id:num, val}
        console.log("this is the list: ",list);
        let choiceList = localStorage.getItem('choices')? JSON.parse(localStorage.getItem('choices')):[];

        console.log("CHoiceList: ", choiceList);
        choiceList.push(list);

        // // JSON.parse(localStorage.getItem(choiceList));
        // localStorage.setItem("choices", JSON.stringify(choiceList));
        // // console.log("LIST: ", list);
    }
  

// Practice

       // localStorage.setItem("key", "patience");
    // localStorage.setItem("golden Rule", "Be Closer to Allah(SWT)");

    // localStorage.setItem("EachDay", JSON.stringify('Putting YOUR All,Growth'));
    // const rule = JSON.parse(localStorage.getItem('EachDay'));