function formList() {
	// store user value
    // create a text node from the user input
	var item1    = document.getElementById("formInput1").value	
	var item2    = document.getElementById('formInput2').value
	var item3    = document.getElementById('formInput3').value
	var item4    = document.getElementById('formInput4').value
	var item5    = document.getElementById('formInput5').value
	var item6    = document.getElementById('formInput6').value		

    // create a text form
	var text1    = document.createTextNode(item1)
	var text2    = document.createTextNode("   "+item2)
	var text3	 = document.createTextNode("  Subject: "+item3)
	var text4	 = document.createTextNode("  Score:  "+item4)
	var text5	 = document.createTextNode("  Midterm:  "+item5)
	var text6	 = document.createTextNode("  Final:  "+item6+"  ")	
	
	var all= parseFloat(item4)+parseFloat(item5)+parseFloat(item6);
	var text7	 = document.createTextNode("  Total: " +all+"  ")
        
    // create a li tag    
	var newItem = document.createElement('li')
	
    // add the user input to the li tag
	newItem.appendChild(text1)
    newItem.appendChild(text2)
	newItem.appendChild(text3)
	newItem.appendChild(text4)
	newItem.appendChild(text5)
	newItem.appendChild(text6)
	newItem.appendChild(text7)
	
        

	if(all>=80){
			newItem.appendChild(document.createTextNode("You Got Grade A"));
		}
		else if(all>=70){
			newItem.appendChild(document.createTextNode("You Got Grade B"));		
		}
		else if(all>=60){
			newItem.appendChild(document.createTextNode("You Got Grade C"));
		}
		else if(all>=50){
			newItem.appendChild(document.createTextNode("You Got Grade D"));

		}
		else if(all<=49){
			newItem.appendChild(document.createTextNode("You Got Grade F"));
		}



	// append the li to the html formList id tag
   
	document.getElementById('formList').appendChild(newItem)
    
}
function reset(){
    const galleryElem = document.querySelector("#formList");
    galleryElem.innerHTML = ' ';  
    del();      
}
function del(){
    const tor1 = document.getElementById('formInput1').value = '';
    const tor2 = document.getElementById('formInput2').value = '';
    const tor3 = document.getElementById('formInput3').value = '';
    const tor4 = document.getElementById('formInput4').value = '';
    const tor5 = document.getElementById('formInput5').value = '';
    const tor6 = document.getElementById('formInput6').value = '';
    tor1.innerHTML = '' ;
    tor2.innerHTML = '' ;
    tor3.innerHTML = '' ;
    tor4.innerHTML = '' ;
    tor5.innerHTML = '' ;
    tor6.innerHTML = '' ;
}