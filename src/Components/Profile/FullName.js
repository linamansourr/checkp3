import React from 'react'

const Fname = () => {
    const nameList=[{firstname:"Lina", name:"Mansour"}]
    return (
        <div className="name">
            {
                nameList.map((list,key)=>(
                    <div>
                        <h4>{list.name}</h4>
                        <p>{list.firstname}</p>                        
                    </div>
                )
                )
            }
        </div>
    )
}

export default Fname
