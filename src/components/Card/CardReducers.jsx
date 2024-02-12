
import { createSlice } from '@reduxjs/toolkit'

import { createEntityAdapter,createAsyncThunk } from '@reduxjs/toolkit';

import dummy from "./projectDummy";

import axios from 'axios'



export const fetchAPI = createAsyncThunk('users/fetchUsers', async() => {
    // let data = []
    // const data = await axios.get("http://34.170.78.204:8000/workspace/list/").then((res) => res.json())
    // return data;
    const data = await axios.get("http://127.0.0.1:8000/workspace/list/").then((res) => res.data)

    return data;
})
export const addProject = createAsyncThunk('users/addProject', async(obj) => {
    
    let entity = {
        name: obj.name,
        description: obj.description,
        username: "Ryan Rick L",
    }
    let formData = new FormData()
            formData.append("name", obj.name)
            formData.append("description", obj.description)
            formData.append("username", "Ryan Rick L")

    // await axios.post("http://34.170.78.204:8000/workspace/", formData).then((res) => {
    //     console.log(res.data)
    // })
    await axios.post("http://127.0.0.1:8000/workspace/", formData).then((res) => {
        console.log(res.data)
    })
   
 
   
    return {name: entity.name, obj:entity};
})

export const updateProject = createAsyncThunk('users/updateProject', async(id) => {
   
    let formData = new FormData()
            formData.append("name", id.name)
            formData.append("description", id.description)
            formData.append("username", id.keranjangDetail.username)

    const Data = {
        name: id.name,
        username: id.keranjangDetail.username,
        description: id.description,
        // version: id.keranjangDetail.version
    }
    await axios.put("http://34.170.78.204:8000/workspace/" + "?name=" + id.keranjangDetail.name, formData).then((res) => {
        console.log(res.data)
    })
    console.log(Data)
    return {id: id.keranjangDetail.name, changes: Data}

})

export const deleteProject = createAsyncThunk(
    'users/deleteProject',
    async (id) => {
        // await axios.delete("http://34.170.78.204:8000/workspace/", {
        //     headers: {},
        //     data:{
        //        "name": id
        //     }
        // }).then((res) => {
        //     console.log(res.data)
        // })
        await axios.delete("http://127.0.0.1:8000//workspace/", {
            headers: {},
            data:{
               "name": id
            }
        }).then((res) => {
            console.log(res.data)
        })
      return id
    }
  )

const projectAdapter = createEntityAdapter({
    selectId: (project) => project.name
})




export const cardSlice = createSlice({
    name: 'card',
    initialState: projectAdapter.getInitialState(),
    reducers: {},
    extraReducers(builder){
        builder
        .addCase(fetchAPI.fulfilled, (state, {payload}) => {
            projectAdapter.setAll(state, payload)
        })
        .addCase(addProject.fulfilled, (state, {payload}) => {
            projectAdapter.addOne(state, payload.obj)
        })
        .addCase(updateProject.fulfilled, (state, {payload}) => {
    
            projectAdapter.updateOne(state, {
                id: payload.id,
                changes: payload.changes
              })
        })
        .addCase(deleteProject.fulfilled, (state, {payload: id}) => {
            projectAdapter.removeOne(state, id)
            
        })
        
    }
})

export const projectSelectors = projectAdapter.getSelectors(
    (state) => state.card
  )

export const { search } = cardSlice.actions
export default cardSlice.reducer

