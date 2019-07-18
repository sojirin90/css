<template>

    <div class="container">
       <header class="text-center my-20">Welcome to your Hobby</header>
        <div class="row">
            <form class="text-center">
                <div class="text-center">
                    <label style="margin-right: 5px">Enter your hobby:</label>
                    <input v-model="Hobby" placeholder="  " style="margin-right: 10px">
                    <button type="button" class="btn btn-labeled btn-success" style="margin-bottom:0px !important" @click.prevent="createNew">
                   <span class="btn-label"><i class="glyphicon glyphicon-plus"></i></span>Add Hobby</button>       
                </div>
           </form>
        </div>
        <table class="table table-striped" style="width: 70%; margin: 0 auto !important;">
            <thead>
                <tr>
                    <th scope="col" style="text-align: center">#</th>
                    <th scope="col" style="text-align: center">Hobby</th>
                    <th scope="col" style="text-align: center">Options</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(hobby, index) in Hobbies" :key="hobby">
                    <th scope="row" style="text-align: center; vertical-align: middle;">{{index}}</th>
                    <td style="text-align: center; vertical-align: middle;">
                        {{hobby}}
                    </td>
                    <td style="text-align: center; vertical-align: middle;"> 
                        <button type="button" class="btn btn-labeled btn-danger" @click.prevent="Delete(index)">
                        <span class="btn-label"><i class="glyphicon glyphicon-trash"></i></span>Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>

<script>
    export default {
        data: function() {
            return {
                Hobbies: [ ],
                Hobby: "",
            };
        },
        methods: {
            createNew() {
                console.log(this.Hobby)
                this.Hobbies.push(this.Hobby)
                this.Hobby = ""
            },
            Delete(index) {
                this.Hobbies.splice(index, 1);
            },
            Edit: function (Hobbies) {
                this.Hobbies (Hobby)
                this.Hobby = Hobbies;
            }
        },
    }
</script>

<style>
header {
    font-family: sans-serif;
    font-size: 90px;
    color: white;
    text-shadow: 8px 10px 10px #222;
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
.btn-label {
    position: relative;left: -12px;display: inline-block;padding: 6px 12px;background: rgba(0,0,0,0.15);border-radius: 3px 0 0 3px;
}
.btn-labeled {
    padding-top: 0;padding-bottom: 0;
}
.btn { 
    margin-bottom:10px; 
}
</style>