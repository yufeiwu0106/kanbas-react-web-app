import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
    assignments: assignments,
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addOrUpdateAssignment: (state, { payload: assignment }) => {
            console.log("addAssignment called, payload is: ", assignment)

            const existingAssignmentIndex = state.assignments.findIndex(
                (a: any) => a._id === assignment._id
            );

            if ( existingAssignmentIndex !== -1) {
                state.assignments[existingAssignmentIndex] = {
                    ...state.assignments[existingAssignmentIndex],
                    ...assignment,
                };
            } else {
                // add a new assignment if no existing assignement is found

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
            }
        },

        deleteAssignment: (state, { payload: assignmentId }) => {
            console.log("reducer delete assignmentId: ", assignmentId)

            state.assignments = state.assignments.filter(
                (a: any) => a._id != assignmentId
            )
        },


    }
});

export const { addOrUpdateAssignment, deleteAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;