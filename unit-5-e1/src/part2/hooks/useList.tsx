import { useState } from "react";

export const useList = (arr:any) => {
    
    const [list,setList]=useState(arr)


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

    return {list,push,pop,clear,reset,map}
};
