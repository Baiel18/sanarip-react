import React from "react";

export default function UrokTwo(){
    const users = [
        {id:19,isloggedIn:false,title:"Aktilek",age:15},
        {id:154,isloggedIn:true,title:"Amina",age:20},
        {id:249,isloggedIn:true,title:"Abdurahim",age:16},
        {id:197,isloggedIn:false,title:"Azat",age:14},
        {id:156,isloggedIn:true,title:"Kanyshai",age:17},
        {id:132,isloggedIn:false,title:"Nurbolot",age:16},
        {id:45,isloggedIn:true,title:"Akylai",age:23},
        {id:12,isloggedIn:false,title:"Fatima",age:18},
        {id:19,isloggedIn:true,title:"Baiel",age:18},
    ]
    return(
        <div className="uroktwo"> 
            <p>work two</p>
            {users.map(user=>{
                if(user.age >= 18){
                    return <h3 className="p" key={user.id}>{user.title}</h3>
                }
            })}
        </div>
    )
}