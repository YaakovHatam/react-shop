import { addItemToCart } from '../action-types';

const initial_state = {
   items: []
}

export default function(state = initial_state, action) {
    switch (action.type) {
        case addItemToCart: {

            return {
                items: [...state.items, action.payload ]
            }
        }
        default:
            return state;
    }
}