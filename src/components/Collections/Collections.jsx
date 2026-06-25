function Collections() {
  const collections = [
    {
      title: "Necklaces",
      image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=500",
    },
    {
      title: "Earrings",
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500",
    },
    {
      title: "Bangles",
      image: "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?w=500",
    },
  ];

  return (
    <section className="container py-5">
      <h2 className="text-center fw-bold mb-5">
        Our Collections
      </h2>

      <div className="row">
        {collections.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow border-0">
              <img
                src={item.image}
                className="card-img-top"
                alt={item.title}
                style={{ height: "350px", objectFit: "cover" }}
              />

              <div className="card-body text-center">
                <h4>{item.title}</h4>

                <button className="btn btn-danger mt-2">
                  View Collection
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Collections;