import { useState } from "react"
import { SendTokenCard } from "@/components/forgot-password/send-token-card"
import { RecoveryPassword } from "@/components/forgot-password/recovery-password";

export const ForgotPasswordPage = () => {

    const [recovery, setRecovery] = useState(false);

    return (
        <main className="bg-gray-100 h-svh">
            <div className="flex items-center h-full">
                <>
                    {!recovery ?
                        <SendTokenCard setRecovery={setRecovery} /> :
                        <RecoveryPassword />
                    }
                </>
            </div>
        </main>
    )
}