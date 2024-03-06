class SwebsBank {
    static generator = 1000000;
    constructor(accountNo, accountName, balance = 0) {
      this.accountNo = SwebsBank.generator++;
      this.accountName = accountName;
      this.balance = balance;
    }
  
    deposit(amount) {
      this.balance = this.balance + amount;
      return this.balance;
    }
    transfer(amount, transferAccount) {
      if (amount > this.balance) return "Transfer Error,(Insufficient Fund)";
      this.balance = this.balance - amount;
      transferAccount.balance = transferAccount.balance + amount;
    }
  
    withdraw(amount) {
      if (amount > this.balance) return "insufficient fund";
      this.balance = this.balance - amount;
      return this.balance;
    }
    getAccount() {
      return this.accountNo;
    }
  }
  const fimiAccount = new SwebsBank(SwebsBank.getAccount, "fimi", 5000);
  // console.log(
  //   "Account Name : " +
  //     fimiAccount.accountName +
  //     ", " +
  //     "Account Balance : " +
  //     fimiAccount.balance
  // );
  
  // console.log(fimiAccount.accountNo);
  // console.log(fimiAccount.withdraw(300));
  // console.log(fimiAccount.getBalance());
  const favourAccount = new SwebsBank(SwebsBank.getAccount, "favour win", 100);
  console.log(fimiAccount.transfer(6000, favourAccount));
  console.log(favourAccount.balance);