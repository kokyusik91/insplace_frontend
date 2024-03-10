export type CategoryModel = {
  id: number;
  value: CategoryValue;
  label: string;
};

type CategoryValue = '' | 'travel' | 'cafe' | 'art' | 'activity' | 'outside';
