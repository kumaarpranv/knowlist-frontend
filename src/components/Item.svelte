<script context=module lang="ts">
	import { setContext, getContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	
	const key = {};
    type itemContextDT = {
        current: Writable<Object>;
    }
	
	export const getItemContext = () => getContext<itemContextDT>(key);
	export const createItemContext = () => {
        const current = writable(null);
		const context = { current };
		setContext(key, context);

		return context;
	}
</script>
<script lang="ts">
    import { Icon, ArrowLeft, ArrowDown, VideoCamera, DocumentText } from "svelte-hero-icons";
    import type {IconSource} from "svelte-hero-icons";
    import Resource, {type resourceDT} from "./Resource.svelte"; 
    import { quadInOut } from 'svelte/easing';
    import { slide } from 'svelte/transition';
    export let open = false;
    export let name = '';

	export let resourceArray: resourceDT[] ;
    
    type IconMapType = {
        [key: string]: IconSource;
    };
  
    let iconMaps: IconMapType  = {"video": VideoCamera, "text": DocumentText};
    
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
    <h3 class="text-lg font-bold leading-6 text-gray-900">@{name}</h3>
    <button on:click|preventDefault={clickFunc} class="h-6 w-6">
        {#if open}
            <Icon src={ArrowDown} class="text-black" />
        {:else}
            <Icon src={ArrowLeft} class="text-black" />
        {/if}
    </button>
</li>
    {#if open}
    <div class="h-{(resourceArray.length*15).toString()}" transition:slide="{{ duration: 500, easing: quadInOut }}">
        {#each resourceArray as resource}
            <Resource resourceIcon={iconMaps[resource.resourceType]} resourceTitle={resource.resourceTitle} resourceUrl={resource.resouceUrl}  />
        {/each}
    </div>
    {/if}
</div>