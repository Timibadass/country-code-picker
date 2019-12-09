<template>
  <div class="phone__container">
    <div class="tel__input_container">
      <vue-tel-input @country-changed="getDialCode" ref="telInput" :validCharactersOnly="true"></vue-tel-input>
    </div>
    <input
      class="country__code_field"
      type="tel"
      name="dialCode"
      :value="dialCode"
      disabled
      id="dialCode"
    />
    <input
      type="number"
      placeholder="9079876543"
      class="phone_field"
      name="phone"
      :value="phone"
      @input="$emit('input', $event.target.value)"
      id="phone"
    />
  </div>
</template>

<script>
export default {
  name: "phone-input",
  data() {
    return {
      phone: "",
      dialCode: ""
    };
  },
  props: ["value"],
  methods: {
    getDialCode() {
      let telInput = this.$refs.telInput;
      this.dialCode = telInput.phoneObject.country.dialCode;
      this.$emit("country-changed", this.dialCode);
    }
  }
};
</script>

<style>
/* start of tel-input */

.phone__container {
  display: flex;
  flex-direction: row;
  padding-left: 0;
  width: 100%;
  border: 1px solid #bbb;
  border-radius: 4px;
  height: 40px;
}

.tel__input_container {
  width: 45px;
  border-right: 0;
}

.vue-tel-input {
  border: 0 !important;
  border-bottom-right-radius: 0 !important;
  border-top-right-radius: 0 !important;
}

.vue-tel-input .dropdown {
  padding-left: 7px !important;
}

.country__code_field {
  width: 45px;
  border: 0;
  margin: 0 !important;
  height: 38px !important;
  background-color: #fff !important;
  border-left: 0;
  border-right: 0;
  text-align: center;
}

.vti__dropdown {
  padding-left: 0;
}

.vti__input {
  display: none !important;
}

.phone_field {
  border: 0;
  border-left: 1px solid #bbb;
  padding-left: 10px;
  border-bottom-right-radius: 4px;
  width: 80%;
  margin: 0 !important;
  height: 38px !important;
  border-top-right-radius: 4px;
}

.phone_field:focus {
  outline: 0;
  background-color: #fff;
}

.phone_field::-webkit-outer-spin-button,
.phone_field::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.phone_field[type="number"] {
  -moz-appearance: textfield; /* Firefox */
}

.country-selector.has-value .field-input {
  display: block;
  margin: auto;
  height: 30px !important;
  padding-top: 0 !important;
}

.country-selector .flag-container.field-country-flag {
  top: 13px !important;
}

.vue-tel-input {
  outline: none;
  height: 40px;
}

.vue-tel-input:focus {
  background-color: #fff;
  outline: none;
}
/* end of tel-input */
</style>