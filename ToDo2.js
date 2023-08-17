const textfield=document.getElementById("textfield");
const contents=document.getElementById("contents"); 
const Addbtn=document.getElementById("btn");


Addbtn.addEventListener("click",function(){
    
    if(textfield.value==""){
        alert("Enter some activities!");
    }
    else{
var paragraph=document.createElement("div")
    paragraph.id="p";
    paragraph.innerHTML=textfield.value;
    contents.appendChild(paragraph);
    textfield.value="";
    var check=document.createElement("div");
        check.id="check";
        check.innerHTML="&#10004";
var button=document.createElement("button");
    button.textContent="Remove";
    button.className="deletebtn";
    paragraph.insertAdjacentElement('afterend',button);
var done=document.createElement("button");
    done.textContent="Done";
    done.className="donebtn";
    paragraph.insertAdjacentElement('afterend',done);

        

 
}
    
button.addEventListener("click",function(){
    contents.removeChild(paragraph);
    contents.removeChild(button);
    contents.removeChild(done);



})
done.addEventListener("click",function(){
        if(done.textContent=="Done"){
            // paragraph.style.textDecoration="line-through";
            done.textContent="Undo";
            paragraph.appendChild(check);
            

            
           
        }
            else{
                //paragraph.style.textDecoration="none";
                done.textContent="Done";
                paragraph.removeChild(check);
            
                
               
               }
        
            
            
            })
           


        })
    


textfield.addEventListener("keypress",function(event){
    if(event.key=="Enter"){
        if(textfield.value==""){
            alert("Enter some activities!");
        }
        else{
    var paragraph=document.createElement("div")
        paragraph.id="p";
        paragraph.innerHTML=textfield.value;
        contents.appendChild(paragraph);
        textfield.value="";
        var check=document.createElement("div");
            check.id="check";
            check.innerHTML="&#10004";
    var button=document.createElement("button");
        button.textContent="Remove";
        button.className="deletebtn";
        paragraph.insertAdjacentElement('afterend',button);
    var done=document.createElement("button");
        done.textContent="Done";
        done.className="donebtn";
        paragraph.insertAdjacentElement('afterend',done);
    
            
    
     
    }
        
    button.addEventListener("click",function(){
        contents.removeChild(paragraph);
        contents.removeChild(button);
        contents.removeChild(done);
    
    
    
    })
    done.addEventListener("click",function(){
            if(done.textContent=="Done"){
                // paragraph.style.textDecoration="line-through";
                done.textContent="Undo";
                paragraph.appendChild(check);
                p.style.backgroundColor="rgba(255, 255, 255, 0.366)";
    
                
               
            }
                else{
                    paragraph.style.textDecoration="none";
                    done.textContent="Done";
                    paragraph.removeChild(check);
                    p.style.backgroundColor="#2c5364";
                    
                   
                   }
            
                
                
                })
               
    
    
            }})

    
  
    
