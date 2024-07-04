import { SignInButton } from "@clerk/nextjs"

export const Guest = () => {
    return(
        <div className="guest">
            <h1>LimitPay</h1>
            <h2>Expense tracking, simplified</h2>
            <h3>Know where your money goes</h3>
            <p>Sign In to Limit Pay and manage your transactions</p>
            <SignInButton />
        </div>
    )
}