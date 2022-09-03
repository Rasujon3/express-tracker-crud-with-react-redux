import React from "react";
import Transaction from "./Transaction";

const Transactions = () => {
  return (
    <>
      <p className="second_heading">Your Transactions:</p>

      <div className="conatiner_of_list_of_transactions">
        <ul>
          {/* single Transaction */}
          <Transaction />
        </ul>
      </div>
    </>
  );
};

export default Transactions;
