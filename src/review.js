import React ,{useState,useEffect }from "react";
import people from "./data";
import './review.css'
import {IoIosArrowForward,IoIosArrowBack} from "react-icons/io";



const Reviews=()=>{
    const[index,setIndex]=useState(3);
    const{name,job,image,text}=people[index];
    const back=()=>{
        setIndex((index)=>{
            let newIndex=index-1;
            if( newIndex===0){
                newIndex=3;
                return newIndex;
            }else{
            return newIndex;
            }
        });
    };
    
    const forward=()=>{
        setIndex((index)=>{
            let newIndex=index+1;
            if(newIndex===3){
                newIndex=0;
                return newIndex;
            }else{
                return newIndex;
            }
        });
    }

    const random=()=>{
        setIndex(()=>{
            let newIndex=Math.floor(Math.random() * 4);
            return newIndex;
        });
    }
return(
<div className="reviewMain">
    <div className="imgDesign">
        <img className="image" alt={name} src={image} />
        <div className="design"></div>
    </div>
    <h3 className="name a">{name}</h3>
    <h4 className="job a">{job}</h4>
    <p className="text a">{text}</p>
    <div className="iconContainer">
       <button className="b" onClick={back}> <IoIosArrowBack className="icon back" /></button>
        <button className="b" onClick={forward}><IoIosArrowForward className="icon forward"/></button>
    </div>
    
    <button className="button" onClick={random}>Surprise me</button>

    

</div>

);
}

export default Reviews;