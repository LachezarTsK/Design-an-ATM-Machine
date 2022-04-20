
public class ATM {

    private static final int NUMBER_OF_DENOMINATIONS = 5;
    private static final int[] DENOMINATIONS = new int[]{20, 50, 100, 200, 500};
    private static final int[] NOT_POSSIBLE_TO_WITHDRAW = new int[]{-1};
    private final long[] numberOfBanknotesPerDenomination;

    public ATM() {
        numberOfBanknotesPerDenomination = new long[NUMBER_OF_DENOMINATIONS];
    }

    public void deposit(int[] banknotesCount) {
        for (int i = 0; i < NUMBER_OF_DENOMINATIONS; ++i) {
            numberOfBanknotesPerDenomination[i] += banknotesCount[i];
        }
    }

    public int[] withdraw(int amount) {

        int[] withdrawn_numberOfBanknotesPerDenomination = new int[NUMBER_OF_DENOMINATIONS];

        for (int i = NUMBER_OF_DENOMINATIONS - 1; i >= 0 && amount > 0; --i) {
            int numberOfBanknotes = (int) Math.min((amount / DENOMINATIONS[i]), numberOfBanknotesPerDenomination[i]);
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
}
