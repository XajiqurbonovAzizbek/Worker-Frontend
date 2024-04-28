import React, { useEffect, useState } from 'react'
import { ListIcon, ListSuccessIcon, ListSuccessMuteIcon, PlusIcon } from '../../assets/icon'
import style from "./search.module.css"
export default function Search() {
    let [list,setList]=useState()
    let [islistItem,setIsListItem]=useState()
    useEffect(()=>{
        let arry=[
            {
                id:0,
                title:"Qayerga",
                drop:[
                    {id:0,title:"Bodomzor metro",drop:"Toshkent shahar, Yunusobod tumani "},
                    {id:1,title:"Bodomzor metro",drop:"Toshkent shahar, Yunusobod tumani "},
                    {id:2,title:"Bodomzor metro",drop:"Toshkent shahar, Yunusobod tumani "},
                ]
            },
            {
                id:1,
                title:"Qayerga",
                drop:[{id:0,title:"Bodomzor metro",drop:"Toshkent shahar, Yunusobod tumani "}]
            },
            {
                id:2,
                title:"Qayerga",
                drop:[
                    {id:0,title:"Bodomzor metro",drop:"Toshkent shahar, Yunusobod tumani "},
                    {id:1,title:"Bodomzor metro",drop:"Toshkent shahar, Yunusobod tumani "},
                    {id:2,title:"Bodomzor metro",drop:"Toshkent shahar, Yunusobod tumani "},
                ]
            },
            {
                id:3,
                title:"Qayerga",
                drop:[
                    {id:0,title:"Bodomzor metro",drop:"Toshkent shahar, Yunusobod tumani "},
                    {id:1,title:"Bodomzor metro",drop:"Toshkent shahar, Yunusobod tumani "},
                    {id:2,title:"Bodomzor metro",drop:"Toshkent shahar, Yunusobod tumani "},
                ]
            },
            {
                id:4,
                title:"Qayerga",
                drop:[{id:0,title:"Bodomzor metro",drop:"Toshkent shahar, Yunusobod tumani "}]
            },
            {
                id:5,
                title:"Qayerga",
                drop:[
                    {id:0,title:"Bodomzor metro",drop:"Toshkent shahar, Yunusobod tumani "},
                    {id:1,title:"Bodomzor metro",drop:"Toshkent shahar, Yunusobod tumani "},
                    {id:2,title:"Bodomzor metro",drop:"Toshkent shahar, Yunusobod tumani "},
                ]
            }
        ]
        if(arry){
            let newArry=arry?.map((item,itemIndex)=>{
                if(itemIndex===0){
                    return {...item,hover:true}
                }
                else{
                    return item
                }
            })
            setList(newArry)
        }
    },[])
    const activeItem=(index)=>{
        let newList=list.map((item,itemIndex)=>{
            if(index === itemIndex && !item?.active){
                setIsListItem(true)
                return {...item,active:true}
            }
            else if(index === itemIndex && item?.active){
                setIsListItem(false)
                return {...item,active:false}
            }
            else{
                return {...item,active:false}
            }
        })
        setList(newList)
    }
    const activeDropItem=(index)=>{
        let newList=list.map((item,itemIndex)=>{
            setIsListItem(false)
            if(item?.active){
                let drop=item?.drop?.map((dropItem,dropIndex)=>{
                    if(index === dropIndex && !dropItem?.active){
                        return {...dropItem,active:true}
                    }
                    else if(index === dropIndex && dropItem?.active){
                        return {...dropItem,active:false}
                    }
                    else{
                        return {...dropItem,active:false}
                    }
                })
                return {...item,active:false,drop}
            }
            else{
                return item
            }
        })
        setList(newList)
    }
    const hoverItem=(index)=>{
        let newArry=list?.map((item,itemIndex)=>{
            if(itemIndex===index){
                return {...item,hover:true}
            }
            else{
                return {...item,hover:false}
            }
        })
        setList(newArry)
    }
    const setDrop=(item)=>{
        let drop=item?.drop?.filter(drop=>drop?.active && drop)
        if(drop.length>0){
            return drop[0]
        }
        else{
            return null
        }
    }
  return (
    <div className='col position-relative p-2 px-3 card rounded-5 shadow-lg' style={{width:"35%"}}>
        <div className='row d-flex align-items-center justify-content-center' style={{height:"15%"}}>
            <div className='card fw-medium border-0 p-1 rounded-3 d-flex flex-row align-items-center shadow-lg' style={{width:"auto",height:"2.5rem",backgroundColor:"rgba(118, 118, 128, 0.12)"}}>
                <div className='p-1 px-4 card border-0 p-1 rounded-3 d-flex align-items-center'>Qidiruv</div>
                <div className='p-1 px-4 border-0 p-1 rounded-3 d-flex align-items-center'>Natijalar</div>
            </div>
        </div>
        <div className='p-1 position-relative card pt-2 pe-2 rounded-4 shadow-lg border-0' style={{height:"70%"}}>
            <ul className={`${style.scrollList} h-100`} style={{listStyleType:"none"}}>
                {
                    list?.map((item,index)=><li key={index} 
                        className='p-3 d-flex justify-content-between border-bottom' 
                        style={{cursor:"pointer"}} 
                        onClick={()=>{activeItem(index)}}
                        onMouseEnter={()=>{hoverItem(index)}}
                        onMouseLeave={()=>{hoverItem("a")}}
                        >
                        {   
                            setDrop(item) ? 
                                <div className='d-flex align-items-center gap-1'>
                                     <ListSuccessIcon/>
                                     <div>
                                         {item?.title}
                                     </div>
                                </div> : 
                                <div className='d-flex align-items-center gap-1'>
                                     <ListIcon/>
                                     <div>
                                         {item?.title}
                                     </div>
                                 </div>
                        }
                        <div>
                            {
                                item?.active ? <i className="bi bi-chevron-down"></i> : item?.hover ? <PlusIcon/> : setDrop(item) ? <i className="bi bi-x-lg"></i> : ""
                            }
                        </div>
                    </li>)
                }
            </ul>
            {/* target */ }
            {
                islistItem && 
                <div 
                    className='w-100 mh-100 position-absolute card pt-2 pe-2 rounded-4 shadow-lg border-0' style={{top:0,left:"100%",backgroundColor:"var(--color-gray)"}}
                    onMouseLeave={()=>{setIsListItem(false)}}>
                    <ul className='overflow-y-scroll'>
                        {
                            list?.filter(item=>item?.active && item )[0]?.drop?.map((dropItem,dropIndex)=><li key={dropIndex} 
                                        className='p-3 d-flex justify-content-between border-bottom' 
                                        style={{cursor:"pointer"}}
                                        onClick={()=>{
                                            activeDropItem(dropIndex)
                                        }}
                                        >
                                            <div>{dropItem?.title}</div>
                                            {
                                                dropItem?.active ? <ListSuccessIcon/> : <ListSuccessMuteIcon/>
                                            }
                                        </li>
                                        )
                        }
                    </ul>
                </div>
            }
        </div>
        <div className='d-flex justify-content-center align-items-center' style={{height:"15%"}}>
            <button className='btn d-flex align-items-center gap-2 fw-medium' style={{backgroundColor:"var(--color-yellow)"}}>
                <div>
                    <i className="bi bi-search h6"></i>
                </div>
                <div>Qidirish</div>
            </button>
        </div>
    </div>
  )
}
