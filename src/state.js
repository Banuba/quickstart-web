let _selectedTechnology;
let _selectedCategory;

let _selectedTechInput;
let _selectedCategoryInput;

let _selectedEffect;

let _controlBlock;
let _controlFunc;
let _curEventType;

export const getSelectedTechnology = () => _selectedTechnology;
export const getSelectedCategory = () => _selectedCategory;
export const getSelectedTechInput = () => _selectedTechInput;
export const getSelectedCategoryInput = () => _selectedCategoryInput;
export const getSelectedEffect = () => _selectedEffect;
export const getControlBlock = () => _controlBlock;
export const getControlFunc = () => _controlFunc;
export const getCurEventType = () => _curEventType;

export const setSelectedTechnology = (value) => (_selectedTechnology = value);
export const setSelectedCategory = (value) => (_selectedCategory = value);
export const setSelectedTechInput = (value) => (_selectedTechInput = value);
export const setSelectedCategoryInput = (value) =>
  (_selectedCategoryInput = value);
export const setSelectedEffect = (value) => (_selectedEffect = value);
export const setControlBlock = (value) => (_controlBlock = value);
export const setControlFunc = (value) => (_controlFunc = value);
export const setCurEventType = (value) => (_curEventType = value);
