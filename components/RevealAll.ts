export default function   RevealAll(arr) {    
  let temp = [...arr];
  temp.map(i=>i.revealed = true)
  return temp;
};
