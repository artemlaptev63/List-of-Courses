import allData from './mockToDoList'

export const fetchToDoListApi = async () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(allData), 500)
  })
}

export const fetchFilterToDo = async (text) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(text), 300)
  })
}