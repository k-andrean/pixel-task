import React from "react";

const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex items-center justify-center rounded-lg px-[15px] py-[10px] w-full h-[20px] bg-white">
            <div className="w-full flex justify-center">{children}</div>
        </div>
    );
};

export default CardWrapper;