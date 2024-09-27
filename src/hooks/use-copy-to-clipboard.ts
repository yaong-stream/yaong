"use client"

import { useState } from "react"

export function useCopyToClipboard({
    timeout = 2000,
    onCopy,
}: {
    timeout?: number
    onCopy?: () => void
} = {}) {
    const [isCopied, setIsCopied] = useState(false);

    const copyToClipboard = (value: string) => {
        if (typeof window === "undefined" || !navigator.clipboard.writeText) {
            return
        }

        if (!value) return

        navigator.clipboard.writeText(value).then(() => {
            setIsCopied(true)

            if (onCopy) {
                onCopy();
            }

            setTimeout(() => {
                setIsCopied(false);
            }, timeout)
        }, console.error)
    }

    return { isCopied, copyToClipboard };
}