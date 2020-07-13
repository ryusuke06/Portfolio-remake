<template>
  <v-card>
    <v-card-title>
      Todo List
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="todos" :search="search"></v-data-table>

<!-- draggableテスト -->
    <ul>
      <draggable v-model="todos" :options="{ animation: 200, delay: 50 }" >
        <li v-for="(todo, index) in todos" :key="index">
          {{ todo.title }}
        </li>
      </draggable>
    </ul>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      todos: [
        {
          title: "test",
          username: "太郎",
        },
        {
          title: "testtest",
          username: "一太郎",
        }
      ],
      search: "",
      headers: [
        {
          text: "タイトル",
          align: "left",
          sortable: false,
          value: "title"
        },
        { text: "ユーザー名", value: "username" },
      ]
    };
  }
};
</script>

<style>
</style>