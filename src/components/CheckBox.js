const CheckBox = ({ checked, taskId, ToggleTaskStatus }) => {
    return (
        <input
            type="checkbox"
            checked={checked}
            onChange={() => ToggleTaskStatus(taskId)}
        />
    )
}

export default CheckBox