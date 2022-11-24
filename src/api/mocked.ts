
export interface AccountType{
  name: string
  balance: number
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
    name: 'Argent Bank Checking',
    balance: 2082.79,
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
    name: 'Argent Bank Saving',
    balance: 10928.42,
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
    name: 'Argent Bank Credit Card',
    balance: 184.30,
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