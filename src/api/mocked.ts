
export interface AccountType{
  _id: string
  name: string
  balance: number
  description: string
  details: DetailsType[]
}
export interface DetailsType {
  date: string
  description: string
  amount: number
  balance: number
  transactionType: string
  category: string
  notes: string
}

export const accountMocked : Array<AccountType> = [
  {
    _id: 'acc1',
    name: 'Argent Bank Checking',
    balance: 2082.79,
    description: 'Available Balance',
    details: [
      {
        date: 'June 20th, 2020',
        description: 'Golden sun Bakery',
        amount: 5,
        balance: 2082.79,
        transactionType: 'Electronic',
        category: 'Food',
        notes: 'test1',
      },
      {
        date: 'June 20th, 2020',
        description: 'Golden sun Bakery',
        amount: 5,
        balance: 2082.79,
        transactionType: 'Electronic',
        category: 'Food',
        notes: 'test2',
      },
      {
        date: 'June 20th, 2020',
        description: 'Golden sun Bakery',
        amount: 5,
        balance: 2082.79,
        transactionType: 'Electronic',
        category: 'Food',
        notes: 'test3',
      },
    ]
  },
  {
    _id: 'acc2',
    name: 'Argent Bank Saving',
    balance: 10928.42,
    description: 'Available Balance',
    details: [
      {
        date: 'June 20th, 2020',
        description: 'Golden sun Bakery',
        amount: 5,
        balance: 2082.79,
        transactionType: 'Electronic',
        category: 'Food',
        notes: '',
      },
      {
        date: 'June 20th, 2020',
        description: 'Golden sun Bakery',
        amount: 5,
        balance: 2082.79,
        transactionType: 'Electronic',
        category: 'Food',
        notes: '',
      },
      {
        date: 'June 20th, 2020',
        description: 'Golden sun Bakery',
        amount: 5,
        balance: 2082.79,
        transactionType: 'Electronic',
        category: 'Food',
        notes: '',
      },
    ]
  },
  {
    _id: 'acc3',
    name: 'Argent Bank Credit Card',
    balance: 184.30,
    description: 'Current Balance',
    details: [
      {
        date: 'June 20th, 2020',
        description: 'Golden sun Bakery',
        amount: 5,
        balance: 2082.79,
        transactionType: 'Electronic',
        category: 'Food',
        notes: '',
      },
      {
        date: 'June 20th, 2020',
        description: 'Golden sun Bakery',
        amount: 5,
        balance: 2082.79,
        transactionType: 'Electronic',
        category: 'Food',
        notes: '',
      },
      {
        date: 'June 20th, 2020',
        description: 'Golden sun Bakery',
        amount: 5,
        balance: 2082.79,
        transactionType: 'Electronic',
        category: 'Food',
        notes: '',
      },
    ]
  },
]