const BASE = 100000;

export class BalanceSheet {
    constructor (establishedYear) {
        this.establishedYear = establishedYear;
        this.currentYear = new Date().getFullYear();
    }

    getProfitOrLoss() {
        return Math.floor( Math.random() * BASE ) - ( BASE/20 );
    }

    getAssetsValue () {
        return Math.floor( Math.random() * BASE );
    }

    getMonthlyBalanceSheet ( year, endMonth = 12 ) {
        const monthlySheet = [];

        for ( let month = 1; month <= endMonth; month++ ) {
            const profitOrLoss = this.getProfitOrLoss();
            const assetsValue = this.getAssetsValue();
            
            monthlySheet.push({
              year,
              month,
              profitOrLoss,
              assetsValue,
            });
        }

        return monthlySheet;
    }

    getYearlyBalanceSheet () {
        const balanceSheet = [];

        for (let year = ( this.currentYear - 1 ); year >= this.establishedYear; year-- ) {
            balanceSheet.push( this.getMonthlyBalanceSheet(year) );
        }

        return balanceSheet;
    }
}