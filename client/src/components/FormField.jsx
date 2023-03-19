import React, { useState } from "react";

const FormField = ({ labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe }) => {
    return (
        <div>
            <div className="flex items-center gap-2 mb-2">
                <label className="block texgt-sm font-medium text-gray-900">
                    {labelName}
                </label>
                {isSurpriseMe && (
                    <button type="button"
                        onClick={handleSurpriseMe}
                        className="font-semibold text-xs bg-[#EDECF1] py-1 px-2 rounded-[5px] text-black">Surprise Me</button>
                )}
            </div>
            <input type={type} id={name} name={name}
                placeholder={placeholder} value={value}
                onChange={handleChange}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff]
                focus:border-[#4647ff] outline-none block w-full p-3 transition-all"
            />
        </div>
    );
}

export default FormField;