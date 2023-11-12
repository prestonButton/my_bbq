import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
import type { NextApiRequest } from 'next';

const prisma = new PrismaClient()

export async function GET() {
  const orders = await prisma.order.findMany();
  return NextResponse.json(orders);
}

export async function POST(req: NextRequest) {
  const order = await req.json();

  try {
    const newOrder = await prisma.order.create({
      data: order,
    });
    return NextResponse.json(newOrder);
  } catch (error) {
    console.error(error);
    return NextResponse.error({ status: 500, message: 'Failed to create order' });
  }
}
