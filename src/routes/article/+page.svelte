<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'

	export let data
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				<a href={post.slug} class="title">{post.title}</a>
				<p class="description">{post.description}</p>
				<p class="date">{formatDate(post.date)}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
    .posts {
        display: grid;
        gap: var(--size-7);
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

    .date {
        color: var(--text-2);
        margin-top: var(--size-2);
    }

    .description {
        margin-top: var(--size-1);
    }
</style>
