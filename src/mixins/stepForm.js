import session from '../services/session';
const config = require('../config.json');

export default {
  methods: {
    saveDataToSession(dataPath) {
      const stepFormDataFromSession = JSON.parse(session.get(config['session_key']['step_form_data']));
      const stepFormDataToSave = Object.assign(stepFormDataFromSession, { [this.dataPathName]: this.inputs});
      session.set(config['session_key']['step_form_data'], JSON.stringify(stepFormDataToSave));
    },
    goToNextStep() {
      this.saveDataToSession();
      this.$router.push({ name: this.nextStepName });
    },
    getDataFromSession() {
      const dataFromSession = JSON.parse(session.get(config['session_key']['step_form_data']));
      Object.keys(this.inputs).forEach((inputName) => {
        this.inputs[inputName] = dataFromSession[this.dataPathName][inputName];
      });
    }
  }
}