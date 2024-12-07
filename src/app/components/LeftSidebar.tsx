// import PageViews from './PageView';
// import BasicCard from './BasicCard';
import MenuListPage from './Menulists';
// import FacebookCardTailwind from './FacebookCardTailwind';
import CommanderPage from './Commander';
// import LoginPage from './LoginForm';
// import DirectorProfile from './DirectorProfile';


export default function LeftSidebarPage() {
    return (
        <div>
            {/* <DirectorProfile /> */}
            <CommanderPage />
            <br />
            {/* <PageViews /> */}
            {/* <BasicCard /> */}
            <br />
            <div className="border rounded-lg shadow-sm mb-4">
                <MenuListPage />
            </div>

            {/* <div className="container mt-5">
                <h1 className="text-center mb-4">Facebook Post Card Example</h1>
                <FacebookCard />
            </div> */}

            {/* <FacebookCardTailwind /> */}

            {/* <LoginPage /> */}
        </div>
    );
}