import dbConnect from "../config/db";
import { userModel } from "../model/page";
import { NextResponse } from "next/server";
export async function POST(req) {
    const {firstname,lastname,email,cnic,phone}=await req.json();
    dbConnect();
    await userModel.create({firstname,lastname,email,cnic,phone});
    return NextResponse.json({message:"Patient Added"})
}