<script>
  export let data;
</script>


<!-- <h1>{data.a3_blog.title}</h1> -->
{#each data.a3_blog as post}
<li>{post.title}</li>
{/each}


