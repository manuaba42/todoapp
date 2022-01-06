const deleteTodo = async (context, payload) => {
    context.commit("DELETETODO", payload);
};
const changeStatus = async (context, index) => {
    context.commit("CHANGESTATUS", index)
};
const addTask = async (context, task) => {
    context.commit("ADDTASK", task)
}

export {
    deleteTodo,
    changeStatus,
    addTask
}