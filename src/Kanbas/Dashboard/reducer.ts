import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";

const initialState = {
    enrollments: enrollments,
};

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        addEnrollment: (state, { payload: enrollment }) => {
            console.log("Add enroll payload: ", enrollment)

            const newEnrollment: any = {
                _id: 'E' + new Date().getTime().toString(),
                user: enrollment.user,
                course: enrollment.course
            }

            state.enrollments = [...state.enrollments, newEnrollment] as any;
        },

        deleteEnrollment: (state, { payload: enrollmentId }) => {
            console.log("Delete enroll payload: ", enrollmentId)

            state.enrollments = state.enrollments.filter(
                (e: any) => e._id != enrollmentId
            )

            console.log("enrollments: ", state.enrollments)
        },
    }
});

export const { addEnrollment, deleteEnrollment } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;