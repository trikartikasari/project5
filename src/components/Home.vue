<template>
  <div>
    <!-- Awal Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#"
          ><img
            src="https://i.pinimg.com/736x/56/f4/62/56f462a3cec0741f516ded491771bdc4.jpg"
            alt="Logo"
            style="width: 2cm; border-radius: 50%"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="#home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#info">Info Motor</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#beli">Pembelian</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#peduli">Peduli</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#kontak">Kontak</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login" target="_blank">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Akhir Navbar -->

    <!-- Awal Go To Top -->
    <a href="#home">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        fill="currentColor"
        class="bi bi-arrow-up fixed-bottom"
        style="margin: 1cm"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
        /></svg
    ></a>
    <!-- Akhir Go To Top -->

    <!-- Awal Home -->
    <section class="jumbotron text-center" id="home" style="padding-top: 8rem">
      <marquee width="60%" direction="left" height="100px">
        <h1 class="display-5">Selamat Datang di Website YAMAAP</h1>
      </marquee>
      <p class="lead">
        <img
          class="img-thumbnail"
          src="https://gamedaim.com/wp-content/uploads/2021/06/Edwin-Starlest-Chia.jpg"
          width="200cm"
          style="border-radius: 50%"
        />
        <br />
        <b>Sambutan Ceo:</b> <br />
        "Kami ingin bersama-sama merasakan kebahagiaan serta membagi perasaan
        cinta dalam suasana istimewa ini kepada pelanggan dan komunitas Yamaap,
        dealer Yamaap, seluruh karyawan Yamaap dan tentunya untuk generasi masa
        depan Indonesia, Kami ingin membangun ikatan kuat dengan Yamaap Family
        melalui aktivitas menarik dan produk yang dihasilkan. Selain itu juga
        selalu berusaha menciptakan kebahagiaan pelanggan dengan menyentuh
        perasaan mereka yang menjadi inspirasi kualitas produk-produk kami"<br />
        <b>~Edwin Chia, Ceo~</b>
      </p>
      <div class="container" style="background-color: #f85059">
        <div class="row">
          <div class="col-md-6">
            <b>Visi:</b> <br />
            "Unggul dalam hal perdagangan, menciptakan produk berkualitas,
            mensejahterakan karyawan dan pembeli"
          </div>
          <div class="col-md-6">
            <b>Misi:</b> <br />
            "Misi utama Yamaap adalah menciptakan Kando, yaitu rasa puas
            konsumen yang mendalam yang melebihi ekspektasinya, sehingga
            memberikan perasaan bahagia yang menyentuh hati. Untuk menyentuh
            hati konsumen dan karyawan."
          </div>
        </div>
      </div>  
    </section>
    <!-- Akhir Home-->

    <!-- Awal Info Motor -->
    <div id="info" style="padding-top: 8rem">
      <div id="app" class="container">
        <br />
        <div class="card-judul">
          <h1 style="text-align: center">Pilih Motor Favorit Anda</h1>
          <br /><br />
        </div>
        <div class="card-isi" >
          <div class="row">
            <div class="col" v-for="(user, index) in users" :key="index" @click="infoMotor(index)">
              <div class="card img-2">
                <img class="card-img-top" :src="user.img" />
                <div class="card-body">
                  <h3 class="card-title">{{ user.merk }}</h3>
                  <h5 class="card-text">
                    <span>Harga Mulai</span><br /><b>{{ user.rp }}</b>
                  </h5>
                  <p class="card-text">{{ user.ket }}</p>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>  
    <!-- Akhir Info Motor -->

    <!-- Awal Beli -->
    <div
      id="beli"
      style="background-color: #f85059; padding-top: 8rem; padding-bottom: 1rem"
    >
      <br /><br />
      <div class="container">
        <!-- Row1 -->
        <div class="row" >
          
          <div class="col-4 img-2" v-for="(user, index) in users" :key="index" >
            <input
            id="pilih"
            type="radio"
            />&nbsp;&nbsp;&nbsp;&nbsp;
            <label for="pilih"
              ><img class="img-2" :src="user.img"
              />
              <br />
              <h4>{{ user.merk }}</h4>
              <br />
              Harga: <br />
              {{ user.rp }}<br />
              <br />
              {{ user.ket }}
            </label>
          </div>
        </div>
        <!-- Akhir Row1 -->
      </div>
      <center>
        <div class="border-hasil">
          <h3>Harga:</h3>
          <span>{{ "Rp." + user.rp }}</span>
          <br />
          <div id="overlay" onclick="off()">
            <div id="text">
             {{ user.text }}  {{ "Rp." + user.rp }}
            </div>
          </div>
          <h3>Cash:</h3>
          <span>{{ "Rp." + user.rp }}</span
          ><br />
          <button onclick="on()" class="btn btn-light">Beli Cash</button> <br />
          <br />
          <input type="radio" id="kredit" value="30%" v-model="hargaB" />
          <label style="font-size: larger" for="kredit"
            ><b>Kredit:</b>{{ hargaB + "*" + user.rp }}:
            {{ hargaB * user.rp + " DP Awal" }}</label
          >
        </div>
      </center>
    </div>
    <!-- Akhir Beli -->

    <!-- Awal Proses Pengajuan -->
    <div id="proses" style="padding-top: 8rem">
      <h2 style="text-align: center">Proses Pengajuan</h2>
      <div class="container">
        <div class="row">
          <div class="col">
            <img
              src="https://www.baf.id/static/images/image/section/product/pp-1.png"
              alt=""
            />
          </div>
          <div class="col">
            <img
              src="https://www.baf.id/static/images/image/section/product/pp-2.png"
              alt=""
            />
            
          </div>
          <div class="col">
            <img
              src="https://www.baf.id/static/images/image/section/product/motor-proses-kredit.png"
              alt=""
            />
            
          </div>
          <div class="col">
            <img
              src="https://www.baf.id/static/images/image/section/product/pp-4.png"
              alt=""
            />
            
          </div>
          <div class="col">
            <img
              src="https://www.baf.id/static/images/image/section/product/pp-5.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    
    <!-- Akhir Proses Pengajuan -->

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
       <div class="card-isi" v-for="user in users" :key="user">   
        <div class="row">   
          <div class="col">   
              <img class="card-img-top" :src="user.img1">   
              <div class="card-body" style="text-align:center">   
                <p class="card-text" style="font-family:cursive">{{ user.konten }}</p><br>   
            </div>   
          </div>   
        </div>   
      </div> 
    </div>
    <!-- akhir Peduli -->

    <!-- Awal Kontak -->
    <div
      id="kontak"
      style="padding-top: 8rem; margin-top: 7cm; background-color: #fff"
    >
      <div id="row">
        <div class="a">
          <h2>Corporate Communication</h2>
          <p>
            PT YAMAAP<br />
            Corporate Communications<br />
            PT YAMAAP<br />
            Plaza 89, Lt. 5<br />
            Jl. HR. Rasuna Said Kav. X-7 No. 6<br />
            Jakarta 12940 Indonesia<br />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-instagram"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
              />
            </svg>
            &nbsp;
            <span
              >instagram:
              <a
                href="https://www.instagram.com/yamahaindonesia/"
                target="_blank"
                >@Yamaha</a
              ></span
            ><br />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-facebook"
              viewBox="0 0 16 16"
            >
              <path
                d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
              />
            </svg>
            &nbsp;
            <span
              >Facebook:
              <a href="https://www.facebook.com/yamaholigan/" target="_blank"
                >@Yamaha Motor Indonesia</a
              ></span
            >
            <br />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-twitter"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
              />
            </svg>
            &nbsp;
            <span
              >Twitter:
              <a href="https://twitter.com/yamahaindonesia" target="_blank"
                >@ Yamaha Indonesia</a
              ></span
            ><br />
            Email: ptyh_ptyamaafmotorsmobile@fmi.com
          </p>
        </div>
        <div class="a">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31682.33170669201!2d110.38272793955078!3d-6.974898299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70f51edd03eb8b%3A0x983bcb873e18464e!2sPt.%20Kreativitas%20baru%20indonesia!5e0!3m2!1sid!2sid!4v1636342086664!5m2!1sid!2sid"
            width="600"
            height="230"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <hr />
        <div class="b" style="background-color: #fff">
          <p style="font-size: 15px; opacity: 50%">
            PT YAMAAP complies with the International Council on Mining and
            Metals (ICMM) Sustainable Development Framework and Global Reporting
            Initiative (GRI) Sustainability Reporting Guidelines.
          </p>
          <h3 style="opacity: 50%">Copyrights © 2021, PT YAMAAP</h3>
        </div>
        <div class="b" style="background-color: #fff">
          <img
            class="img"
            src="https://i.pinimg.com/736x/56/f4/62/56f462a3cec0741f516ded491771bdc4.jpg"
            alt="Gambar logo PT YAMAAF"
            width="150px"
          />
        </div>
      </div>
    </div>
    <!-- Akhir Kontak -->

    <!-- Awal Footer -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="pink"
        fill-opacity="1"
        d="M0,224L34.3,197.3C68.6,171,137,117,206,128C274.3,139,343,213,411,224C480,235,549,181,617,181.3C685.7,181,754,235,823,256C891.4,277,960,267,1029,240C1097.1,213,1166,171,1234,165.3C1302.9,160,1371,192,1406,208L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
      ></path>
    </svg>
    <div class="akhir" style="font-family: Andika">
      Project by:
      <a
        style="color: black"
        href="https://github.com/trikartikasari"
        target="_blank"
        >Kartika</a
      >,
      <a
        style="color: black"
        href="https://github.com/lela-syarifah"
        target="_blank"
        >Layla</a
      >,
      <a style="color: black" href="https://github.com/Secondta" target="_blank"
        >Secondta</a
      >
    </div>
    <!-- Akhir Footer -->

    <!-- Awal Callout -->
    <div class="callout">
      <div class="callout-header">Follow My IG</div>
      <span class="closebtn" onclick="this.parentElement.style.display='none';"
        >×</span
      >
      <div class="callout-container">
        <p>
          Kartika:
          <a href="https://www.instagram.com/anaartikasr22/" target="_blank"
            >@anaartikasr22</a
          ><br />
          Layla:
          <a href="https://www.instagram.com/lyl.syarifah/" target="_blank"
            >@lyl.syarifah</a
          ><br />
          Secondta:
          <a href="https://www.instagram.com/vxrll__/" target="_blank"
            >@vxrll__</a
          >
        </p>
      </div>
    </div>
    <!-- Akhir Callout -->
  </div>
</template>
  <script>
/* eslint-disable */
import axios from "axios";
export default {
    name: "Home",
  data() {
    return {
      img1: "",
      konten: "",
      form: {
        id: "",
        img: "",
        merk: "",
        rp: "",
        ket: "",
      },
      user: "",
      hargaB: "",
      users: "",
      updateSubmit: false,
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    infoMotor(id) {
      console.log(index);
    },
    beliMotor(id) {
      console.log(index);
    },
    peduli(id) {
      console.log(index);
    },
    load() {
      axios.get("http://localhost:3000/users").then((res) => {
          this.users = res.data;
        }).catch((err) => {
          console.log(err);
        });
    },
    add() {
      axios.post("http://localhost:3000/users", this.form).then((res) => {
        this.load();
        this.form.id = "";
        this.form.img = "";
        this.form.merk = "";
        this.form.rp = "";
        this.form.ket = "";
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
      return axios.put("http://localhost:3000/users/" + form.id, {
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