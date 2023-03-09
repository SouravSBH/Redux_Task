import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



const initialState = {
    loading: false,
    items: [],
    error: "",

}


const fetchItems = createAsyncThunk("items/fetchItems", () => {
    return fetch('http://localhost:5001/api/items/')
        .then(response => response.json())
        .then(data => data)
        .catch(err => err)

})

const postItems = createAsyncThunk("items/postItems", (item, { dispatch }) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item)
    };
    return fetch('http://localhost:5001/api/items/', requestOptions)
        .then(response => {
            dispatch(fetchItems())

            return response.json()
        });
}

)

const deleteItem = createAsyncThunk("items/deleteItem", (id, { dispatch }) => {

    fetch('http://localhost:5001/api/items/' + id, {
        method: 'DELETE',
    })
        .then(res => {
            dispatch(fetchItems())
            return res.json()
        }) // or res.json()
        .then(res => console.log(res))
})

const itemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(i => i._id !== action.payload._id)
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchItems.pending, (state, action) => {
            console.log("pending");
            console.dir(action);
            state.loading = true;
        })
        builder.addCase(fetchItems.fulfilled, (state, action) => {
            console.log("fulfilled");
            console.dir(action);
            state.loading = false;
            state.items = action.payload;
            state.error = "";
        })
        builder.addCase(fetchItems.rejected, (state, action) => {
            console.log("error");
            console.dir(action);
            state.loading = false;
            state.items = [];
            state.error = "Rejected";
        })



        //post

        builder.addCase(postItems.pending, (state, action) => {
            console.log("pending");
            console.dir(action);
            state.loading = true;
        })
        builder.addCase(postItems.fulfilled, (state, action) => {
            console.log("fulfilled");
            console.dir(action);
            state.loading = false;
            // state.items = action.payload;
            state.error = "";
        })
        builder.addCase(postItems.rejected, (state, action) => {
            console.log("error");
            console.dir(action);
            state.loading = false;
            // state.items = [];
            state.error = "Rejected";
        })

        //delete

        builder.addCase(deleteItem.pending, (state, action) => {
            console.log("pending");
            console.dir(action);
            state.loading = true;
        })
        builder.addCase(deleteItem.fulfilled, (state, action) => {
            console.log("fulfilled");
            console.dir(action);
            state.loading = false;
            // state.items = action.payload;
            state.error = "";
        })
        builder.addCase(deleteItem.rejected, (state, action) => {
            console.log("error");
            console.dir(action);
            state.loading = false;
            // state.items = [];
            state.error = "Rejected";
        })



    }
})

export default itemsSlice.reducer;
const { addItem, removeItem } = itemsSlice.actions;
export { fetchItems, addItem, removeItem, postItems, deleteItem };