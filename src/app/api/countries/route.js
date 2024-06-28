import { NextResponse } from "next/server";
import { promises as fs } from "fs";

export async function GET(request) {
  const file = await fs.readFile(
    process.cwd() + "/src/lib/data/ne_110m_admin_0_countries.geojson",
    "utf8"
  );
  return NextResponse.json(file, { status: 200 });
}
