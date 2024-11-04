import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
    assignments: assignments,
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment }) => {
            console.log("addAssignment called, payload is: ", assignment)
            const newAssignment: any = {
                _id: 'A' + new Date().getTime().toString(),
                title: assignment.title,
                description: assignment.description,
                course: assignment.course,
                availableDate: assignment.availableDate,
                dueDate: assignment.dueDate,
                untilDate: assignment.untilDate,
                point: assignment.point
            }

            state.assignments = [...state.assignments, newAssignment] as any;
        },

        deleteAssignment: (state, { payload: assignmentId }) => {
            console.log("reducer delete assignmentId: ", assignmentId)

            state.assignments = state.assignments.filter(
                (a: any) => a._id != assignmentId
            )
        },

        updateAssignment: (state, { payload: assignment }) => {
            console.log("updateAssignment called, payload is: ", assignment, ", state is ", state)
        },
    }
});

export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;