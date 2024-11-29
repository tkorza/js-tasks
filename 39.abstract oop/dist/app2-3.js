// 3. Создайте интерфейс iAccount со следующими методами:
// • balance: хранит цисловое значение баланса света
// • getBalance(): возвращает текущий баланс счета
// • deposit(amount: number): пополняет счет на указанную сумму
// • withdraw(amount: number): снимает указанную сумму со счета
// Реализуйте класс Account, который имплементирует интерфейс iAccount. Реализуйте все методы
// интерфейса. Перед снятием withdraw проверяйте, достаточно ли средств на счете. Если средств
// недостаточно, выбрасывайте ошибку
class Account {
    balance = 200;
    getBalance() {
        return this.balance;
    }
    deposit(value) {
        this.balance = this.balance + value;
        return this.balance;
    }
    withdraw(sum) {
        if (this.balance > sum)
            this.balance = this.balance - sum;
        return this.balance;
    }
}
const AccountObj = new Account();
console.log(AccountObj.getBalance());
console.log(AccountObj.deposit(100));
console.log(AccountObj.withdraw(50));
