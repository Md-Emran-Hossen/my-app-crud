import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET(req, res) {
    try{

        const { searchParams } = new URL(req.url)
        const id = parseInt(searchParams.get('id'))

       const prisma = new PrismaClient();
      
       let result = await prisma.employee.findUnique(
        {
            where:{id:id}
        }
       )
        
       return NextResponse.json( {status:"success", data:result})
     //   return NextResponse.json(result)
    }
    catch(e){
        return NextResponse.json( {status:"fail", data:e})
    }
}