export enum StepAccountEnum {
  LOADING = 'LOADING',
  EMPTY = 'EMPTY',
  LIST = 'LIST',
}

export interface Account {
  name: string;
  hash: string;
  balance?: number;
  createdAt: string;
}
