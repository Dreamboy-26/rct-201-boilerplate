import { useState } from "react";
import React from "react";
export const useList = (arr:any) => {
    
    const [list,setList]=React.useState(arr)


    const push=(num:number)=>{
        
        list.push(num)
        setList([...list])
    }

    const pop=()=>{
        list.pop(arr)
        setList([...list])
    }

    const reset=()=>{
        setList(arr)
    }

    const clear=()=>{
        setList([])
    }

    const map=(num:Function)=>{

        let data=list.map(num);
        setList(data)
    }

    let check={push,pop,clear,reset,map}
    return {list,check}
};
