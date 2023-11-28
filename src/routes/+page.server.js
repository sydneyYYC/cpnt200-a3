import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("a3_blog").select();
  return {
    a3_blog: data ?? [],
  };
}