const UPDATE_TITLE_COLOR = "UPDATE_TITLE_COLOR";
const UPDATE_TITLE_TEXT = "UPDATE_TITLE_TEXT";
const UPDATE_CONTENT_COLOR = "UPDATE_CONTENT_COLOR";
const UPDATE_CONTENT_TEXT = "UPDATE_CONTENT_TEXT";

let initState = {
  title: { color: "red", text: "title" },
  content: { color: "blue", text: "content" }
};
function createReducer(state = initState, action) {
  switch (action.type) {
    case "UPDATE_TITLE_COLOR":
      return { ...state, title: { ...state.title, color: action.payload } };
    case "UPDATE_TITLE_TEXT":
      return { ...state, title: { ...state.title, text: action.payload } };
    case "UPDATE_CONTENT_COLOR":
      return { ...state, content: { ...state.content, color: action.payload } };
    case "UPDATE_CONTENT_TEXT":
      return { ...state, content: { ...state.content, text: action.payload } };

    default:
      return state;
  }
}

function createStore(reducer) {
  let state;
  let listeners = [];
  function getApp() {
    return state;
  }
  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach(l => l());
  }

  dispatch({ type: "@@REDUX_INIT" });

  function subscribe(listener) {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l != listener);
    };
  }

  return {
    dispatch,
    getApp,
    subscribe
  };
}
// state.title.color = 'green';

function renderTitle(state) {
  let element = document.getElementById("title");
  element.style.color = state.title.color;
  element.innerHTML = state.title.text;
}

function renderContent(state) {
  let element = document.getElementById("content");
  element.style.color = state.content.color;
  element.innerHTML = state.content.text;
}
function renderApp() {
  renderTitle(store.getApp());
  renderContent(store.getApp());
}

const store = createStore(createReducer);
renderApp();
store.subscribe(renderApp);
let unsubscribe = store.subscribe(renderApp);
setTimeout(() => {
  store.dispatch({ type: "UPDATE_TITLE_COLOR", payload: "yellow" });
  unsubscribe();
  store.dispatch({ type: "UPDATE_CONTENT_TEXT", payload: "新内容" });
  //   renderApp(store.getApp());
}, 1000);
