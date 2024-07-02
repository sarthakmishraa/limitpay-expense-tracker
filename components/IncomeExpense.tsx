import { getIncomeExpense } from "@/app/actions/getIncomeExpense";
import { addCommas } from "@/lib/utils";

export const IncomeExpense = async() => {
    const { income, expense } = await getIncomeExpense();

    return(
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">${ addCommas(Number(income?.toFixed(2))) }</p>
            </div>
            <div>
                <h4>Expenses</h4>
                <p className="money minus">${ addCommas(Number(expense?.toFixed(2))) }</p>
            </div>
        </div>
    )
};