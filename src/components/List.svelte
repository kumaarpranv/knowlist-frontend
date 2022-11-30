<script lang="ts">
   import Item, {createItemContext} from "./Item.svelte";
   createItemContext();
   let data = [{'name': '@pranav'}, {'name': '@kumar'}, {'name': '@vikas'} ];
   let listdata = {'@pranav': ['React.org', 'Reactin2022.com', 'Reactfg.net'], '@kumar': ['Nodejs.com', 'nodejs.org'], '@vikas':['vue.js']};
</script>

<div class="flex flex-col items-center">
   <div class="pt-20">
      <ul class="bg-white shadow sm:rounded-lg">
         {#each data as elem, i}
            <Item name={elem.name}></Item>
            {#if data.length > 1 && i<data.length-1}
               <div class="border-t border-gray-200" />
            {/if}
         {/each}
      </ul>
   </div>
</div>