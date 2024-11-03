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
            console.log("addAssignment reducer called...")
        },
        deleteAssignment: (state, { payload: assignment }) => {
            console.log("deleteAssignment reducer called...")
        },
        updateAssignment: (state, { payload: assignment }) => {
            console.log("updateAssignment reducer called...")
        },
     }
});

export const {addAssignment, deleteAssignment, updateAssignment} =  assignmentsSlice.actions;
export default assignmentsSlice.reducer;