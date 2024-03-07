import cx from "./cx";
import { test, expect } from "vitest";

test("Should return cx function classes in string", () => {
    const classesString = "inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-center text-base";

    expect(cx`
        inline-flex
        items-center
        justify-center
        rounded-lg
        bg-blue-700
        px-5
        py-3
        text-center
        text-base
    `).toBe(classesString)
    
    expect(cx([
        "inline-flex",
        "items-center",
        "justify-center",
        "rounded-lg",
        "bg-blue-700",
        "px-5",
        "py-3",
        "text-center",
        "text-base"
    ])).toBe(classesString)
    
    expect(cx([
        "inline-flex",
        "items-center",
        "justify-center",
        "rounded-lg",
        "bg-blue-700",
        "px-5",
        "py-3",
        "text-center"],
        "text-base"
    )).toBe(classesString)
    
    expect(cx([
        "inline-flex",
        "items-center",
        "justify-center",
        "rounded-lg",
        "bg-blue-700",
        "px-5",
        "py-3"],
        "text-center",
        "text-base"
    )).toBe(classesString)
    
    expect(cx([
        "inline-flex",
        "items-center",
        "justify-center",
        "rounded-lg",
        "bg-blue-700",
        "px-5",
        "py-3"
        ],
        [
        "text-center",
        "text-base"
        ]
    )).toBe(classesString)
    
})