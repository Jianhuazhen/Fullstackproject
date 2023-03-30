const PersonForm = (props) => {
    return(
        <form>
        <div>
          name: <input value={props.nam} onChange={props.handlenam}/>
        </div>
        <div>
          number: <input value={props.num} onChange={props.handlenum}/>
        </div>
        <div>
          <button type="submit" onClick={props.add}>add</button>
        </div>
      </form>
    )
}
export default PersonForm