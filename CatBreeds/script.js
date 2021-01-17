
      //Function to fetch api
      async function catData(){
          try{
        let x = await fetch("https://api.thecatapi.com/v1/breeds?limit=67&api_key=85a781d1-220a-4aad-ba3d-7a0406aa2b4b");
        let data=await x.json()
        console.log(data)
        displayData(data);
          }
          catch{
              console.log("url is not accessible")
          }
        }
        
  
        //Function to display data
        function displayData(data){  
            
         let body=document.getElementById("body")
         body.innerText=""
         document.getElementById("display").style.display='none';
         for(let i=0;i<50;i++){
             let card = createElement('div');
             setAttribute(card, 'class', 'card card m-2 col-md-4 col-lg-3 col-sm-4 col-xs-12');
             appendChild(body, card);
     
             //Image
             let imgdiv=createElement("div")
             appendChild(card,imgdiv)
             let img = createElement('img');
             img.src = data[i].image.url;
             setAttribute(img, 'class', 'card-img-top');
             appendChild(imgdiv, img);
     
             let cardBody = createElement('div');
             setAttribute(cardBody, 'class', 'card-body text-center');
             appendChild(card, cardBody);
     
              //Cat name
             let recipeNameDiv=createElement("div")
             setAttribute(recipeNameDiv,"class","card-title")
             recipeNameDiv.innerHTML=`<b>${data[i].name}</b>`
             appendChild(cardBody,recipeNameDiv)
     
             let c=createElement("div")
             c.innerHTML="<br>"
             appendChild(cardBody,c)
     
            //To display orgin
             let originDiv = createElement('div');
             appendChild(cardBody, originDiv);
         
             let originLabel = createElement('strong');
             originLabel.innerText = 'Origin : ';
             appendChild(originDiv, originLabel);
         
             let orgin = createElement('span');
             orgin.innerText = data[i].origin
             appendChild(originDiv, orgin);

             let b=createElement("div")
             b.innerHTML="<br>"
             appendChild(cardBody,b)
     
     
     
             //Modal portion
             
             let ingredient=createElement("button")
             setAttribute(ingredient,"class","btn btn-outline-secondary")
             setAttribute(ingredient,"data-toggle","modal")
             setAttribute(ingredient,"data-target",`#exampleModal${i}`)   //#exampleModal${i}
             ingredient.innerHTML="<b>More details</b>"
             appendChild(cardBody,ingredient)
     
             let modalfade=createElement("div")
             setAttribute(modalfade,"class","modal fade")
             setAttribute(modalfade,"id",`exampleModal${i}`)
             setAttribute(modalfade,"tabindex","-1")
             setAttribute(modalfade,"role","dialog")
             setAttribute(modalfade,"aria-labelledby","exampleModalCenterTitle")
             setAttribute(modalfade,"aria-hidden","true")
     
             appendChild(cardBody,modalfade)
     
             let modeldialog=createElement("div")
             setAttribute(modeldialog,"class","modal-dialog modal-dialog-centered")
             setAttribute(modeldialog,"role","document")
             appendChild(modalfade,modeldialog)
     
             let divcontent=createElement("div")
             setAttribute(divcontent,"class","modal-content")
             appendChild(modeldialog,divcontent)
     
             let modalheader=createElement("div")
             setAttribute(modalheader,"class","modal-header")
             appendChild(divcontent,modalheader)
     
             let modaltitle=createElement("h5")
             setAttribute(modaltitle,"class","modal-title")
             setAttribute(modaltitle,"id","exampleModalLongTitle")
             modaltitle.innerHTML=`<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${data[i].name}</b>`
             appendChild(modalheader,modaltitle)
     
             let buttons=createElement("button")
             setAttribute(buttons,"type","button")
             setAttribute(buttons,"class","close")
             setAttribute(buttons,"data-dismiss","modal")
             setAttribute(buttons,"aria-label","Close")
             appendChild(modaltitle,buttons)
     
             let span=createElement("span")
             setAttribute(span,"aria-hidden","true")
             span.innerHTML="&times;"
             appendChild(buttons,span)
     
             let modalbody=createElement("modal-body")
             modalbody.innerHTML=`<br><br>
             <span>Life-Span:</span> 
            <b> ${data[i].life_span}<b>
             <br><br>
             <h5>Description:</h5>
             ${data[i].description}
             <br><br>
             <button type="button" class="btn btn-outline-warning" ><a href=${data[i].wikipedia_url}>Get more on Wikipedia</a></button>
            
             `
             appendChild(modaltitle,modalbody)
     
         }
     
     
     
     }
     
     //Dom-fucntion
     
     function createElement(ele){
         return document.createElement(ele)
     }
     
     function setAttribute(ele,attr,value){
         return ele.setAttribute(attr,value)
     }
     
     function appendChild(ele,child){
         return ele.appendChild(child)
     }
     
     function append(ele){
         return document.body.append(ele)
     }