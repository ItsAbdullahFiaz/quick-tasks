const CheckPriority = (selectPriority) => {
    var result = ''
    result = selectPriority == 0 ? 'Low' : selectPriority == 1 ? 'Medium' : selectPriority == 2 ? 'High' : ''
    return result
}

export default CheckPriority