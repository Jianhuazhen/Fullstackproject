const Filter = (props) => {
    return(
        <div>
            filter shown with: <input value={props.filter} onChange={props.handle}/>
        </div>
    )
}
export default Filter