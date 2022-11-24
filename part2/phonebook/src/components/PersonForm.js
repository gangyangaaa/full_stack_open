import Person from "./Person"

const PersonForm = (props) => {
    const {newName, newNumber, handleSubmit, handleNameChange, handleNumberChange} = props
    return (
      <form onSubmit = {handleSubmit}>
        <Person text = "name" value = {newName} onChange = {handleNameChange} />
        <Person text = "number" value = {newNumber} onChange = {handleNumberChange} />
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm