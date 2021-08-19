export interface ListInfoModel {
  instructions: string;
  list: ItemList[];
}

export interface ItemList {
  id: string;
  name: string;
}
