<script lang="ts">
   import Item, {createItemContext} from "./Item.svelte";
   import type {resourceDT} from "./Resource.svelte";
   createItemContext();
   type dataResourceType = {
        [key: string]: resourceDT[];
    };

   let data = [{'id':'123','name': 'pranav'}, {'id':'124', 'name': 'kumar'}, {'id':'125', 'name': 'vikas'} ];
   let dataResource: dataResourceType = {'123': [{'resouceUrl':'https://youtube.com','resourceTitle':'Youtube react playlist','resourceType':'video'},{'resouceUrl':'https://medium.com','resourceTitle':'Medium react article','resourceType':'text'}],
                           '124':[], '125':[]}
</script>

<div class="flex flex-col w-80">
   <ul class="bg-white shadow sm:rounded-lg">
      <li class="w-80 {"h-15"} bg-black rounded-t-lg flex flex-row justify-center px-4 py-5 sm:px-6">
         <h3 class="text-lg font-bold text-white-900">React Node</h3>
      </li>
      <div class="border-t border-gray-200" />
      {#each data as elem, i}
         <Item resourceArray={dataResource[elem.id]} name={elem.name}></Item>
         {#if data.length > 1 && i<data.length-1}
            <div class="border-t border-gray-200" />
         {/if}
      {/each}
   </ul>
</div>