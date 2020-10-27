
document.getElementById('addAmount').addEventListener('click', (()=>{
    if(document.getElementById('newAmount').value.length<=0){
      document.getElementById('amountbudget').innerHTML=0
    }
    else if(document.getElementById('newAmount').value.length>0){
    
    document.getElementById('amountbudget').innerHTML=parseInt(document.getElementById('newAmount').value)+parseInt(document.getElementById('amountbudget').innerHTML)
     //this returns the input as an empty input after clicking the add button
      document.getElementById('newAmount').value=""
    }
  }))   
  
  let btn = document.getElementById('create')
 
  let budget=document.getElementById('amountbudget').innerHTML
  
  console.log(budget)
     
  var count=0
  
   let ev =()=>   btn.addEventListener('click', (()=>{ 
    
   
   console.log(count + " "+ count +"times")
   
   //the variables for nodes, div,time, createlist and cost were used to create each DIV elements
         var node = document.createElement("DIV");
         var div = document.createElement('DIV')
         var cost = document.createElement('DIV')
         var creatTime = document.createElement('DIV')
         var  createListNumber=document.createElement('DIV')
         count=count+1
      //the logic below with the trim() functions ensures cost does not accept a 
      //value of an empty string
      let costValue=document.getElementById('cost').value
         //if(costVtrim()===""){
          // return 0
         
          
         //}
        // costVtrim()===""?count=count-=1:count = count+=1;     
   
         //this indicates the amount added
         document.getElementById('added').innerHTML="Rs. "+costValue + " was added"
         
  let input=document.getElementById('input').value
  let inputTitle=document.getElementById('input').value
  //the regex function below allows only 10 characters to be added to the items input
  //let regex=/(<[A-Za-z0-9 . ]+>|)([A-Za-z0-9 .]{0,10})[A-Za-z0-9 .]*(<\/[A-Za-z0-9 .]+>|).*/
  //if(document.getElementById('input').value.length>10){
   //  input= input.replace(regex, '$1$2$3')
  //}
          div.appendChild(document.createTextNode(input))
        cost.appendChild(document.createTextNode(parseInt(costValue)))
  
  //this is the time function that auto updates the time a bew valie was added
  var time =new Date().getHours() +" :"+new Date().getMinutes()
   //+"\n" + new Date().getDate().toString() + " /" + new Date().getMonth()
  // + " /" + new Date().getFullYear()
  //the commented time functions above can be used if time requires date and year
  
  
  //the time was gotten from the time variable
  creatTime.appendChild(document.createTextNode(time))
  //list was gotten from the count variable
  createListNumber.appendChild(document.createTextNode( document.getElementById('ul').childElementCount + 1))
  
  //the .className and .id indicates the creation of DOM classes and IDs  of indicated variables 
  //createListNumber.className="SN"
  creatTime.className="time"
  div.className="div"
  div.title=inputTitle
  cost.className="cost cost"+count
  cost.id=count
  
  //this create element function below created a button element 
  //and delet vareable created the text to be attached to each button element
    //var button=document.createElement("I");
  // var delet = document.createTextNode('')
    //the text was attached to the button using the function below
    //button.appendChild(delet);
    //the node function, being the parent function was used to append list number, time
    //items, cost and delete button in the order
   // button.className="fa fa-trash"
   
    node.appendChild(createListNumber)
    node.appendChild(creatTime)
    node.appendChild(div);
    node.appendChild(cost)
   // node.append(button)
    //the node function was given a DOM class name of test
    node.className="test"
   node.id="file"
    document.getElementById("ul").appendChild(node);
    //button DOM class name
    //button.className='btndelete fa fa-trash pointer'
   //this empty array funtion was used to push in all cost inputs as strings in array
  var innerHTML=[]
  var divs = document.querySelectorAll('div .cost');
      for (var i = 0; i < divs.length; i++) {
          var id = divs[i].getAttribute('id');
          id;
          if(id.includes(id)){
            var ids = document.getElementById(id).innerHTML
           innerHTML.push(ids)
  
          
          }
  
          //all attribute of id in the above qurySelector as an array
       
      }
      console.log(innerHTML)
      //the innerinnerHTMLnumber was used to conver innerHTML variable from string to number
      var innerHTMLnumber=[]
      for(var str=0; str<innerHTML.length; str++){
       var num= parseInt(innerHTML[str])
        innerHTMLnumber.push(num)
  
      }
  
    //the sum variable used the reduce function to add up 
    //all the values in the iinnerHTMLnumber array
  var sum=innerHTMLnumber.reduce((a, b)=>a+b, 0)
  
  
  console.log(sum)
   document.getElementById('show').innerHTML=sum
  //this function allows the delete button delete it's parent elememt when clicked
  //but i delibrately removed the button using css display="none"
  //ignore all the algorithms in this function as i deactivated the button for some reasons
 /* button.addEventListener('click', (()=>{
  
     var btnRemoved= button.parentElement.remove()
    var deletedLink=button.previousElementSibling.previousElementSibling.previousSibling.previousSibling
    var deletedLinkParent = deletedLink.parentElement
   var deletedLinkParentNextSibling = deletedLinkParent.nextElementSibling
    console.log(deletedLinkParentNextSibling)
    console.log(deletedLink)
   let sib=  parseInt(button.previousElementSibling.innerHTML)
   var newTotal=document.getElementById('total').innerHTML= parseInt(document.getElementById('total').innerHTML)- parseInt(button.previousElementSibling.innerHTML)
   console.log(newTotal)
   document.getElementById('added').innerHTML="N "+parseInt(button.previousElementSibling.innerHTML) + " has been deleted"
   /*var bParent = button.parentElement
  console.log( bParent.previousElementSibling)
  console.log(bParent)
   //var newSum=sum-sib
  //var arrSum =[sum, sib]
  //console.log(arrSum)
       setTimeout(()=>{
       document.getElementById('show').innerHTML=sum
      // innerHTMLnumber.length
      
       }, 2000)
       
       setTimeout(()=>{
       document.getElementById('show').innerHTML="N "+sib + " has been deleted"
      // innerHTMLnumber.length
      
       }, 3000)
       setTimeout(()=>{
       document.getElementById('total').innerHTML=sum-sib
      // innerHTMLnumber.length
      
       }, 3000)
       setTimeout(()=>{
      // document.getElementById('total').innerHTML=" pls click the check button when you are done"
      // innerHTMLnumber.length
      
       }, 3000)
      
       document.getElementById('checkSum').addEventListener('click', (()=>{
        //innerHTMLnumber.push[0]
       if(sum> sib){
       var b= document.getElementById('total').innerHTML=parseInt(document.getElementById('total').innerHTML)-sib
       }
       else if(sum<sib){
        document.getElementById('total').innerHTML=sum
       }
      }))
      
   }))*/
   
  //let total =getElementById('total').innerHTML
  //this function checks for total value if the calculate button is clicked
  document.getElementById('calculate').addEventListener('click', (()=>{
  
      let balance=parseInt(document.getElementById('amountbudget').innerHTML)-parseInt(document.getElementById('total').innerHTML)
      document.getElementById('balance').innerHTML=balance
      if(balance<=10){
        document.getElementById("added").innerHTML="You need to top up your budget :/"
        document.getElementById("added").style.color='red'
      }
      else if(balance>sum){
        document.getElementById("added").innerHTML="Sufficient :D"
        document.getElementById("added").style.color='green'
      }
  }))
  
   document.getElementById('total').innerHTML=sum
  
   document.getElementById('input').value=""
   document.getElementById('cost').value=""
  
      }))
  
  
  /*
      document.getElementById('checkSum').addEventListener('click', (()=>{
        count+=1
       let sum= document.getElementById('show')
      sum.style.display="block"
  sum= document.getElementById('show').innerHTML
   console.log("clicked")
      })
      )
  window.addEventListener('mouseup', (()=>{
    document.getElementById('show').innerHTML=""
    //console.log(ev())
  }))
  */
  ev()
  
  