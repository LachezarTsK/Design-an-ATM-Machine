
#include <array>
#include <vector>
using namespace std;

class ATM {
    inline static const int NUMBER_OF_DENOMINATIONS = 5;
    inline static const array<int, NUMBER_OF_DENOMINATIONS> DENOMINATIONS {20, 50, 100, 200, 500};
    inline static const vector<int> NOT_POSSIBLE_TO_WITHDRAW {-1};
    vector<long> numberOfBanknotesPerDenomination;

public:

    ATM() {
        numberOfBanknotesPerDenomination.resize(NUMBER_OF_DENOMINATIONS);
    }

    void deposit(const vector<int>& banknotesCount) {
        for (int i = 0; i < NUMBER_OF_DENOMINATIONS; ++i) {
            numberOfBanknotesPerDenomination[i] += banknotesCount[i];
        }
    }

    vector<int> withdraw(int amount) {

        vector<int> withdrawn_numberOfBanknotesPerDenomination(NUMBER_OF_DENOMINATIONS);

        for (int i = NUMBER_OF_DENOMINATIONS - 1; i >= 0 && amount > 0; --i) {
            int numberOfBanknotes = min(static_cast<long> ((amount / DENOMINATIONS[i])), numberOfBanknotesPerDenomination[i]);
            amount -= numberOfBanknotes * DENOMINATIONS[i];
            withdrawn_numberOfBanknotesPerDenomination[i] = numberOfBanknotes;
        }

        if (amount == 0) {
            for (int i = 0; i < NUMBER_OF_DENOMINATIONS; ++i) {
                numberOfBanknotesPerDenomination[i] -= withdrawn_numberOfBanknotesPerDenomination[i];
            }
            return withdrawn_numberOfBanknotesPerDenomination;
        }

        return NOT_POSSIBLE_TO_WITHDRAW;
    }
};
