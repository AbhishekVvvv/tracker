import React, {useContext} from 'react'
import GlobalContext from '../context/GlobalState'
import Transaction from './Transaction';

const TransactionList = () => {
  const {transaction} = useContext(GlobalContext);
  return (
    <div>
        <h3>History</h3>
      <ul className="list">
        {transaction.map(transactions => (<Transaction key = {transaction.id}transaction = {transaction}/>))}
        
      </ul>
    </div>
  )
}

export default TransactionList