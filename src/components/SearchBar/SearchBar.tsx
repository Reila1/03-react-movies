import { useRef } from 'react';
import css from './SearchBar.module.css';
import toast from 'react-hot-toast';

interface SearchBarProps {
    onSubmit: (query: string) => void;
}

const SearchBar = ({ onSubmit }: SearchBarProps) => {
    const formRef = useRef<HTMLFormElement>(null);
    const handleAction = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const query = formData.get('query') as string;
        const trimmedQuery = query?.trim();

        if (!trimmedQuery) {
            toast.error('Please enter a search query');
            return;
        }

        onSubmit(trimmedQuery);
        formRef.current?.reset();
    };

    return (
        <header className={css.header}>
            <div className={css.container}>
                <a
                    className={css.link}
                    href="https://www.themoviedb.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by TMDB
                </a>
                <form 
                    className={css.form} 
                    onSubmit={handleAction} 
                    ref={formRef}
                >
                    <input
                        className={css.input}
                        type="text"
                        name="query"
                        autoComplete="off"
                        placeholder="Search movies..."
                        autoFocus
                    />
                    <button className={css.button} type="submit">
                        Search
                    </button>
                </form>
            </div>
        </header>
    );
};

export default SearchBar;