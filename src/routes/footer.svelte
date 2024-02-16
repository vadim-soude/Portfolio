<script lang="ts">
	import * as config from '$lib/config'

</script>

<footer>
	<p><a class="a-header title" href="https://github.com/vadim-soude/Portfolio">{config.title} &copy {new Date().getFullYear()}</a></p>
</footer>

<style>
	footer {

      padding: var(--size-4);
      background-color: var(--surface-1);
		border-top: 1px solid var(--border);
	}

	p {
		color: var(--text-2);
	}
</style>
