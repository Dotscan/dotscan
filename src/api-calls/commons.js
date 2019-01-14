// Our address for Alice on the dev chain
export const ALICE = '5CCtQPAYtuDXt6H4WMrn5nFNk4gemkVRD3k1r1mA7YiZLPBq';
export const BOB = '5Gw3s7q4QLkSWwknsiPtjujPv3XM4Trxi5d4PgKMMk3gfGTE';

  export const createWrappertop = (wrapperClass, headline) => {
  const app = document.querySelector('.topbar');
  //创建一个div  
  var div = document.createElement("div");
  div.id = "nodeinfo";
  //为div创建属性class = "viewPoint"  
  var divattr = document.createAttribute("class");
  divattr.value = "nodeinfo";
  //把属性class = "viewPoint"添加到div  
  div.setAttributeNode(divattr);
  app.appendChild(div); 
  const app2 = document.querySelector('#nodeinfo'); 
  const div2 = document.createElement('div');
  div2.classList.add(wrapperClass);
  app2.appendChild(div2);
  return div2
  };	
   
	
  
   export const createWrapper = (NewWrapperClass, Newid, Newclass, ExistingWrapperClass) => {
   const app = document.querySelector(ExistingWrapperClass);
	 //创建一个div  
   var div = document.createElement("div");
   div.id = Newid;
   //为div创建属性class = "viewPoint"  
   var divattr = document.createAttribute("class");
   divattr.value = Newclass;
   //把属性class = "viewPoint"添加到div  
   div.setAttributeNode(divattr);
   div.classList.add(NewWrapperClass);
   app.appendChild(div); 
   return div
   };	

   export const createWrapper2 = (wrapperClass, headline) => {
   const app = document.querySelector('#content-left');
	 //创建一个div  
   var div = document.createElement("div");
   div.id = "blockdetails";
   //为div创建属性class = "viewPoint"  
   var divattr = document.createAttribute("class");
   divattr.value = "blockdetails";
   //把属性class = "viewPoint"添加到div  
   div.setAttributeNode(divattr);
   app.appendChild(div); 
      const app2 = document.querySelector('#blockdetails'); 
   const div2 = document.createElement('div');
   //const head = document.createElement('h2');
   //head.textContent = headline || wrapperClass;
   div2.classList.add(wrapperClass);
   //div.append(head);
   app2.appendChild(div2);
   return div2
   };	

   export const createWrapperSum = (wrapperClass, headline) => {
    const app = document.querySelector('.summary_box');
    //创建一个div  
    var div = document.createElement("div");
    div.id = "last_block";
    //为div创建属性class = "viewPoint"  
    var divattr = document.createAttribute("class");
    divattr.value = "last_block";
    //把属性class = "viewPoint"添加到div  
    div.setAttributeNode(divattr);
    app.appendChild(div); 
       const app2 = document.querySelector('#last_block'); 
    const div2 = document.createElement('div');
    //const head = document.createElement('h2');
    //head.textContent = headline || wrapperClass;
    div2.classList.add(wrapperClass);
    //div.append(head);
    app2.appendChild(div2);
    return div2
    };	
	
export const createElement = (content, element = app, className) => {
  console.log(content);
  const p = document.createElement('p');
  if (className) {
    p.classList.add(className);
  }
  p.innerHTML = content;
  element.append(p);
};

export const createElement2 = (content, element = app, className) => {
 // console.log(content);

  var p=document.createElement("div")
  if (className) {
    p.id=content;
    p.classList.add(className);
  }

  if (className=="BlockNo"){
    p.innerHTML = content;
  }
  else{
    p.innerHTML =content;
  }
  //element.append(p);
	//var list=document.getElementsByClassName("listen-to-blocks")
  element.insertBefore(p,element.childNodes[0]);
  return p
};

