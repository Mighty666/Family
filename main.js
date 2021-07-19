var i=0;
reason = ["Family","Maanas Bellamkonda","Jahnavi Bellamkonda","Tanuja Valluri & Chandan Bellamkonda"];
  img=["family.jpg","Maanas 11 years old birthday.jpg","janu.jpg","mummydaddy.jpg"];
function Reasons13(){ 
 i++; document.getElementById("img1").src=img[i];
    document.getElementById("tree1").innerHTML=reason[i];
  if(i==reason.length-1){
    i = 0;
  }
}