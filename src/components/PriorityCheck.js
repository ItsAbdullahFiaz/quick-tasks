import CheckPriority from "./CheckPriority"

const PriorityCheck = ({ value, onChange }) => {

    const taskPriorities = [0, 1, 2]

    return (
        <ul className="check-list">
            {taskPriorities.map((option, index) => (
                <li key={index}>
                    <label>
                        <input
                            type='radio'
                            value={value}
                            checked={value === option}
                            onChange={() => onChange(option)}
                        />
                        {CheckPriority(option)}
                    </label>
                </li>
            ))}
        </ul>
    )
}

export default PriorityCheck