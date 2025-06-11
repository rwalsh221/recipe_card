export type FormInputId =
  | 'title'
  | 'image'
  | 'url'
  | 'serves'
  | 'prepTimeHour'
  | 'prepTimeMin'
  | 'cookTimeHour'
  | 'cookTimeMin'
  | 'ovenTemp';

export type FormInputListId = 'instructions' | 'ingredients' | 'tips';

export type FormStateType = {
  title: string;
  image: string;
  ingredients: string;
  url: string;
  serves: string;
  prepTimeHour: string;
  prepTimeMin: string;
  cookTimeHour: string;
  cookTimeMin: string;
  ovenTemp: string;
  instructions: string;
  tips: string;
};

export type ListItemStateListItems = {
  id: string;
  position: number;
  content: string;
};

export type ListItemStateObject = {
  title: 'ingredients' | 'instructions' | 'tips';
  listItems: ListItemStateListItems[];
};

export type ListItemStateType = {
  ingredients: ListItemStateObject;
  instructions: ListItemStateObject;
  tips: ListItemStateObject;
};

export type ShowFormModalStateType = {
  showModal: boolean;
  listItemState: string | null;
};

export type PlaceHolderStateType = 'init' | 'final' | 'focus' | 'blur';
