import './TextField.css';

const TextField = (props) => {
  const {
    label,
    type,
    placeholder,
    autofocus,
    id,
    name,
    maxlength,
    changeInputValue
  } = props;
  return (
    <div className="form-group mt-3">
      <label>{label}</label>
      <input
        autoFocus={autofocus}
        type={type}
        id={id}
        className="form-control mt-1 blank rounded"
        placeholder={placeholder}
        name={name}
        maxLength={maxlength}
        onChange={changeInputValue}
      />
    </div>
  );
}

export default TextField;