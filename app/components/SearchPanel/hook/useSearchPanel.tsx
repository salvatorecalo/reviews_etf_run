"use client"
import { ChangeEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export function useSearchPanel() {
    const [searchText, setSearchText] = useState<string>("")
    const router = useRouter()
    const params = useSearchParams()
    const lang = params.get("lang") || "it"
    const [isLoading, setIsLoading] = useState<boolean>(false)

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchText(e.target.value);
    }

    function handleSubmit(e: ChangeEvent<HTMLFormElement>){
        setIsLoading(true)
        e.preventDefault()
        const trimmedSearch = searchText.trim()
        if (!trimmedSearch) return
        setIsLoading(false)

        router.push(`/course/${encodeURIComponent(trimmedSearch)}`)
    }

    return {
        methods: {
            handleChange,
            handleSubmit
        },
        searchText,
        isLoading
    }
}