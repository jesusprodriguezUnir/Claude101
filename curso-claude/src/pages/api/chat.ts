import { GoogleGenerativeAI } from "@google/generative-ai";

export const prerender = false;

export async function POST({ request }) {
  try {
    const data = await request.json();
    const userMessage = data.message;

    if (!userMessage) {
      return new Response(JSON.stringify({ error: "Mensaje no proporcionado" }), { status: 400 });
    }

    const apiKey = import.meta.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Falta la API Key de Gemini" }), { status: 500 });
    }

    // Importamos el contenido crudo de todas las lecciones .md
    // Esto agrupa los archivos en tiempo de construcción/ejecución para enviarlos como contexto.
    const files = import.meta.glob('../lecciones/*.md', { query: '?raw', import: 'default', eager: true });
    
    let contextDocs = "";
    for (const path in files) {
      contextDocs += `\n--- Documento: ${path.replace('../lecciones/', '')} ---\n${files[path]}\n`;
    }

    // Inicializamos Gemini
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" }); // Modelo rápido y económico

    const prompt = `
Eres un asistente experto integrado en la plataforma de formación de Claude 101. Funciones como un "NotebookLM".
Tu objetivo es responder a las preguntas del usuario basándote ESTRICTAMENTE en el siguiente contexto extraído de los manuales y lecciones del curso.
Responde de forma clara, profesional y con formato Markdown si es necesario.
Si la respuesta no se encuentra en el contexto, indica amablemente que no tienes esa información en los apuntes actuales.
Utiliza un tono amigable y en español.

CONTEXTO DEL CURSO:
${contextDocs}

PREGUNTA DEL USUARIO:
${userMessage}
    `;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    return new Response(JSON.stringify({ response: text }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });

  } catch (error) {
    console.error("Error en la API de Gemini:", error);
    return new Response(JSON.stringify({ error: "Error interno del servidor al contactar con el modelo." }), { status: 500 });
  }
}
