"use server";

import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

interface TransactionType {
    text: string;
    amount: number;
}

interface TransactionResultType {
    data? : TransactionType;
    error? : string;
}

export const addTransaction = async(formData: FormData): Promise<TransactionResultType> => {
    const expenseDescription = formData.get("text");
    const expenseAmount = formData.get("amount");

    if(!expenseDescription || expenseDescription === "") {
        return { error: "Please add expense details" }
    }

    if(!expenseAmount) {
        return { error: "Please add expense amount" }
    }

    const expenseDescriptionString = expenseDescription.toString();
    const expenseAmountFloat = parseFloat(expenseAmount.toString());

    const { userId } = auth();

    if(!userId) {
        return { error: "User not found" }
    }

    try {
        const expenseData: TransactionType = await db.transaction.create({
            data: {
                text: expenseDescriptionString,
                amount: expenseAmountFloat,
                userId: userId
            }
        });

        revalidatePath("/");

        return { data: expenseData }
    }
    catch (error) {
        return { error: "Expense not added" }
    }
}