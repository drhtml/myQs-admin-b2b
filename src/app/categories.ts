export interface ICategories {
  categoryname: string;
  difficultylevel: string;
  subcategories: SubcategoriesArray;
}
type SubcategoriesArray = Array<
{
  subcategoryname: string,
  creationdata: string,
  isEnabled: string,
}
>;

