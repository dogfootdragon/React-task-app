import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';

// 타입스크립트에서는 타입스크립트가 추론을 못하면 개발자가 직접 타입을 지정 annotate 해주어야 한다
// const logger = useSelector(state => state.logger);

export const useTypedSelector : TypedUseSelectorHook<RootState> = useSelector
export const useTypedDispatch = () => useDispatch<AppDispatch>();


/* 
TypedUseSelectorHook 가 하는 일

예시
interface State {
  state : {
    data : string,
    loading : boolean
  }
}

const obj : State = {
  name : { // err발생. State에 name 부분은 지정되지 않았기 때문에 타입스크립트가 추론 불가능
    state : {
      data : 'abc',
      loading : false
    }
  }
}

// 에러 해결 방법
interface Obj<T> { // Obj 인터페이스를 제네릭으로 만들고
  name: T;
}

interface State {
  state : {
    data : string,
    loading : boolean
  }
}

const obj : Obj<State> = {
  name : { 
    state : {
      data : 'abc',
      loading : false
    }
  }
}

*/