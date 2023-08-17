const textfield=document.getElementById("textfield");
const contents=document.getElementById("contents"); 
const Addbtn=document.getElementById("btn");


Addbtn.addEventListener("click",function(){
    if(textfield.value==""){
        alert("Enter some activities!");//field validation
    }
    else{
    var paragraph=document.createElement("p");
    paragraph.innerHTML=textfield.value;
    contents.appendChild(paragraph);
    textfield.value="";
var button=document.createElement("button");
    button.textContent="Remove";
    button.className="deletebtn";
    contents.appendChild(button);
var done=document.createElement("button");
    done.textContent="Done";
    done.className="donebtn";
    contents.appendChild(done);
}
    
button.addEventListener("click",function(){
    contents.removeChild(paragraph);
    contents.removeChild(button);
    contents.removeChild(done);


})
    done.addEventListener("click",function(){
        paragraph.style.textDecoration="line-through";
        done.textContent="Undone";
        done.addEventListener("click",function(){
            paragraph.style.textDecoration="none";
            done.textContent="Done";
        })
    
    
    })


})
textfield.addEventListener("keypress",function(event){//making enter key
    if(event.key=="Enter"){
        if(textfield.value==""){
            alert("Enter some activities!");
        }
        else{
        var paragraph=document.createElement("p");
        paragraph.innerHTML=textfield.value;
        contents.appendChild(paragraph);
        var button=document.createElement("button");
        button.textContent="Delete";
        button.className="deletebtn";
        
        contents.appendChild(button);
        textfield.value="";}
        button.addEventListener("click",function(){
            contents.removeChild(paragraph);
            contents.removeChild(button);

    })
}})


    
    

    
  
    
