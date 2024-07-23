class Bankaccount{
#balance
constructor(initialbalance){
   this.#balance=initialbalance;
}
  Deposit(dep){
     this.#balance +=dep;
  }
  Withdraw(withd){
      this.#balance -=withd;
  }
  GetBalance(){
      return this.#balance;
  }
}
let account=new Bankaccount(1000);
account.Deposit(500);
account.Withdraw(300);
let balance=account.GetBalance();
console.log("Balance:"+balance);