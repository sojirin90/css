<template>

    <div class="container">
       <header class="text-center my-20">Welcome to your Hobby</header>
        <div class="row">
            <form class="text-center">
                <div  style=" display: inline-flex;">
                    <div class="text-center">
                        <label>Hobby</label>
                        <input v-model="Hobby" placeholder="">
                        <button class="btn btn-primary plus " @click.prevent="createNew">Add Hobby</button>
                    </div>
                </div>
           </form>
        </div>

        <div v-for="hobby in Hobbies" :key="hobby" id="app">
            <ul>
                <li>
                    <div class="text-center">
                        {{ hobby }}
                        <button class="btn btn-primary remove m-l-20" @click.prevent="Delete(index)">delete</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
    export default {
        data: function() {
            return {
                Hobbies: [ ],
                Hobby: ""
            };
        },
        methods: {
            createNew() {
                console.log(this.Hobby)
                this.Hobbies.push(this.Hobby)
            },
            Delete(index) {                
                this.Hobbies.splice(index, 1);
            }
        },
    }
</script>

<style>
header {
    font-family: sans-serif;
    font-size: 90px;
    color: white;
    text-shadow: 5px 8px 10px #222;
    background-color: #5aa8fb;
    margin-bottom: 20px;
}
.remove {
    background-color: red;
}
.plus {
    background-color: rgb(185, 53, 29);
}
.plus {
    background-color: rgb(255, 2, 2);
}
ul li {
    background-color: #f2cfcb;
    margin-bottom: 5px;
    font-family: "montserrat", "verdana", "sans-serif";
    font-size: 30px;
    display: block;
    list-style-type: none;
}
.container {
    background-color: #ffffff;
    width: 100%;
}
.center {
   float: right;
   background: cyan;
}
</style>