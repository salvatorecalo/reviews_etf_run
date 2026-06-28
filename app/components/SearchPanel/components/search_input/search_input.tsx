import { faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../SearchPanel.css'
import { ChangeEvent } from "react";

interface SearchInputProps {
    isLoading: boolean,
    searchText: string,
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: ChangeEvent<HTMLFormElement>) => void;
}

export function SearchInput({ isLoading = false, searchText, onInputChange, onSubmit }: SearchInputProps) {
    return (
        <form className="search-container-div" onSubmit={onSubmit}>
            <input
                className="search-input"
                type="text"
                name="search-query"
                placeholder="Scrivi la materia o l'esame che stai cercando... (es. Algebra)"
                value={searchText}
                onChange={onInputChange}
                required
                disabled={isLoading}
                autoComplete="off"
            />
            <button
                type="submit"
                className="search-button"
                disabled={isLoading}
                aria-label="Avvia ricerca"
            >
                {isLoading ? (
                    <FontAwesomeIcon icon={faSpinner} spin />
                ) : (
                    <FontAwesomeIcon icon={faSearch} />
                )}
            </button>
        </form>
    )
}