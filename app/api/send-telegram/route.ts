export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    const botToken = "AAHNQUUk8Ic77HCK5H-AJeCSQXNn6imD_wQ";
    const chatId = "7750742185";

    const text = `
        *New Contact Message*:
        *Name:* ${name}
        *Email:* ${email}
        *Subject:* ${subject}
        *Message:* ${message}
    `;

    const telegramRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "Markdown",
      }),
    });

    if (!telegramRes.ok) {
      const error = await telegramRes.json();
      console.error("Telegram API Error:", error);
      return new Response(JSON.stringify({ success: false, error }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error: unknown) {
    console.error("Server Error:", error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return new Response(JSON.stringify({ success: false, error: errorMessage }), { status: 500 });
  }
}
