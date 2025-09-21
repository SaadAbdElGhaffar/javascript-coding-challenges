let st = "Elzero web School";

if (st[st.toLowerCase().indexOf("w")] === "w") {
    console.log("Good");
  }

  if (typeof +st !== "string") {
    console.log("Good");
  }

  if (typeof +st === "number") {
    console.log("Good");
  }
  if (st.split(" ")[+false].repeat(2) === "ElzeroElzero") {
    console.log("Good");
  }
