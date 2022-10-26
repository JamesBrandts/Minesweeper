

export default function Array(bombs:number){
  const arr = []
  for(let i = 0;i<bombs;i++){
    arr.push({content:'💣',revealed:false})
  }
  for(let i = 0;i<100-bombs;i++){
    arr.push({content:'',revealed:false})
  }
  shuffle(arr)
  soma(arr)
  return arr
}

function soma(array){
  array.map((element,i,j)=>{
    let sum = 0;
    if (element.content != '💣'){
      if(array[i-1]?.content === '💣' && i%10)sum++;
      if(array[i+1]?.content=== '💣' && i%10 != 9)sum++;
      if(array[i-10]?.content === '💣')sum++;
      if(array[i+10]?.content === '💣')sum++;
      if(array[i-11]?.content === '💣' && i%10)sum++;
      if(array[i+11]?.content === '💣' && i%10 != 9)sum++;
      if(array[i-9]?.content === '💣' && i%10 != 9)sum++;
      if(array[i+9]?.content === '💣' && i%10)sum++;
      array[i].content = sum ||'';
    }    
  })
}



function shuffle (array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}