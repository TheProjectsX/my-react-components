"use client";

import React, { useId } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Dropdown = ({ children, className, label, border = false }) => {
    const uid = useId();

    return (
        <div
            className={`${className ?? ""} ${
                border ? "pb-4 mb-3 border-b border-neutral-400" : ""
            }`}
        >
            <input
                type="checkbox"
                id={uid}
                className="peer"
                hidden
                defaultChecked
            />
            <label
                htmlFor={uid}
                className="flex items-center justify-between px-5 py-2.5 hover:bg-slate-100 rounded-sm uppercase text-sm text-neutral-600 cursor-pointer font-thin [&_span]:transition-all [&_span]:duration-150 peer-checked:[&_span]:rotate-180"
            >
                {label}
            </label>

            {/* Contents */}
            <div className="grid grid-rows-[0fr] peer-checked:grid-rows-[1fr] transition-[grid-template-rows] duration-300">
                <div className="overflow-hidden">{children}</div>
            </div>
        </div>
    );
};

export default Dropdown;
