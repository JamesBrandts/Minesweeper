export default function   Reveal(arr,i:number) {    
  let temp = [...arr];
  if(i<0)return temp;
  if(i>=temp.length)return temp;
  if(temp[i].revealed)return temp;
  temp[i].revealed = true
  if(temp[i].content === ''){
    if(i%10) Reveal(temp,i-1)
    if(i%10 != 9) Reveal(temp,i+1)
    Reveal(temp,i-10)
    Reveal(temp,i+10)
    if(i%10)Reveal(arr,i-11)
    if(i%10 != 9)Reveal(temp,i+11)
    if(i%10 != 9)Reveal(temp,i-9)
    if(i%10)Reveal(temp,i+9)
  }
  return temp;
};
