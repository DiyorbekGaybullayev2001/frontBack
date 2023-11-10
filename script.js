
let btn = document.getElementById("btn")

btn.onclick = function frontBack(){
    let str = document.getElementById("matn").value
    let text1 = str.charAt(0)
    let text2 =str.charAt(str.length -1)
    let p = document.getElementById("par")

    if(str.length<=1){
      return p.innerHTML=str
    }
    else{
    return p.innerHTML = text2+str.substring(1, str.length -1)+text1
    }
  }
