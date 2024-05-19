import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITask } from '../../types';

type TModalState = {
  boardId : string;
  listId : string;
  task : ITask;
}

type TSetModalDataAction = {
  boardId: string;
  listId: string;
  task: ITask;
}

const initialState : TModalState = {
  boardId : "board-0",
  listId : "list-0",
  task : {
    taskId : "task-0",
    taskName : "task 0",
    taskDescription : "tsak description",
    taskOwner : "Jang"
  }
}

const modalSlice = createSlice({
  name: 'madal',
  // initialState: initialState
  initialState, // 키와 값의 이름이 같기 때문에 한 번에 줄여서 사용한다
  reducers : {
    // 액션을 생성하는 함수들을 작성
    setModalData: (state, {payload}: PayloadAction<TSetModalDataAction>) => {
      state.boardId = payload.boardId;
      state.listId = payload.listId;
      state.task = payload.task;
    }
  }
})

// 내보낸 후 뭉쳐서 store를 만들 수 있다
export const modalReducer = modalSlice.reducer;
export const {setModalData} = modalSlice.actions;