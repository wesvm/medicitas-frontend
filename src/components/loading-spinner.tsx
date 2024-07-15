export const LoadingSpinner = () => {
    return (
        <div className="w-full h-full fixed top-0 left-0 bg-black bg-opacity-5 z-50">
            <div className="flex justify-center items-center mt-[50vh]">
                <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
            </div>
        </div>
    )
}