console.log("hi");
let ch=document.querySelectorAll(".bchoices");
let win=document.querySelector("#w");
let won=0;
let w=false;
let j=0;
let n=3;
let a = Array.from({ length: n }, () => Array(n).fill(''));
let b=[];
let ri=[];
let rj=[];
real();
realcon();
ch.forEach((i)=>{
  i.onclick= ()=>{
    console.log("hiii",i.getAttribute("id"),j,a,won);
    you(i,a);
    calsi(a);
    if(!w && won==n*n)
    {
      win.innerText="DRAW";
      w=true;
    }
     if(w){
      console.log("win");
      ch.forEach((i) => {
        i.onclick = null;
       });
     }
  }
});
function you(i,a){
      if(j%2==0 && i.innerText!="X" && i.innerText!="O"){
    i.innerText="X";
    win.innerText="player - O"
    asign(i,"X",a)
    j++;
    won++;
    }
    else if(i.innerText!="X" && i.innerText!="O"){
      i.innerText="O";
      win.innerText="player - X"
      asign(i,"O",a)
      j++;
      won++;
    }
    
}
function real(){
  y=n;
  b[0]=0;
  for(let x=1;x<(n**2)-1;x++){
      b[x]=y;
      y+=3;
  }
 // console.log("hiiiii",b);
}
function realcon(){
  for(let x=0;x<n;x++)
  {
    for(let y=0;y<n;y++)
    {
    if (x==y){
      ri[b[0]]=x;
      rj[b[0]]=y;
      b[0]++;
    }
    if(x+y==n-1){
      ri[b[1]]=x;
      rj[b[1]]=y;
      b[1]++;
    }
     ri[b[x+2]]=x;
     rj[b[x+2]]=y;
     ri[b[x+2+n]]=y;
     rj[b[x+2+n]]=x;
      b[x+2]++;
      b[x+2+n]++;
    }
  }
 // console.log("hii",ri,rj);
  let u=0;
  let t=0;
   for(let z=0;z<(n**2)-1;z++){ 
     u=z*n;
   //  console.log(`z = ${z} u = ${u} `);
     for(let x=0;x<n;x++){
       for(let y=0;y<n;y++){
         if(ri[u]==x && rj[u]==y){
       //    console.log(ri[u]+""+rj[u]);
           u++;
           if(u==(z+1)*n){
             x=n;
             y=n;
           }
         }
         } } }
}
function asign(i,xo,a){
  let u=0;
  for(let x=0;x<n;x++){
    for(let y=0;y<n;y++){
      if(i.getAttribute("id")=="b"+u){
        a[x][y]=xo;
      }
      u++;}}
}
function calsi(a){
  let u=0;
   for(let z=0;z<(n**2)-1;z++){ 
     u=z*n;
     let xx=0;
     let oo=0;
     for(let x=0;x<n;x++){
       for(let y=0;y<n;y++){
         if(ri[u]==x && rj[u]==y){
           if(a[x][y]=="X")
           {
             xx++;
             //console.log(a[x][y],xx);
             wrn(xx,"X");
           }
           else if(a[x][y]=="O")
           {
             oo++;
             wrn(oo,"O");
           }
           u++;
           if(u==(z+1)*n){
             x=n;
             y=n;
           }
         }
         } } }
}
function wrn(v,ox){
  if (v==n){
    win.innerText=`${ox} - win`;
    w=true;

  }
}