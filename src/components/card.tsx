import { cn } from "@/lib/utils"

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
}
export const Card = ({
    className, children
}: CardProps) => {
    return (
        <div
            className={
                cn("bg-white p-4 rounded-lg shadow-lg", className)}
        >
            {children}
        </div>
    )
}