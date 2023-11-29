import { supabase } from "$lib/supabaseClient";
import { compile } from 'mdsvex';

export async function load() {
  const { data } = await supabase.from("a3_blog").select();
  const compiledResponse = await compile("markdown_content");
  return {
    a3_blog: data ?? [],
    // compiledResponse : content
  };
  
  // ...
};

// export const load = load = async () => {
//   const res = data.a3_blog.markdown_content; // Get data with eg. `fetch`
//   const compiledResponse = await compile(res);

//   return { content: compiledResponse?.code };
// };

// export const compiledResponse = await compile(data.a3_blog.markdown_content) {



// return { content: compiledResponse?.code };
// }
// return compiledResponse;
// ...

