import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";



export async function PUT(req, res) {
    try{
        const { searchParams } = new URL(req.url)
        const id = parseInt(searchParams.get('id'))
        const reqBody = await req.json();

        console.log("Body Data: ", reqBody)
        const prisma = new PrismaClient();
       
       let result = await prisma.employee.update(
        {
            where: {id:id},
            data:{
                name: reqBody['name'],
                designation: reqBody['designation'],
                image: reqBody['image'],
                country: reqBody['country'],
                city: reqBody['city'],
                salary: parseInt(reqBody['salary'])
            }
        }
       )
        
        return NextResponse.json( {status:"success", data:result})
    }
    catch(e){
        return NextResponse.json( {status:"fail", data:e})
    }
}