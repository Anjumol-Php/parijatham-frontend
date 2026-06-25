import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function AdminLayout({ children }) {

  return (

    <div
      style={{
        display: "flex",
        background: "#f8f8f8"
      }}
    >

      <Sidebar />

      <div
        style={{
          flex: 1
        }}
      >

        <Topbar />

        <div className="p-4">

          {children}

        </div>

      </div>

    </div>

  );
}

export default AdminLayout;