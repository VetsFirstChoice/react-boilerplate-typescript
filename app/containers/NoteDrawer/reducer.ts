import * as constants from './constants';

export const initialState = [...constants.NOTES];

export const notesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NOTE': {
      return (action.note.length)
        ? [...state, {
          id: state.length ? Math.max(...state.map(note => note.id)) + 1 : 0,
          note: action.note,
        }]
        : state;
    }
    default: {
      return state;
    }
  }
};
