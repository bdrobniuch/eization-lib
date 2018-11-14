let  tab1= [    
    [["C-","F7"],
    ["D-","G7"]],
    [["6"],
    ["9"]],
    [["b9"],
    ["13"],
    ["9"]]
  ];

let tab2= [
  [["C"],["D"],["E"]],
  [["Maj"],["min"],["7"]]
];
  

function parse(t) {
  let tab=[[]];
  t.forEach((e,i)=> {
    let tempt=[];
    tab.forEach((t1e)=>{
        //tutaj shuffle jesli trzeba
        e.forEach((t2e)=>{
          tempt.push(t1e.concat([t2e]));
        });  
    });
    tab= tempt;
  });
  console.log(tab);
}

parse(tab1);
parse(tab2);

let object1 =
[
  {
    t: 0,
    col: 0,
  },
  {
    t: 1,
    col: 0,
  },
  {
    t: 0,
    col: 1,
  },
  {
    t: 2,
    col: 0,
  }
];

function print(out) {
  out.forEach((line) => {
    let sum= "";
    line.forEach((elem) => {
      sum += elem;
    });
    console.log(sum);
    });
};


//print(output);
