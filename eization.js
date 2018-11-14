let  tab1= [    
    {shuffle: false, list: [ ["C-","F7"] , ["D-","G7"] ]},
    {shuffle: true, list: [ ["6"] , ["9"] ]},
    {shuffle: true, list: [ ["b9"] , ["13"], ["9"] ]}
  ];

let tab2= [
  [["C"],["D"],["E"]],
  [["Maj"],["min"],["7"]]
];
  
/*
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
*/

class Shuffle {
  constructor (exe) {
    if (exe.shuffle) {
      this.list = exe.list.slice();

      for (let i = this.list.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.list[i], this.list[j]] = [this.list[j], this.list[i]];
      }

    } else
    {
      this.list = exe.list;
    }
  }
}

class Practice {
  constructor (ex,tp) {
    let tab=[[]];
    ex.forEach((e)=> {
      let tempt=[];
      tab.forEach((t1e)=>{
        let es = new Shuffle(e);
        es.list.forEach((t2e)=>{
          tempt.push(t1e.concat([t2e]));
        });  
      });
      tab= tempt;
    });

    //obraz
    let out = [];
    tab.forEach((t1e)=>{
      let line = [];
      tp.forEach((t2e)=>{
        line.push(t1e[t2e.tab][t2e.col]);
      });
      out.push(line);
    });
    this.output = out;
  }
}



let object1 =
[
  {
    tab: 0,
    col: 0,
  },
  {
    tab: 1,
    col: 0,
  },
  {
    tab: 0,
    col: 1,
  },
  {
    tab: 2,
    col: 0,
  }
];

let p1 = new Practice(tab1,object1);
console.log(p1.output);

