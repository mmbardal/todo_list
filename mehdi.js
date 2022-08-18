





//api 

fetch(URL='https://api.openweathermap.org/data/2.5/weather?lat=35.7219&lon=51.3347&appid=b50e7346336505f64018045e66cb159b')
    .then(res=>res.json())
    .then(data=>logdata(data))
function logdata(data)
{
    
    document.getElementById('des').textContent="state : "+data['weather'][0]['description']
    
    document.getElementById('temp').textContent="temp : "+data['main']['temp']
}




//add a task
function adds(){


    //alert box
    



    //add some thing
    let item = document.createElement('li');
    let check = document.createElement('input');

    check.setAttribute("type","checkbox");
    check.classList.add('box')
    item.appendChild(check);







    var info = document.getElementById('info').value;
    if(document.getElementById('info').value=='')
    {
        
        alerter("field is empty");
    }
    else
    {
        
        alerter("add succesfully");
        
        document.getElementById('info').value=null

        //content


        let list = document.querySelector('#list');

        let matn = document.createElement('span');

        
        matn.textContent=info;
        item.appendChild(matn);
        item.id='item';

        list.appendChild(item);
        //console.log(document.getElementById('item').parentElement.nodeName)




        //number of items
        let count =document.querySelectorAll('#item');
        let counter = count.length;
       
        if(counter>0)
        {
            document.getElementById('duties').classList.add('visibility');
            document.getElementById('duties').classList.remove('visiblityhide');
        }
        document.getElementById('total').innerHTML='total item is: '+counter;
        
    }   
}



//delete a task
function del(){

   

    let count =document.querySelectorAll('#item');
    let counter = count.length;
    let helper = counter;
    
    
         // console.log(counter)
         for(let i =0 ;i<counter;i++)
         {
             if(count[i].firstChild.checked)
             {
                 count[i].remove();
             }
         }
         let count2 =document.querySelectorAll('#item');
         let counter2 = count2.length;
         document.getElementById('total').innerHTML='total item is: '+counter2;
         
         if(counter2<1)
         {
             
             document.getElementById('duties').classList.remove('visibility');
             document.getElementById('duties').classList.add('visiblityhide');
         }
         if(helper>counter2)
         {
            alerter("done");
         }
         else
         {
            alerter("you dont choose any task");
         }
         document.getElementById('info').value=null 

    

       
}

//edit a task
function edit()
{
    
    let count =document.querySelectorAll('#item');
    let counter = count.length;
    let helper = 0;
    let index = 0;
    for(let i =0 ;i<counter;i++)
        {
             if(count[i].firstChild.checked)
             {
                 helper++;
                  
                 index=i;  
             }
        }
         
        if(helper>1)
        {
                alerter("you cant edit more than one task");
                return;
                
        }
        if(helper ==0)
        {
             alerter("please choose one task");
        }



        if(helper==1)
        {
            console.log(helper);
            //disabling
            
            const boxes = document.querySelectorAll('.box');

            for (const box of boxes) {
            box.disabled=true;
            }





            document.getElementById('info').value=count[index].lastChild.textContent;
            document.getElementById('sub').removeAttribute('onclick');
            document.getElementById('sub').setAttribute('onclick','editor()');
            document.getElementById('sub').value="edit"
            
                
                   
                        
                

                
            
         }
         
   
}


function editor()
{
    let count =document.querySelectorAll('#item');
    let counter = count.length;
    let helper = 0;
    let index = 0;
    for(let i =0 ;i<counter;i++)
        {
             if(count[i].firstChild.checked)
             {
                 helper++;
                  
                 index=i;  
             }
        }
     //enabling
     
     const boxs = document.querySelectorAll('.box');

     for (const box of boxs) {
     box.disabled=false;
     }
     
     count[index].lastChild.textContent=document.getElementById('info').value;
     document.getElementById('sub').removeAttribute('onclick');
     document.getElementById('sub').setAttribute('onclick','adds()');
     document.getElementById('sub').value="add"
    // document.getElementById('info').value=null;
     alerter("edited");



     return;
}

//done tasks
function done()
{
    let count =document.querySelectorAll('#item');
    let counter = count.length;
    let helper = counter;
    let help_array=new Array();
    
         // console.log(counter)
        for(let i =0 ;i<counter;i++)
         {
             if(count[i].firstChild.checked)
             {
                 help_array.push(count[i]);
                 count[i].remove();
             }
         }
         
         
         let counter2 = document.querySelectorAll('#item').length;
         if(helper>counter2)
         {
            for(let j =0;j<help_array.length;j++)
            {
                 //add some thing
                let item = document.createElement('li');
                let check = document.createElement('input');

                check.setAttribute("type","checkbox");
                check.classList.add('box')
                item.appendChild(check);

                let list = document.querySelector('#list2');

                let matn = document.createElement('span');

                
                matn.textContent=help_array[j].lastChild.textContent;
                
                item.appendChild(matn);
                item.id='item';
                item.firstChild.disabled=true
                item.lastChild.classList.add('decorator')
                list.appendChild(item);
                

            }
            alerter("done");
         }
         else
         {
            alerter("you dont choose any task");
         }




         document.getElementById('info').value=null 
}



//alert box

function close_alert(){
    document.getElementById('error').style.visibility="hidden";
    
}

//show alert
function alerter(message)
{
    document.getElementById('error').classList.remove("fade")
    document.getElementById('error').style.visibility="visible";
    setTimeout(() => {
        document.getElementById('error').className='fade';
      
      }, 5000); // 👈️ time in milliseconds

      document.getElementById('detail').innerHTML=message;
}


