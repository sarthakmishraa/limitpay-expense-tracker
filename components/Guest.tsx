import { SignInButton } from "@clerk/nextjs"

export const Guest = () => {
    return(
        <div className="guest">
            <h1>Know where your money goes. LimitPay: Expense tracking, simplified.</h1>
            <p>Sign In to Limit Pay and manage your transactions</p>
            <SignInButton />
        </div>
    )
}