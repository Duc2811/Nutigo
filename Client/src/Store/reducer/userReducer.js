import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
    user: { 
        _id: "", 
        token: "", 
        role: "",
        userName: "",
        email: "",
        avatar: ""
    },
    darkMode: false,
    notification: 0
};

export const doLogin = createAction('user/doLogin');
export const doLogout = createAction('user/doLogout');
export const doDarkMode = createAction('user/doDarkMode');
export const cancelNotif = createAction('user/cancelNotif');

export const setUser = createAction('SET_USER');

const userReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(doLogin, (state, action) => {
            state.user = action.payload;
        })
        .addCase(doLogout, (state) => {
            state.user = initialState.user;
        })
        .addCase(doDarkMode, (state, action) => {
            state.darkMode = action.payload;
        })
        .addCase(cancelNotif, (state) => {
            state.notification = initialState.notification;
        })
        .addCase(setUser, (state, action) => {
            state.user = action.payload;
        });
});

export default userReducer;
