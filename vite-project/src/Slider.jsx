import React,{useState} from "react";
let x = 0;

function Slider() {
    const pictures = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaRaGh-0bWaBIhLrdvi07yq-trgR6CFQPmeQ&usqp=CAU",
                    "https://lh3.googleusercontent.com/hwau7OVWx96XaME5KpRuJ0I_MscrerK6SbRH1UwYHYaxIDQQtn7RZK02LDSfBzCreidFgDsJeXyqDct6EZiH6vsV=w640-h400-e365-rj-sc0x00ffffff",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR28g36aqGcHAFVIk16cprr0ijDMS5Frsqg3d4EWnRW-Pvram3D96oNl0lAoUazCD68cUI&usqp=CAU",
                    "https://images.unsplash.com/photo-1534413298607-48ba59e8a06d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZyZWVkb218ZW58MHx8MHx8&w=1000&q=80",
                    "https://images.unsplash.com/photo-1509888300464-26e2a7bccff4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8Njc3OTI4NXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=420&q=60"
]
const [count, setCount] = useState(pictures[0])  
 function nextPicture(){
   if (x == 4) x = 0
   else x+=1
    setCount(pictures[x])
    console.log(x);
 }
 function prewPicture() {
    if (x == 0) x = 4
   else x-=1
    setCount(pictures[x])
    console.log(x);
 }
 return(
    <div className="slider-div" style={{display: "flex"}}>
        <button onClick={prewPicture} style={{outline:"none"}}> {"<"} </button>
        <div className="slider">
            <img src={count} />
        </div>
        <button onClick={nextPicture} style={{outline:"none"}}> {">"} </button>
    </div>
 )
}
export default Slider;