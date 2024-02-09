<script lang="ts">
	import { formatDate, search } from '$lib/utils'
	import * as config from '$lib/config'

	export let data
	let searchData: string = "";

</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<div class="search-module">
		<label for="search">Rechercher</label>
		<input id="search" type="text" bind:value={searchData}>
	</div>
	<ul class="posts">
		{#each data.posts as post}
			{#if search(post.title, searchData)}
				<li class="post">
					<a href={post.slug} class="title">{post.title}</a>
					<p class="description">{post.description}</p>
					<p class="date">{formatDate(post.date)}</p>
					<p class="tag">Tags : {post.categories.map(a => a).join(", ")}</p>
				</li>
			{/if}
		{/each}
	</ul>
</section>

<style>

		label{
				margin-right: 20px;
				font-size: var(--font-size-fluid-1);
		}

    .posts {
        display: grid;
        gap: var(--size-5);
    }

    .post {
        max-inline-size: var(--size-content-5);
    }

    .post:not(:last-child) {
        border-bottom: 1px solid var(--border);
        padding-bottom: var(--size-7);
    }

    .title {
        font-size: var(--font-size-fluid-3);
        /*text-transform: capitalize;*/
				white-space: nowrap;
    }

		.tag{
        color: var(--text-2);
        margin-top: var(--size-2);
		}

    .date {
        color: var(--text-2);
        margin-top: var(--size-2);
    }

    .description {
        margin-top: var(--size-1);
    }

		body{
				display: flex;
		}

		input{

		}

    .search-module{
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				padding-bottom: 7vh;
		}
</style>
