export async function GET() {
  console.log("SERVER SECRET:", process.env.DB_PASSWORD);

  return Response.json({
    secretText: process.env.DB_PASSWORD,
  });
}
