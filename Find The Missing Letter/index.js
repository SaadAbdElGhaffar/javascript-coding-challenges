function find_missing_letter_in(letters){  
  let l =   `abcdefghijklmnopqrstuvwxyz`;
  let s=0;
  for(let i = 0;i < 26;i++)
  {
    if(letters[0]===l[i])
    {
        s=i;
        break;
    }
  }
  let lettersmissing=`No Missing Letter In Sequence`;
  for(let i = 0;i < letters.length;i++)
  {
if(letters[i]!==l[s+i])
{
    lettersmissing=l[s+i];
    break;
}
  }

    return lettersmissing };



// # Testing Ouput
console.log(find_missing_letter_in("abcdeghi"))
//  # f
console.log(find_missing_letter_in("defgi")) 
// # h
console.log(find_missing_letter_in("xyz"))
//  # No Missing Letter In Sequence