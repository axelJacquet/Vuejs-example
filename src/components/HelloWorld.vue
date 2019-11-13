<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span v-bind:title="message">
      Hover your mouse over me for a few seconds to see my dynamically bound title!
    </span>
    <p>
      Enter your text : <input type="text" v-model="inputVal">
    </p>
    <p>
      Input Value: <span v-text="inputVal"></span>
    </p>
    <button v-on:click="reverseMessage">Reverse your input value</button>
    <ul>
       <li v-for="user in users" :key="user.id">
        {{user.firstname}} {{user.lastname}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      users: [
        { id: 1, firstname: "Fan", lastname: "And" },
        { id: 2, firstname: "Hello", lastname: "World" },
        { id: 3, firstname: "Yoo", lastname: "Kaa" }
      ],
      message: "You loaded this page on " + new Date().toLocaleString(),
      inputVal: ""
    };
  },
  methods: {
    reverseMessage: function() {
      this.inputVal = this.inputVal
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
