import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const incAsync = createAsyncThunk('counterInc', async (num) => {

    console.log("inc")

    await axios.get("http://localhost:8080/api/delay") //delay 만들어서 1초 뒤에 실행하는 것 //비동기처리 짱쉬움

    return 1
})

export const decAsync = createAsyncThunk('counterDec', async (num) => {

    console.log("dec")

    await axios.get("http://localhost:8080/api/delay")

    return -1
})

const countSlice2 = createSlice({
    name:"counter",
    initialState: {count:0},
    reducers: {

    },
    extraReducers: {
        [incAsync.fulfilled]: (state, {payload}) => { //fulfiled 비동기 처리로 완료 됐다면, 이 함수로 처리해라 //완료되면 어떻게하는지 처리해줌!!!

            console.log("inc:"+payload)

            return {count:state.count + payload} //count 값으로 바꿔줌
        },
        [decAsync.fulfilled]: (state, {payload}) => {

            console.log("dec:"+payload)

            return {count:state.count - payload}
        },
    }
})

export default countSlice2.reducer

//slice 안에 모든게 다 들어가있음!!

