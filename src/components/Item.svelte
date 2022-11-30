<script context=module>
	import { setContext, getContext } from 'svelte';
	import { writable } from 'svelte/store';
	
	const key = {};
	
	export const getItemContext = () => getContext(key);
	export const createItemContext = () => {
        const current = writable(null);
		const context = { current };
		setContext(key, context);

		return context;
	}
</script>
<script>
    
    import { Icon, ArrowLeft, ArrowDown } from "svelte-hero-icons";
    export let open = false;
    export let name = '';
	const { current } = getItemContext();
	const currentKey = {};

    createItemContext();

    let clickFunc = () => {
        open = !open;
		if(open)
			$current = currentKey;
    }
    $: {
        if ($current != currentKey)
			open = false;
    }
</script>
<div class="flex flex-col">
<li class="w-80 {"h-15"} flex flex-row justify-between px-4 py-5 sm:px-6">
    <h3 class="text-lg font-medium leading-6 text-gray-900">{name}</h3>
    <button on:click|preventDefault={clickFunc} class="h-6 w-6">
        {#if open}
            <Icon src={ArrowDown} class="text-black" />
        {:else}
            <Icon src={ArrowLeft} class="text-black" />
        {/if}
    </button>
</li>
    {#if open}
    <div class="h-40">
        <p class="px-8">hello</p>
    </div>
    {/if}
</div>