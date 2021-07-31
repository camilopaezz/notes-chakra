export const updateLocalStorage = (state) => {
  window.localStorage.setItem('notes-db', state)
}
