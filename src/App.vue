<template>
  <div id="app">
    <PaymentsDisplay :items="paymentList" />
    <AddList @addNewPay="addNewPay" />
  </div>
</template>

<script>
// сообщил App что есть состояние и мутация
import { mapMutations, mapState, mapGetters, mapActions } from 'vuex';
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddList from './components/AddList.vue'

export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddList,
  },
  methods: {
    // Метод который будет непосредственно добавлять data из AddList в paymentList
    addNewPay(data) {
      this.ADD_PAYMENT(data);
    },
    // зарегистрировал в App что есть мутация
    ...mapMutations(['SET_PAYMENT', 'ADD_PAYMENT'])
  },
  computed: {
    // регистрация App что есть состояние
    ...mapState(['paymentList']),
    // регистрация App что есть геттеры
    ...mapGetters('getPayment', 'getFullPayment'),
    // регистрация App что есть методы для асинхронных операций
    ...mapActions(['fetchData']),
  },
  // добавление данных из бекэнда в инициализационный массив
  created() {
    // Добавление в Store в state в paymentList массив объектов из fetchData() через мутацию SET_PAYMENT 
    this.SET_PAYMENT(this.fetchData());
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
