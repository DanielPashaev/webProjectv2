import mongoose, { Schema, Document, Model } from "mongoose";

interface LItem extends Document {
    title: string;
    description: string;
    quantity: string;
    expirationDate: string;
    location: string;
    contactInfo: string;
    imageSrc: string;
}

const listingSchema = new Schema<LItem>({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    quantity: {
        type: String,
        required: true,
    },
    expirationDate: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    contactInfo: {
        type: String,
        required: true,
    },
    imageSrc: {
        type: String,
        required: true,
    },

});

const Listing: Model<LItem> = mongoose.models.Listing || mongoose.model<LItem>("Listing", listingSchema);
export default Listing;