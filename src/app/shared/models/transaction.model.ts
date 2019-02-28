export interface TransactionModel {
  id: number;
  updatedAt: string;
  recipient: {
    name: string,
    hash: string
  };
  description: string;
  amount: number;
}
