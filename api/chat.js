// api/chat.js
export default async function handler(req, res) {
  // 1. Security: Allow only POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.error("API Key missing");
    return res.status(500).json({ error: "Server Configuration Error" });
  }

  try {
    // 2. Direct Connection to Gemini 1.5 Flash (No Library Needed)
    // We use the REST API URL directly.
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
    // 3. The System Prompt (Your Resume Data)
    const systemPrompt = `
      You are Mehjabin Hossain's AI Portfolio Assistant.
      
      Here is Mehjabin's Profile:
      - **Current Role:** Senior Project Manager at Ameri Lux (2025-Present).
      - **Experience:** Project Manager at DZ Construction, HRIS Manager at BD Plus IT.
      - **Education:** CSE Graduate (2025) from University of Asia Pacific.
      - **Skills:** React, Tailwind CSS, Python, SEO, Agile/Jira, Project Management.
      - **Contact:** mehjabinhossaineva@gmail.com | 01521111289.
      - **Location:** Keraniganj, Dhaka, Bangladesh.

      User Question: ${message}
      
      Instructions:
      - Answer professionally, briefly, and enthusiastically.
      - If the answer isn't in the profile, ask them to email Mehjabin.
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
      console.error("Gemini API Error Details:", data);
      return res.status(response.status).json({ error: data.error?.message || "AI Service Error" });
    }

    // 6. Extract the reply safely
    const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm thinking...";
    return res.status(200).json({ reply });

  } catch (error) {
    console.error("Server Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}