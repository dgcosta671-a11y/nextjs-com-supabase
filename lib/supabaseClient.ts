import { supabase } from "../lib/supabaseClient";

export default async function Home() {
  const { data, error } = await supabase.from("teste").select("*").limit(1);

  return (
    <main style={{ padding: 40 }}>
      <h1>Home funcionando ✅</h1>
      <p>Supabase conectado: {error ? "NÃO" : "SIM"}</p>
      <pre>{error ? JSON.stringify(error, null, 2) : JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
