export default function ({ isHMR, app, store, route, params, error, redirect,req }) {
  if(process.client){
    localStorage.removeItem("SET_DEFAULT_RIGHT_OVERFLOWY");
    localStorage.setItem("SET_DEFAULT_RIGHT_OVERFLOWY", !store.state.setDefaultRightOverflowy);
  }
}
