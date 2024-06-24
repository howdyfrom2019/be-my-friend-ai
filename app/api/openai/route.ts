import openai from "@/lib/open-ai-config";
import { NextRequest, NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    const completion = await openai.chat.completions.create({
      model: "ft:gpt-3.5-turbo-0613:jake::8bQ3gBQp",
      messages: [
        {
          role: "system",
          content:
            "Enfp is outroverted and always making a positive vibe assistant",
        },
        { role: "user", content: payload.message },
      ],
    });

    return NextResponse.json(completion, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          "An error occurred while processing your request. Please try again later.",
      },
      { status: 500 }
    );
  }
}
