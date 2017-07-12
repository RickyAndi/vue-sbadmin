export default {
  methods: {
    areAnyInputsEmpty() {
      const areAnyInputsEmpty = Object.keys(this.inputs)
        .map((inputName) => {
          return this.inputs[inputName];
        })
        .some((inputValue) => {
          return inputValue === '';
        })
      return areAnyInputsEmpty;
    },
    resetInput(inputName) {
      this.$validator.flag(inputName, {
        dirty: false,
        pristine: true,
        valid: false,
        invalid: false
      });
    },
    setInputState(inputName, fieldStates) {
      this.$validator.flag(inputName, fieldStates);
    },
    setAllInputsStates(inputStates) {
      Object.keys(this.inputs).forEach((inputName) => {
        this.setInputState(inputName, inputStates)
      });
    },
    resetAllInputs() {
      Object.keys(this.inputs).forEach((inputName) => {
        this.resetInput(inputName);
      });
    },
    showError(inputName) {
      return this.errors.has(inputName) && this.fields[inputName].dirty;
    },
    emptyAllInputs() {
      Object.keys(this.inputs).forEach((inputName) => {
        this.inputs[inputName] = '';
      });
    },
  },
  computed: {
    areAllInputsDirty() {
      return Object.keys(this.fields).every(inputName => this.fields[inputName].dirty);
    },
    showSubmitButton() {
      return this.areAllInputsDirty && !this.errors.any();
    }
  }
}
