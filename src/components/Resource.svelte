<script lang="ts">
    import { Icon,  Folder } from "svelte-hero-icons";
    import type {IconSource} from "svelte-hero-icons";
    export let resourceTitle:string;
    export let resourceUrl:string;
    export let resourceIcon: IconSource;
</script>
<script context=module lang="ts">
    export type resourceDT = {
        resourceType: string,
        resouceUrl: string,
        resourceTitle: string
    }
</script>
<a href={resourceUrl} target="_blank" rel="noreferrer">
<div class="h-10 flex flex-row pl-5 items-center bg-amber-200 text-zinc-600 space-x-10 hover:bg-amber-300 cursor-pointer">
    <Icon src={resourceIcon} class="w-5 h-5"/>
    <span>{resourceTitle}</span>
</div>
</a>