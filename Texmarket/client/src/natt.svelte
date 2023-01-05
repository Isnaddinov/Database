<script lang="ts">
  import axios from "axios";
  import { each } from "svelte/internal";

  let inputName: HTMLInputElement;
  let inputImage: HTMLInputElement;

  type Category = {
      id: number;
      name: string;
      image: string;
  };
  let categories: Category[] = [];
  function getCategory() {
      axios.get("http://localhost:9090/categories").then((response) => {
          categories = response.data.categories;
      });
  }
       getCategory()
  function createCategory() {
      const category = {
          name: inputName.value,
          image: inputImage.value,
      };

      axios
          .post("http://localhost:9090/categories", category)
          .then((response) => {
              alert(response.data.message);
              getCategory();
          })
          .catch((error) => {
              console.error(error.message);
          });
      getCategory();
  }

  function deleteCategory(id: number) {
      axios
          .delete("http://localhost:9090/categories" + id)
          .then((response) => {
              alert(response.data.message);
          })
          .catch((error) => {
              console.error(error.message);
          });
      getCategory();
  }

  getCategory();
</script>

  <!-- HEDAER - START -->
      {#each categories as category}
          <h2>{category.id}{category.name}</h2>
      {/each}
      <div class="newcat">
          <input
              bind:this={inputName}
              type="text"
              placeholder="Catigory Name"
          />
          <input
              bind:this={inputImage}
              type="text"
              placeholder="Catigory Image url"
          />
          <button on:click={createCategory}>New Catigory</button>
      </div>