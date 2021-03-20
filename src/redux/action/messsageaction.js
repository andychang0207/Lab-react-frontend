/*
* action type
*/
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const FETCH_DATA = 'FETCH_DATA';

/*
* action creator
*/
export function addMessage(info) {
    return { type: ADD_MESSAGE, info };
}