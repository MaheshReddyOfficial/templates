let day = "wednesday";

 // Here  one thing to remember , when variabe is decleared as string ,we use if(day=== 'monday') here also quetes on monday.. if(day=== monday) this was wrong monday without quotes.
if(day=== 'monday'){
    console.log('mondey');
}else if (day === 'tuesday') {
    console.log('tueday'); 
} else if (day==='wednesday' ||day=== 'thursday'){
      console.log('wednesday amd thursday');  
 }else if (day==='friday'){
    console.log('friday')
 }else if(day=== 'saturday' || day=== 'sunday'){ // else if(day=== 'saturday' ||  'sunday') dont mention like this insted of use this (  else if(day=== 'saturday' || day=== 'sunday')  ).
    console.log('saturday and sunday');
    }else{
        console.log('not a weekend');
}

