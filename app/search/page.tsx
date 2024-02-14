export default function SearchPage({ searchParams: { q } }: { searchParams: { q: string } }) {
    return (
        <div>{q}</div>
    )
};