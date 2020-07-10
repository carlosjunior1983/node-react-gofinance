import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: Request): Transaction {
    // Se o tipo for diferente dos dois configurados
    if (!['income', 'outcome'].includes(type)) {
      throw new Error('Transaction type is invalid!');
    }
    // Se for outcome, validar saldo do TOTAL
    if (type === 'outcome') {
      const { total } = this.transactionsRepository.getBalance();
      if (total < value) {
        throw new Error('You do not have enough balance!');
      }
    }

    const transaction = this.transactionsRepository.create({
      title,
      value,
      type,
    });

    return transaction;
  }
}

export default CreateTransactionService;
