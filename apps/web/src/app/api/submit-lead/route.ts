import { NextResponse } from "next/server";

const AIRTABLE_PAT = process.env.AIRTABLE_PAT;
const AIRTABLE_BASE = process.env.AIRTABLE_BASE || "appth0tDhEw1zOQr7";
const AIRTABLE_TABLE = process.env.AIRTABLE_TABLE || "Leads";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, businessName, phone, email, industry, callVolume } = body;

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Submit to Airtable
    const airtableRes = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE}/${AIRTABLE_TABLE}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${AIRTABLE_PAT}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                "First Name": firstName,
                "Last Name": lastName,
                "Business Name": businessName,
                Phone: phone,
                Email: email,
                Industry: industry,
                "Call Volume": callVolume,
                Source: "Website Demo Form",
              },
            },
          ],
        }),
      }
    );

    if (!airtableRes.ok) {
      const err = await airtableRes.text();
      console.error("Airtable error:", err);
      return NextResponse.json({ error: "Failed to save lead" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Submit lead error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
