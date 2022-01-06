const DELETETODO = (state, payload) => {
	state.tasks.splice(payload,1)
};
const CHANGESTATUS = (state, index) => {
    let newIndex = state.statuses.indexOf(state.tasks[index].status);
    if (++newIndex > 2) newIndex = 0;
    state.tasks[index].status = state.statuses[newIndex];
}
const ADDTASK = (state, task) => {
    if (task.length === 0) return;
    state.tasks.push({
        name: task,
        status: "to-do",
    });
}

export {
    DELETETODO,
    CHANGESTATUS,
    ADDTASK
}