<template>
  <div class="adopter-wrapper">
    <h4 class="title d-flex-center">＜ 領養人資訊 ＞</h4>

    <form class="a-form d-flex-center">
      <div class="form-content d-flex-evenly-column-normal">
        <div class="form-row name">
          <label for="">姓名</label
          ><input
            v-model="adopter.name"
            id="name"
            class="width-end"
            type="text"
            placeholder="請輸入姓名"
            required
          />
        </div>

        <div class="form-row gender">
          <div class="gender-title">性別</div>

          <div class="gender-container d-flex">
            <div class="gender mr-1">
              <!-- 男 -->
              <label class="d-flex cursor" for="male" data-id="1">
                <input
                  v-model="adopter.gender"
                  value="male"
                  type="radio"
                  name="ta-gender"
                  id="male"
                />
                <p>男</p>
              </label>
            </div>

            <div class="gender mr-1">
              <!-- 女 -->
              <label class="d-flex cursor" for="female" data-id="2">
                <input
                  v-model="adopter.gender"
                  value="female"
                  type="radio"
                  name="ta-gender"
                  id="female"
                />
                <p>女</p>
              </label>
            </div>
          </div>
        </div>

        <div class="form-row phone">
          <label for="">電話號碼</label
          ><input
            v-model="adopter.phone"
            id="phone"
            type="text"
            placeholder="請輸入電話號碼"
            class="width-end"
            required
          />
        </div>

        <div class="form-row email">
          <label for="">E-mail</label
          ><input
            v-model="adopter.email"
            id="email"
            type="email"
            placeholder="請輸入email"
            class="width-end"
            required
          />
        </div>

        <div class="form-row address">
          <label for="">地址</label>
          <div class="select-wrapper">
            <select
              v-model="adopter.addressCity"
              name="a-type"
              id="a-location"
              class="width-end cursor"
              required
            >
              <option value="" disabled selected>縣市</option>
              <option value="臺北市">臺北市</option>
              <option value="新北市">新北市</option>
              <option value="桃園市">桃園市</option>
              <option value="臺中市">臺中市</option>
              <option value="高雄市">高雄市</option>
              <option value="宜蘭縣">宜蘭縣</option>
              <option value="新竹縣">新竹縣</option>
              <option value="苗栗縣">苗栗縣</option>
              <option value="彰化縣">彰化縣</option>
              <option value="南投縣">南投縣</option>
              <option value="雲林縣">雲林縣</option>
              <option value="嘉義縣">嘉義縣</option>
              <option value="屏東縣">屏東縣</option>
              <option value="花蓮縣">花蓮縣</option>
              <option value="臺東縣">臺東縣</option>
              <option value="澎湖縣">澎湖縣</option>
              <option value="基隆市">基隆市</option>
              <option value="新竹市">新竹市</option>
              <option value="嘉義市">嘉義市</option>
            </select>
            <input
              v-model="adopter.addressDetail"
              id="address"
              type="text"
              placeholder="請輸入詳細地址"
              class="width-end"
              required
            />
          </div>
        </div>

        <div class="buttom-container d-flex-center">
          <button
            type="button"
            class="btn btn-confirm"
            @click.stop.prevent="formConfirm()"
          >
            確認送出
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      adopter: {
        name: "",
        gender: "",
        phone: "",
        email: "",
        addressCity: "",
        addressDetail: "",
      },
    };
  },
  methods: {
    formConfirm() {
      if (
        !this.adopter.name ||
        !this.adopter.gender ||
        !this.adopter.phone ||
        !this.adopter.email ||
        !this.adopter.addressCity ||
        !this.adopter.addressDetail
      ) {
        return alert("尚有資料未填寫!");
      }

      this.$router.push("/confirm");
    },
  },
};
</script>

<style lang="scss" scoped>
.adopter-wrapper {
  display: grid;
  grid-auto-rows: 60px auto;
  color: var(--brand-color);
}

.form-content {
  height: 100%;
  width: 80%;
}

.gender-radio {
  margin-right: 15px;
}

.gender-title {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
}
</style>