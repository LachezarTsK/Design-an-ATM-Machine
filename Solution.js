
var ATM = function () {
    this.NUMBER_OF_DENOMINATIONS = 5;
    this.DENOMINATIONS = [20, 50, 100, 200, 500];
    this.NOT_POSSIBLE_TO_WITHDRAW = [-1];
    this.numberOfBanknotesPerDenomination = new Array(this.NUMBER_OF_DENOMINATIONS).fill(0);
};

/** 
 * @param {number[]} banknotesCount
 * @return {void}
 */
ATM.prototype.deposit = function (banknotesCount) {
    for (let i = 0; i < this.NUMBER_OF_DENOMINATIONS; ++i) {
        this.numberOfBanknotesPerDenomination[i] += banknotesCount[i];
    }
};

/** 
 * @param {number} amount
 * @return {number[]}
 */
ATM.prototype.withdraw = function (amount) {

    const withdrawn_numberOfBanknotesPerDenomination = new Array(this.NUMBER_OF_DENOMINATIONS).fill(0);

    for (let i = this.NUMBER_OF_DENOMINATIONS - 1; i >= 0 && amount > 0; --i) {
        let numberOfBanknotes = Math.min(Math.floor(amount / this.DENOMINATIONS[i]), this.numberOfBanknotesPerDenomination[i]);
        amount -= numberOfBanknotes * this.DENOMINATIONS[i];
        withdrawn_numberOfBanknotesPerDenomination[i] = numberOfBanknotes;
    }

    if (amount === 0) {
        for (let i = 0; i < this.NUMBER_OF_DENOMINATIONS; ++i) {
            this.numberOfBanknotesPerDenomination[i] -= withdrawn_numberOfBanknotesPerDenomination[i];
        }
        return withdrawn_numberOfBanknotesPerDenomination;
    }

    return this.NOT_POSSIBLE_TO_WITHDRAW;
};
