import LeftSidebarPage from "../components/LeftSidebar";

export default function InfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* ส่วนซ้าย */}
      <div className="w-full md:w-1/4 bg-blue-500 text-white p-4">
        <LeftSidebarPage />
      </div>

      {/* ส่วนขวา */}
      <div className="w-full md:w-3/4 bg-gray-100 p-4">
        <main>{children}</main>
      </div>
    </div>
  );
}
