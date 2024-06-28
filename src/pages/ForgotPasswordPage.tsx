import { useState } from "react"
import { SendTokenCard } from "@/pages/parts/forgot-password/send-token-card"
import { RecoveryPassword } from "@/pages/parts/forgot-password/recovery-password";

export const ForgotPasswordPage = () => {

    const [recovery, setRecovery] = useState(false);

    return (
        <main className="bg-gray-100 h-svh">
            <div className="flex items-center h-full">
                {!recovery ?
                    <SendTokenCard setRecovery={setRecovery} /> :
                    <RecoveryPassword />
                }
            </div>
        </main>
    )
}