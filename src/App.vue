<template>

    <div class="container">
       <header class="text-center my-5">Welcome to your Hobby</header>
        <div class="row">
            <form>
                <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group" style=" display: inline-flex;">
                    <div>
                        <label>Hobby</label>
                        <input v-model="Hobby" placeholder="">
                    </div>
                    <div class="text-center">
                        <button class="btn btn-primary plus" @click.prevent="createNew">Add Hobby</button>
                    </div>
                </div>
           </form>
        </div>

        <div v-for="hobby in Hobbies" :key="hobby" id="app">
            <ul>
                <!-- <li>{{ hobby }}</li>
                <div class="containers">
                    <div class="text-center">
                        <button class="btn btn-primary remove" @click.prevent="Delete(index)">Delete</button>
                    </div>
                </div> -->
                
                
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

.row {
    background-color: rgb(172, 228, 238);
}
header {
    font-family: sans-serif;
    font-size: 90px;
    color: white;
    text-shadow: 5px 8px 10px #222;
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
    background-color: rgb(209, 196, 194);
    color: white;
    margin-bottom: 5px;
    font-family: "montserrat", "verdana", "sans-serif";
    font-size: 30px;
    display: block;
    list-style-type: none;
}
.container {
    background-color: rgb(151, 251, 57);
}
.center {
   background: cyan;
}
.containers {
    display: flex;
    flex-direction: column;
}

</style>