const InputField = ({ value, setValue, name, fieldId, label }) => {
  return (
    <div className="mb-3 row">
      <label htmlFor={fieldId} className="col-sm-2 col-form-labelinput">{label}</label>
      <div className="col-sm-10">
        <input
          name={name}
          type="text"
          className="form-control-plaintext"
          id={fieldId}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  )
}

export default InputField;
