import {reducer, StateType, TOGGLECOLLAPSED} from "./Reducer";

test('reducer should change value to opposite value', () => {
    // data
const state: StateType = {
    collapsed: false
}

    /// action
const newState = reducer(state, {type: TOGGLECOLLAPSED})

    //expect
expect(newState.collapsed).toBe(true)


})