import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

function escapeCsv(val: any): string {
  const str = String(val ?? "").replace(/"/g, '""');
  return `"${str}"`;
}

function updateCsvFile(filePath: string, records: any[]) {
  const headers = [
    "No",
    "Tarikh",
    "Masa",
    "Nama Penuh",
    "No. Telefon",
    "Status Kehadiran",
    "Jumlah Pax",
    "Ucapan & Doa",
  ];

  let csvContent = "\uFEFF" + headers.map(escapeCsv).join(",") + "\r\n";

  // Reverse so earliest is first (chronological order in spreadsheet)
  const chronological = [...records].reverse();

  chronological.forEach((rec, idx) => {
    const row = [
      idx + 1,
      rec.date || "-",
      rec.time || "-",
      rec.name || "-",
      rec.phone || "-",
      rec.status || "-",
      rec.pax ?? 0,
      rec.message || "-",
    ];
    csvContent += row.map(escapeCsv).join(",") + "\r\n";
  });

  fs.writeFileSync(filePath, csvContent, "utf-8");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, status, pax, message } = body;

    if (!name || !name.trim()) {
      return NextResponse.json(
        { error: "Nama diperlukan" },
        { status: 400 }
      );
    }

    const now = new Date();
    // Format date in Malaysia / local timezone
    const dateStr = now.toLocaleDateString("ms-MY", {
      timeZone: "Asia/Kuala_Lumpur",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    const timeStr = now.toLocaleTimeString("ms-MY", {
      timeZone: "Asia/Kuala_Lumpur",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const rsvpRecord = {
      id: Date.now().toString(),
      name: name.trim(),
      phone: phone?.trim() || "-",
      status: status || "Hadir",
      pax: status === "Hadir" ? Number(pax) || 1 : 0,
      message: message?.trim() || "",
      date: dateStr,
      time: timeStr,
      timestamp: now.toISOString(),
    };

    // Store in local JSON data file for persistence
    const dataDir = path.join(process.cwd(), "data");
    const jsonFilePath = path.join(dataDir, "rsvps.json");
    const csvFilePath = path.join(dataDir, "rsvp_guest_list.csv");

    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    let existing: any[] = [];
    if (fs.existsSync(jsonFilePath)) {
      try {
        existing = JSON.parse(fs.readFileSync(jsonFilePath, "utf-8"));
      } catch (e) {
        existing = [];
      }
    }

    // Add new record at front for display
    existing.unshift(rsvpRecord);
    fs.writeFileSync(jsonFilePath, JSON.stringify(existing, null, 2));

    // Automatically update the Excel CSV file
    updateCsvFile(csvFilePath, existing);

    // Optional webhook to Google Sheets or Excel Online
    const webhookUrl =
      process.env.GOOGLE_SHEET_URL ||
      process.env.EXCEL_WEBHOOK_URL ||
      process.env.NEXT_PUBLIC_RSVP_WEBHOOK_URL;

    if (webhookUrl) {
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(rsvpRecord),
      }).catch((err) => {
        console.error("Webhook sync error:", err);
      });
    }

    return NextResponse.json({ success: true, record: rsvpRecord });
  } catch (err: any) {
    return NextResponse.json(
      { error: "Ralat memproses RSVP: " + err.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const jsonFilePath = path.join(process.cwd(), "data", "rsvps.json");
    if (!fs.existsSync(jsonFilePath)) {
      return NextResponse.json([]);
    }
    const data = JSON.parse(fs.readFileSync(jsonFilePath, "utf-8"));
    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json([]);
  }
}
