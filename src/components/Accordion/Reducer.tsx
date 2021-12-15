type ActionType = {
    type: string
}
export const TOGGLECOLLAPSED = "TOGGLE-COLLAPSED";

export type StateType = {
    collapsed: boolean;
}

export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLECOLLAPSED:
            return {
                ...state, collapsed: !state.collapsed}
        default:
            throw new Error('Bad action type!')

    }
    // return state
    // if (action.type = TOGGLECOLLAPSED) {
    //     return !state
    // }
    // return state
}