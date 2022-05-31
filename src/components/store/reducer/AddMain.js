const initialState = []

function AddMain(state = initialState, action){
        if(action.type === "add"){
            let arr = [...state]
                arr.push(
                    action.payload
                )

            return state = arr
        }

        return state
}

export default AddMain