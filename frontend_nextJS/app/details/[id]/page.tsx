import { notFound } from "next/navigation";

async function getItem(id: string) {
  try {
    const res = await fetch(`http://localhost:5000/api/items/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Failed to fetch item:", res.statusText);
      return null;
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching item:", error);
    return null;
  }
}

export default async function ItemDetails({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params; // Destructure `params` directly
  const item = await getItem(id);

  if (!item) {
    return notFound(); // Display a 404 page if the item is not found
  }

  return (
    <div className="item-details-container">
      <div className="item-details-card">
        <h2>{item.title}</h2>
        <img
          src={item.imageSrc}
          alt={item.title}
          className="item-details-image"
        />
        <p>
          <strong>Description:</strong> {item.description}
        </p>
        <p>
          <strong>Quantity:</strong> {item.quantity}
        </p>
        <p>
          <strong>Expires On:</strong>{" "}
          {new Date(item.expirationDate).toLocaleDateString()}
        </p>
        <p>
          <strong>Location:</strong> {item.location}
        </p>
        <p>
          <strong>Contact:</strong> {item.contactInfo}
        </p>
      </div>
    </div>
  );
}
