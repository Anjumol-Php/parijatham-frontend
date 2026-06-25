import AdminLayout from "../layouts/AdminLayout";

function Dashboard() {

  return (

    <AdminLayout>

      <h2 className="mb-4">
        Dashboard
      </h2>

      <div className="row">

        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h5>Products</h5>
              <h2>0</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h5>Categories</h5>
              <h2>1</h2>
            </div>
          </div>
        </div>

      </div>

    </AdminLayout>

  );
}

export default Dashboard;