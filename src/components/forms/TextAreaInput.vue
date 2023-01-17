<script setup>
import { toRef } from 'vue';
import { useField } from 'vee-validate';

const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  value: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  successMessage: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
});

// use `toRef` to create reactive references to `name` prop which is passed to `useField`
// this is important because vee-validte needs to know if the field name changes
// https://vee-validate.logaretm.com/v4/guide/composition-api/caveats
const name = toRef(props, 'name');

// we don't provide any rules here because we are using form-level validation
// https://vee-validate.logaretm.com/v4/guide/validation#form-level-validation
const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(name, undefined, {
  initialValue: props.value,
});
</script>

<template>
  <div
    class="TextAreaInput"
    :class="{ 'has-error': !!errorMessage, success: meta.valid }"
  >
    <label :for="name">{{ label }}</label>
    <textarea 
      :name="name" 
      :id="name"
      :value="inputValue"
      rows="4"
      maxlength="100"
      :placeholder="placeholder"
      @input="handleChange"
      @blur="handleBlur"
    />
    
    <p class="help-message" v-show="errorMessage || meta.valid">
      {{ errorMessage || successMessage }}
    </p>
  </div>
</template>

<style scoped>
.TextAreaInput {
  position: relative;
  margin-bottom: calc(1em * 1.5);
  width: 100%;
}

label {
  display: block;
  margin-bottom: 4px;
  width: 100%;
}

textarea {
  display: block;
  padding: 2.5; 
  width: 100%;
  font-size: small;
  color: rgb(17 24 39);
  background-color: rgb(249 250 251);
  border: solid;
  border-radius: 0.5rem;
  border-color: rgb(209 213 219); 
  position: relative;
  margin-bottom: calc(1em * 1.5);
  width: 100%;
  transition: border-color 0.3s ease-in-out, color 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
}

textarea:focus {
  border-color: var(--primary-color);
}

.help-message {
  position: absolute;
  bottom: calc(-1.5 * 1em);
  left: 0;
  margin: 0;
  font-size: 14px;
}

.TextAreaInput.has-error input {
  background-color: var(--error-bg-color);
  color: var(--error-color);
}

.TextAreaInput.has-error input:focus {
  border-color: var(--error-color);
}

.TextAreaInput.has-error .help-message {
  color: var(--error-color);
}

.TextAreaInput.success input {
  background-color: var(--success-bg-color);
  color: var(--success-color);
}

.TextAreaInput.success input:focus {
  border-color: var(--success-color);
}

.TextAreaInput.success .help-message {
  color: var(--success-color);
}

.TextAreaInput.dark{
  background-color: rgb(55 65 81);
  border-color: rgb(75 85 99);
  color: white;
}
.TextAreaInput.dark input:focus{
  --tw-ring-color: rgb(59 130 246);
  border-color: rgb(59 130 246);
}

</style>
