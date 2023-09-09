export interface FriendItemProps {
  name: string;
  img: string;
  id: number;
  balance: number;
}

export interface InitialValueProps {
  id: number;
  name: string;
  image: string;
  balance: number;
}

export type BillFormProps = {
  name: string; // Name of the friend
  splitHandler: (myBill: number, friendsBill: number) => void; // A function that handles splitting the bill
  selected: string; // A string indicating who is selected (e.g., "You" or the friend's name)
  setSelected: (value: string) => void; // A function to update the selected value
  id: number;
};
