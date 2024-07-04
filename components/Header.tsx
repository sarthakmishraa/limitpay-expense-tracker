import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";
import Link from "next/link";

export const Header = async() => {
    const user = await checkUser();
    
    return(
        <nav className="navbar">
            <div className="navbar-container">
                <h2>Limit Pay</h2>
                <div className="navbar-items">
                    <a
                        href="https://github.com/sarthakmishraa/limitpay-expense-tracker"
                        target="_blank">
                            <span>Code</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/sarthakmishraa/"
                        target="_blank">
                            <span>LinkedIn</span>
                    </a>
                    <a
                        href="mailto:msarthak785@gmail.com"
                        target="_blank">
                            <span>Contact</span>
                    </a>
                </div>
                <div>
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
        </nav>
    )
}