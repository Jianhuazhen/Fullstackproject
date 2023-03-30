const Display = (props) =>(
    <div>
        {props.persons.filter(n=>n.name.toLowerCase().includes(props.filter)).map(p=><p key = {p.id}> {p.name} {p.number}</p>)}
    </div>
)
export default Display