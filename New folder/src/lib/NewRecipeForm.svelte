<script>
    import {createEventDispatcher} from 'svelte';

    let dispatch = createEventDispatcher(); 

    let title;
    let ingredients;
    let directives;

    const handleSubmit = () => {
        const recipe = {
            title,
            ingredients,
            directives
        }
        dispatch('createRecipe', recipe)
    };
</script>

<form on:submit|preventDefault={handleSubmit}>
    <input type="text" placeholder="name" bind:value={title}>
    <input type="text" placeholder="ingredients" bind:value={ingredients}>
    <input type="text" placeholder="directives" bind:value={directives}>
    <button>Create Recipe</button>
</form> 