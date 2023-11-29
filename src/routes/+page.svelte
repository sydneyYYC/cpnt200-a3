<script>
  export let data;
</script>


<!-- <h1>{data.a3_blog.title}</h1> -->
<main>
  {#each data.a3_blog as post}
  <h1>{post.title}</h1>
  <p>{post.summary}</p>
  <p>{post.author}</p>

  <div class="tags">
      {#each post.tags as tag}
        <li>{tag}</li>
        {/each}
      </div>
    <p>{@html post.markdown_content}</p>

  <p>{post.date}</p>
  {/each}
</main>

<style>
main {
  margin: auto;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  max-width: 60ch;
  margin-top: 2rem;
}

li {
  text-decoration: none;
  list-style-type: none;
  background-color:rgb(213, 216, 250);
  padding: 0.5rem;
  border-radius: 20%;
}

.tags{
  display: flex;
  gap: 1rem;
  min-width: 60ch;
}
</style>


