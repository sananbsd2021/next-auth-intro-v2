
// import NewsSellList from "../newssell/page";
import NewsListPage from "./Newslist";
import NewsSellListPage from "./Newssell";


export default function RightContentAreaPage() {
    return (
        <div>
            <NewsListPage />
            {/* <NewsSellList /> */}
            <NewsSellListPage />

        </div>
    );
}