const Display = (props) =>{
    const Con = (n,i)=>{
        const result = window.confirm(`Delete ${n}?`)
        if (result) {
            props.button.eliminate(i).then(() => {
                props.onDelete(i)
              })
            }
    }
    return(
        <div>
        {props.persons
        .filter(
            n=>
            n.name && n.name.toLowerCase()
            .includes(props.filter.toLowerCase()))  
        .map(p=>
        <p key = {p.id}> 
        {p.name} {p.number} 
        <button onClick={()=>Con(p.name,p.id)}>delete</button> 
        </p>)}
        </div>
    )
}
export default Display