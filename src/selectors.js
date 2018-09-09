// получаем список активных дел в зависимости от содержания поля searchText
export const getActiveList = state => {
  const activeList = [];
  if (state.toDoList.toDoList.length) {
    for (let i = 0; i < state.toDoList.toDoList.length; i++) {
      if (
        ~state.toDoList.toDoList[i].name
          .toLowerCase()
          .indexOf(state.search.searchText.toLowerCase()) &&
        !state.toDoList.toDoList[i].isCompleted &&
        !state.toDoList.toDoList[i].important
      ) {
        activeList.unshift(state.toDoList.toDoList[i]);
      }
    }
  }
  return activeList;
};

// получаем список важных дел в зависимости от содержания поля searchText
export const getImportantList = state => {
  const importantList = [];
  if (state.toDoList.toDoList.length) {
    for (let i = 0; i < state.toDoList.toDoList.length; i++) {
      if (
        ~state.toDoList.toDoList[i].name
          .toLowerCase()
          .indexOf(state.search.searchText.toLowerCase()) &&
        !state.toDoList.toDoList[i].isCompleted &&
        state.toDoList.toDoList[i].important
      ) {
        importantList.unshift(state.toDoList.toDoList[i]);
      }
    }
  }
  return importantList;
};

// получаем список завершенных дел в зависимости от содержания поля searchText
export const getCompletedList = state => {
  const completedList = [];
  if (state.toDoList.toDoList.length) {
    for (let i = 0; i < state.toDoList.toDoList.length; i++) {
      if (
        ~state.toDoList.toDoList[i].name
          .toLowerCase()
          .indexOf(state.search.searchText.toLowerCase()) &&
        state.toDoList.toDoList[i].isCompleted
      ) {
        completedList.unshift(state.toDoList.toDoList[i]);
      }
    }
  }
  return completedList;
};

export const getIsImportant = ownProps => {
  return ownProps.listItem.important;
};

export const getActivePage = state => {
  return state.pagesNames.activePage;
};

export const getActiveCount = state => {
  activeCount = 0;
  for (let i = 0; i < state.toDoList.toDoList.length; i++) {
    if (
      !state.toDoList.toDoList[i].isCompleted &&
      !state.toDoList.toDoList[i].important
    ) {
      activeCount++;
    }
  }
  return activeCount;
};

export const getImportantCount = state => {
  importantCount = 0;
  for (let i = 0; i < state.toDoList.toDoList.length; i++) {
    if (
      !state.toDoList.toDoList[i].isCompleted &&
      state.toDoList.toDoList[i].important
    ) {
      importantCount++;
    }
  }
  return importantCount;
};

export const getCompletedCount = state => {
  completedCount = 0;
  for (let i = 0; i < state.toDoList.toDoList.length; i++) {
    if (state.toDoList.toDoList[i].isCompleted) {
      completedCount++;
    }
  }
  return completedCount;
};
