import fetchSearch from "@/lib/fetchSearch";

export default async function SearchPage({ searchParams: { q } }: { searchParams: { q: string } }) {
    const result = await fetchSearch(q);

    console.log(result);

    return (
        <div>SearchPage</div>
    )
};  