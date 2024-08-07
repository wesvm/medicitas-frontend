import { Input, InputProps } from "@/components/ui/input";

import { Eye, EyeOff } from "lucide-react";
import { ForwardedRef, forwardRef, useState } from "react";

interface PasswordInputProps extends InputProps {
    ref?: ForwardedRef<HTMLInputElement>;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>((props, ref) => {

    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="relative">
            <Input
                ref={ref}
                className="pr-9 h-8 rounded-full bg-slate-100 focus-visible:ring-slate-20"
                type={showPassword ? "text" : "password"}
                {...props}
            />
            {showPassword ? (
                <Eye
                    className="h-4 w-4 absolute top-2 right-3 text-slate-600 cursor-pointer"
                    onClick={toggleShowPassword}
                />
            ) : (
                <EyeOff
                    className="h-4 w-4 absolute top-2 right-3 text-slate-600 cursor-pointer"
                    onClick={toggleShowPassword}
                />
            )}
        </div>
    )
})