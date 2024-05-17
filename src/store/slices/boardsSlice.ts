import { createSlice } from '@reduxjs/toolkit';
import { IBoard } from '../../types';

type TBoardState = {
  modalActive : boolean;
  boardArray : IBoard[];
}

const initialState : TBoardState = {
  modalActive : false,
  boardArray : [
    {
      boardId : 'board-0',
      boardName : '첫 번째 게시물',
      lists : [
        {
          listId : 'list-0',
          listName : 'List 1',
          tasks : [
            {
              taskId : 'task-0',
              taskName : 'Task 1',
              taskDescription : 'Description',
              taskOwner : 'Jang'
            },
            {
              taskId : 'task-1',
              taskName : 'Task 2',
              taskDescription : 'Description',
              taskOwner : 'Jang'
            }
          ]
        },
        {
          listId : 'list-1',
          listName : 'list 2',
          tasks : [
            {
              taskId : 'task-3',
              taskName : 'Task 3',
              taskDescription : 'Description',
              taskOwner : 'Jang'
            }
          ]
        }
      ]
    }
  ]
}

const boardsSlice =  createSlice({
  name : 'boards',
  initialState,
  reducers : {

  }
})

export const boardsReducer = boardsSlice.reducer
// suc reducer 들을 모아 하나의 reducer로 만들어야한다 (combine)