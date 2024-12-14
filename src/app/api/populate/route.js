import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET(req, res) {
    try{
       const prisma = new PrismaClient();
      
       let result = await prisma.Employee.findMany()
        
        return NextResponse.json(result)
    }
    catch(e){
        return NextResponse.json( {status:"fail", data:e})
    }
}