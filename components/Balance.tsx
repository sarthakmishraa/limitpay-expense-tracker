import { getUserBalance } from "@/app/actions/getUserBalance";
import { addCommas } from "@/lib/utils";

export const Balance = async() => {
    const { balance } = await getUserBalance();

    return(
        <>
            <h4>Your balance</h4>
            <h1>${addCommas(Math.abs(balance ?? 0))}</h1>
        </>
    )
}