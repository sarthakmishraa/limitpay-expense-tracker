"use server";

import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";

export const getIncomeExpense = async(): Promise<{
    income?: number;
    expense?: number;
    error?: string;
}> => {
    const { userId } = auth();

    if(!userId) {
        return { error: "User not found" }
    }

    try {
        const transactions = await db.transaction.findMany({
            where: { userId },
        });
        const amounts = transactions.map((transaction) => transaction.amount);

        const income = amounts.filter((amount) => amount > 0).reduce((acc, amount) => acc + amount, 0);
        const expense = amounts.filter((amount) => amount < 0).reduce((acc, amount) => acc + amount);

        return { income: income, expense: expense }
    }
    catch(error) {
        return { error: "Database error" }
    }
}