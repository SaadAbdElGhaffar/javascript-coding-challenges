function createArray(s,e)
{let arr=[];
    for(let i = s; i <= e;i++)
    { //Skip for number 8
        if(i===8)
        {continue;};
         arr.push(i);
    }

    console.log(arr);
}

// Input
createArray(5, 10);

// Output[5, 6, 7, 9, 10]