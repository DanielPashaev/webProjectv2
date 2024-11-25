import Link from "next/link";

export const metadata = {
  title: "Home - Your App",
};

async function getListings() {
  const res = await fetch("http://localhost:5000/api/items", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch listings");
  }
  return res.json();
}

export default async function Home() {
  const listings = await getListings();

  return (
    <div>
      <section className="hero">
        <div>
          <h1>Reduce Food Waste, Share What You Can!</h1>
          <p>
            Join us in making the world a better place by donating or requesting
            food today.
          </p>
          <Link href="/listings" className="btn">
            Browse Listings
          </Link>
        </div>
      </section>
      <div className="container">
        <h2>Available Items</h2>
        <div className="listings-grid">
          {listings.length === 0 ? (
            <p>No items available. Add a listing to get started!</p>
          ) : (
            listings.map((item: any) => (
              <div key={item._id} className="listing-card">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="listing-image"
                />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
