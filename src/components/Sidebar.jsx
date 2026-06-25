function Sidebar() {
  return (
    <div
      style={{
        width: "260px",
        background: "#fff",
        minHeight: "100vh",
        borderRight: "1px solid #eee"
      }}
    >
      <div className="p-4">

        <h3
          style={{
            color: "#E67E22",
            fontWeight: "700"
          }}
        >
          🌸 Parijatham
        </h3>

        <small
          style={{
            color: "#999"
          }}
        >
          Admin Panel
        </small>

      </div>

      <ul className="sidebar-menu">

  <li className="active-menu">
    📊 Dashboard
  </li>

  <li>
    🏷 Categories
  </li>

  <li>
    📦 Products
  </li>

  <li>
    🛒 Orders
  </li>

  <li>
    👥 Customers
  </li>

  <li>
    ⭐ Reviews
  </li>

  <li>
    ⚙ Settings
  </li>

</ul>

    </div>
  );
}

export default Sidebar;