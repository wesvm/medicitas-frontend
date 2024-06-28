import { Input, InputProps } from "@/components/ui/input";

export const LoginInput = ({ ...props }: InputProps) => {
    return (
        <Input
            className="h-8 rounded-full bg-slate-100 focus-visible:ring-slate-20"
            {...props}
        />
    )
}