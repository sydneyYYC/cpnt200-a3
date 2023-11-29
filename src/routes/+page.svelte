<script>
  export let data;
</script>


<!-- <h1>{data.a3_blog.title}</h1> -->
{#each data.a3_blog as post}
<h1>{post.title}</h1>
<p>{post.summary}</p>
<p>{post.author}</p>

  {#each post.tags as tag}
  <li>{tag}</li>
  {/each}
<p>{post.markdown_content}</p>
<p>{post.date}</p>
{/each}


