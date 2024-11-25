import mongoose from "mongoose";
import connectMongoDB from "../../../libs/mongodb";
import Listing from "../../../models/listingSchema";
import { NextResponse } from "next/server";
import { NextRequest } from 'next/server';


interface RouteParams {
    params: { id: string };
}

export async function POST(request: NextRequest) {
    const { title, description, quantity, expirationDate, location, contactInfo, imageSrc } = await request.json();
    await connectMongoDB();
    await Listing.create({ title, description, quantity, expirationDate, location, contactInfo, imageSrc });
    return NextResponse.json({ message: "Item added successfully" }, {status: 200});
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
    const { id } = params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json({ messgae: "Invalid ID format" }, { status: 400 });
    }

    await connectMongoDB();
    const deletedItem = await Listing.findByIdAndDelete(id);

    if (!deletedItem) {
        return NextResponse.json({ message: "Item not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Item deleted" }, { status: 200 });
}