export default async function handler(req, res) {
  // 1. Security: Allow only POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "API Key is missing in Vercel Settings" });
  }

  try {
    // 2. The Direct Connection (No Library Needed)
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    // 3. The Prompt logic
    const systemPrompt = `
      You are Mehjabin Hossain's AI Portfolio Assistant.
      Key Info:
      - Role: Senior Project Manager at Ameri Lux (2025-Present).
      - Skills: React, Tailwind, Python, SEO, Agile/Jira.
      - Education: CSE Graduate (2025), Univ. of Asia Pacific.
      - Contact: mehjabinhossaineva@gmail.com
      
      User asked: ${message}
      Answer professionally and concisely.
    `;

    // 4. Send the request using standard 'fetch'
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: systemPrompt }] }]
      })
    });

    const data = await response.json();

    // 5. Handle potential errors from Google
    if (!response.ok) {
      console.error("Gemini API Error:", data);
      return res.status(response.status).json({ error: data.error?.message || "API Error" });
    }

    // 6. Extract the reply
    const reply = data.candidates[0].content.parts[0].text;
    return res.status(200).json({ reply });

  } catch (error) {
    console.error("Server Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}