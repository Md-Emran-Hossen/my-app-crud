import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";



export async function POST(req, res) {
    try{


        const reqBody= await req.json();

    //    console.log("Form Data Test:=", reqBody);

        const prisma = new PrismaClient();
       
       let result = await prisma.employee.create(
        {
            data:{
                name : reqBody['name'],
                designation : reqBody['designation'],
                image : reqBody['image'],
                country : reqBody['country'],
                city : reqBody['city'],
                salary : parseInt(reqBody['salary']) ,
            }
        }
       )
        
        return NextResponse.json( {status:"success", data:result})
    }
    catch(e){
        return NextResponse.json( {status:"fail", data:e})
    }
}