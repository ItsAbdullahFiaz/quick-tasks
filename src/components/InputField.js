import '../App.css';

const InputField = ({ placeholder, value, onChange }) => {
    return (
        <input
            className="todo-input-box"
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}

export default InputField