export interface TransactionModel {
  id: number;
  updated_at: string
  recipient: {
    name: string,
    hash: string
  };
  description: string;
  amount: number;
}
