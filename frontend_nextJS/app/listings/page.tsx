import Link from "next/link";

export default async function Listings() {
  const listings = await fetch("http://localhost:5000/api/items", {
    cache: "no-store",
  })
    .then((res) => res.json())
    .catch(() => []);

  return (
    <div className="container">
      <h2>Available Food Listings</h2>
      <div className="listings-grid">
        {listings.map((listing: any) => (
          <div key={listing._id} className="listing-card">
            <img
              src={listing.imageSrc}
              alt={listing.title}
              className="listing-image"
            />
            <h3>{listing.title}</h3>
            <p>{listing.description}</p>
            {/* No <a> inside <Link> */}
            <Link href={`/details/${listing._id}`} className="btn">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
