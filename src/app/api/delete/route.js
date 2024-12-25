import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";



export async function DELETE(req, res) {
    try{


        const { searchParams } = new URL(req.url)
      //  console.log("URL DATA=", req.url)
        const id = parseInt(searchParams.get('id'))

       // const id = searchParams.get('id')
      //  console.log("Search Param ID=", id)
        const prisma = new PrismaClient();
       
       let result = await prisma.employee.delete(
        {
            where: {id:id}
        }
       )
        
        return NextResponse.json( {status:"success", data:result})
    }
    catch(e){
        return NextResponse.json( {status:"fail", data:e})
    }
}