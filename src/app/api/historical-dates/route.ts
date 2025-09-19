import { NextResponse } from "next/server";
import historicalDates from "./historical-dates.json";

export async function GET() {
  try {
    await new Promise((res) => setTimeout(res, 500));
    return NextResponse.json(historicalDates);
  } catch (e) {
    console.error('error' , e)
    return NextResponse.json(
      {
        error: "Failed to fetch data",
      },
      { status: 500 }
    );
  }
}
