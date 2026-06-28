"use client"

import './SearchPanel.css'
import { useSearchPanel } from "./hook/useSearchPanel";
import { SearchInput } from "./components/search_input/search_input";

export function SearchPanel() {
    const { methods, searchText, isLoading } = useSearchPanel();

    return (
        <div className="search-panel" style={{alignItems: "center"}}>
            <h2>Cerca una recensione</h2>
            <SearchInput searchText={searchText} isLoading={isLoading} onInputChange={methods.handleChange} onSubmit={methods.handleSubmit} />
        </div>
    );
}