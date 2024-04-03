import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    // начальное состояние
    state: {
        paymentList: [],
    },
    // методы для изменения состояния 
    mutations: {
        // мутация для установления значения для состояния
        SET_PAYMENT(state, payments) {
            state.paymentList = payments;
        },
        // мутация для добавления значения в состояние
        ADD_PAYMENT(state, pay) {
            state.paymentList.push(pay);
        }
    },
    // методы для асинхронных операций
    actions: {
        // асинхронная операция для добавления значения в состояние
        fetchData({ commit }) {
            setTimeout(() => {
                const paymentList = [
                    {
                        date: '28.03.2023',
                        category: 'Food',
                        value: 169,
                    },
                    {
                        date: '24.03.2023',
                        category: 'Transport',
                        value: 360,
                    },
                    {
                        date: '24.03.2023',
                        category: 'Food',
                        value: 532,
                    }
                ]
                commit('SET_PAYMENT', paymentList)
            }, 5000);
        }
    },
    // методы для чтения состояния 
    getters: {
        // геттер для чтения состояния
        getPayment: (state) => state.paymentList,
        // геттер для чтения суммы всех операций
        getFullPayment: (state) => {
            return state.paymentList
                .reduce((a, b) => a + b.value, 0)
        }
    },
    modules: {
        // модули Vuex для разделения хранилища на под-хранилища
    }
});