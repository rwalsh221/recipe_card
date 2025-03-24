export type FormInputId =
  | 'title'
  | 'image'
  | 'url'
  | 'serves'
  | 'prepTime'
  | 'cookTime'
  | 'ovenTemp';

export type FormInputListId = 'instructions' | 'ingredients' | 'tips';

export type FormStateType = {
  title: string;
  image: string;
  ingredients: string;
  url: string;
  serves: string;
  prepTime: string;
  cookTime: string;
  ovenTemp: string;
  instructions: string;
  tips: string;
};

export type ListItemStateObject = {
  title: 'ingredients' | 'instructions' | 'tips';
  listItems: string[];
};

export type ListItemStateType = {
  ingredients: ListItemStateObject;
  instructions: ListItemStateObject;
  tips: ListItemStateObject;
};
