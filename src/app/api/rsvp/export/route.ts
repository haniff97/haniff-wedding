import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const dataDir = path.join(process.cwd(), "data");
    const csvFilePath = path.join(dataDir, "rsvp_guest_list.csv");

    if (!fs.existsSync(csvFilePath)) {
      // Default empty CSV with headers
      const defaultCsv =
        "\uFEFF\"No\",\"Tarikh\",\"Masa\",\"Nama Penuh\",\"No. Telefon\",\"Status Kehadiran\",\"Jumlah Pax\",\"Ucapan & Doa\"\r\n";
      return new NextResponse(defaultCsv, {
        headers: {
          "Content-Type": "text/csv; charset=utf-8",
          "Content-Disposition": 'attachment; filename="RSVP_Haniff_Hanini.csv"',
        },
      });
    }

    const fileContent = fs.readFileSync(csvFilePath, "utf-8");

    return new NextResponse(fileContent, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": 'attachment; filename="RSVP_Haniff_Hanini.csv"',
      },
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Gagal memuat turun fail: " + err.message },
      { status: 500 }
    );
  }
}
