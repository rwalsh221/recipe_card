export type FormInputId =
  | 'title'
  | 'image'
  | 'url'
  | 'serves'
  | 'prepTime'
  | 'cookTime'
  | 'ovenTemp'
  | 'tips';

export type FormInputListId = 'instructions' | 'ingredients';

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
  tips?: string;
};

export type ListItemStateType = {
  ingredients: string[];
  instructions: string[];
};
