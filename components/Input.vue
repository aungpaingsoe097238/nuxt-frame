<template>
  <div class="mb-2">
    <label :for="name" class="form-label">{{ label }}</label>
    <input
      :type="type"
      class="form-control"
      :class="{ 'is-invalid' : errors[name] }"
      :value="value"
      :name="name"
      :placeholder="placeholder"
      :id="name"
    />
    <span
    class="invalid-feedback"
    v-if="errors[name]"
    >
    {{ errors[name][0] }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'inputname',
    },
    type: {
      type: String,
      default: 'text',
    },
    label: {
      type: String,
      default: 'Input Label',
    },
    placeholder: {
      type: String,
      default: '',
    },
    errors : {
      type: Object,
    },
    value: {
      default: null
    }
  },
}
</script>

<style lang="scss" scoped></style>
