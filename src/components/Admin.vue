<template>
  <div>
    <!-- Awal Info Motor -->
    <div id="info" style="padding-top: 8rem">
      <div id="app" class="container">
        <br />
        <div class="card-judul">
          <h1 style="text-align: center">Pilih Motor Favorit Anda</h1>
          <br /><br />
        </div>
        <div style="text-align: center">
          <form @submit.prevent="add">
            <input type="hidden" v-model="form.id" required />
            <label for="">Gambar :</label><br /><br />
            <input type="text" v-model="form.img" required /><br />
            <label for="merk"><br />Merk :</label><br /><br />
            <input type="text" v-model="form.merk" required /><br />
            <label for="rp"><br />Harga :</label><br /><br />
            <input type="text" v-model="form.rp" required /><br />
            <label for="ket"><br />Spesifikasi :</label><br /><br />
            <input type="text" v-model="form.ket" required /><br /><br />
            <button type="submit" v-show="!updateSubmit" id="add">Tambahkan</button
            ><br />
            <button type="button" v-show="updateSubmit" @click="update(form)">
              Perbarui
            </button>
          </form>
        </div>
        <div class="card-isi">
          <div class="row">
            <div
              class="col"
              v-for="(user, index) in users"
              :key="index"
              @click="infoMotor(index)"
            >
              <div class="card" style="width: 18rem">
                <img class="card-img-top" :src="user.img" />
                <div class="card-body">
                  <h3 class="card-title">{{ user.merk }}</h3>
                  <h5><span>Harga Mulai</span><br /><b>{{ user.rp }}</b></h5>
                  <br />
                  <p class="card-text">{{ user.ket }}</p>
                  <br />
                </div>
                <button @click="edit(user)" id="ed">Perbarui</button><button @click="del(user)" id="del">Hapus</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Akhir Info Motor -->

    <!-- Awal Peduli -->
    <div
      id="peduli"
      class="container"
      style="font-family: cursive; padding-top: 8rem; background-color: #f85059;"
    >
      <br />
      <div class="card-judul">
        <h1 style="text-align: center">
          PT YAMAAP Salurkan CSR Perlindungan Jaminan Sosial Ketenagakerjaan
        </h1>
        <br /><br />
      </div>
      <div style="text-align: center">
        <form @submit.prevent="add">
          <input type="hidden" v-model="form.id" required />
          <label for="img1">Gambar :</label><br /><br />
          <input type="text" v-model="form.img1" required /><br />
          <label for="merk"><br />Konten :</label><br /><br />
          <input type="text" v-model="form.konten" required /><br />
          <br /><br />
          <button type="submit" v-show="!updateSubmit">Tambahkan</button>
          <button type="button" v-show="updateSubmit" @click="update(form)">
            Perbarui
          </button>
        </form>
      </div>
       <div class="card-isi" v-for="(user, index) in peduli" :key="index" @click="peduli(index)">   
        <div class="row">   
          <div class="col">   
              <img class="card-img-top" :src="user.img1">   
              <div class="card-body" style="text-align:center">   
                <p class="card-text" style="font-family:cursive">{{ user.konten }}</p><br>   
                <button @click="edit(user)" id="ed">Perbarui</button>   
                <button @click="del(user)" id="del">Hapus</button>   
            </div>   
          </div>   
        </div>   
      </div> 
    </div>
    <!-- akhir Peduli -->

  </div>
</template>
<script>
/* eslint-disable */
import axios from "axios";
export default {
  name: "Admin",
  data() {
    return {
      form: {
        id: "",
        img: "",
        merk: "",
        rp: "",
        ket: "",
      },
      users: "",
      updateSubmit: false,
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      axios.get("http://localhost:3000/users").then((res) => {
          this.users = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    add() {
      axios.post("http://localhost:3000/users", this.form).then((res) => {
        this.load();
        this.form.id = "";
      });
    },
    edit(user) {
      window.scrollTo(0, 0);
      this.updateSubmit = true;
      this.form.id = user.id;
      this.form.img = user.img;
      this.form.merk = user.merk;
      this.form.rp = user.rp;
      this.form.ket = user.ket;
    },
    update(form) {
      return axios
        .put("http://localhost:3000/users/" + form.id, {
          img: this.form.img,
          merk: this.form.merk,
          rp: this.form.rp,
          ket: this.form.ket,
        })
        .then((res) => {
          this.load();
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    del(user) {
      axios.delete("http://localhost:3000/users/" + user.id).then((res) => {
        this.load();
        let index = this.users.indexOf(form.merk);
        this.users.splice(index, 1);
      });
    },
  },
};
</script>

<style>
    span {
        font-size: 15px;
        color: grey;
    }
    .card {
        margin-bottom: 20px;
    }
    button {
        border: 1px solid rgb(80, 80, 80);
        border-radius: 10px;
        margin-bottom: 5px;
        margin-left: 5px;
        width: 100px;
    }
    #add {
        margin-bottom: 20px;
    }
</style>
