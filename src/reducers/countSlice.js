import {createSlice} from "@reduxjs/toolkit";

const countSlice = createSlice({
    name:"countSlice",
    initialState: {count: 0},
    reducers: {
        inc: state => {
            console.log("inc........")
            state.count += 1 //불변처리 알아서 하기 때문에 새로 객체 리턴 필요없음
        },
        dec: state => {
            console.log("dec........")
            state.count -= 1
        }
    }
})

export const {inc, dec} = countSlice.actions

export default countSlice.reducer