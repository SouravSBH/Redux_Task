import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { hideAction } from "../modal/modalSlice";




const initialState = {
    loading: false,
    user: {},
    token: localStorage.getItem("jwt_token") || "",
    error: ""

}



// const signInUserThunk

const signup = createAsyncThunk(
    'auth/signup',
    async (user, { dispatch }) => {
        // Use object shorthand to create the request body
        // console.log({ second })
        const raw = JSON.stringify(user);
        console.log(raw)
        // Use object shorthand to create the options object
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: raw,
            redirect: 'follow'
        };

        // Use fetch to make the request and return the response text or throw an error
        const response = await fetch("http://localhost:5001/api/auth/signup", requestOptions);
        if (response.ok) {
            dispatch(hideAction())
            return response.json();
        }
        else {
            throw new Error(response.statusText);
        }
    }
);


const getUserWithToken = createAsyncThunk(
    "auth/getUserWithToken",
    async (token, { dispatch }) => {

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', "x-auth-token": localStorage.getItem("jwt_token") },

            redirect: 'follow'
        };

        // Use fetch to make the request and return the user data or throw an error
        const response = await fetch("http://localhost:5001/api/auth", requestOptions);
        if (response.ok) {
            return response.json();
        }
        else {
            throw new Error(response.statusText);
        }
    }
)




const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signOut: (state) => {
            localStorage.removeItem("jwt_token")
            state.user = {};
            state.token = "";


        }

    },

    extraReducers: builder => {

        builder.addCase(signup.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(signup.rejected, (state, action) => {
            console.log("error");
            console.dir(action);
            state.loading = false;
            state.error = "Rejected";
        })
        builder.addCase(signup.fulfilled, (state, action) => {
            console.log(action);
            state.loading = false;
            state.error = "";
            state.user = action.payload.user;
            state.token = action.payload.token;
            localStorage.setItem("jwt_token", action.payload.token)
        })

        //getUserWithToken
        builder.addCase(getUserWithToken.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(getUserWithToken.rejected, (state, action) => {
            console.log("error");
            console.dir(action);
            state.loading = false;
            state.error = "Rejected";
        })
        builder.addCase(getUserWithToken.fulfilled, (state, action) => {
            console.log(action);
            state.loading = false;
            state.error = "";
            state.user = action.payload.user;
            state.token = localStorage.getItem("jwt_token");
            // localStorage.setItem("jwt_token", action.payload.token)
        })

    }



})

export default userSlice.reducer;
const { signOut } = userSlice.actions;
export { signOut, signup, getUserWithToken };