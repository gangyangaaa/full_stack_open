const Person = (props) => {
    const {text, value, onChange} = props
    return (
      <div>
        {text}: 
        <input
          value = {value}
          onChange = {onChange}
        />
      </div>
    )
}

export default Person