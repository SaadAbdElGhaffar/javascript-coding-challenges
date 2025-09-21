function status(a,b,c)
{
if(typeof a === "number" && typeof b ==="string" && typeof c ==="boolean")
{
    [a,b,c]=[b,a,c];
}
else if(typeof a === "boolean" && typeof b ==="string" && typeof c ==="number")
{
[a,b,c]=[b,c,a];
}
else if(typeof a === "boolean" && typeof b ==="number" && typeof c ==="string")
{
[a,b,c]=[c,b,a];
}
console.log(`Hello ${a}, Age Is ${b},${c ===true?"Available":"Not Available"} For Hire`);
}
// Tests And Results
status("Osama", 38, true) // "Hello Osama, Age Is 38, Available For Hire"
status(38, "Osama", true) // "Hello Osama, Age Is 38, Available For Hire"
status(true, 38, "Osama") // "Hello Osama, Age Is 38, Available For Hire"
status(false, "Osama", 38) // "Hello Osama, Age Is 38, Not Available For Hire"