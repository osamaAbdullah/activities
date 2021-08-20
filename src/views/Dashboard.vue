<template>
  <div class="flex justify-center w-2/6 mx-auto shadow overflow-hidden border-b border-gray-200 sm:rounded-lg my-6">
    <div class="text-2xl px-10 py-10">Admin Panel</div>
  </div>

  <div class="flex flex-col container mx-auto">
    <div class="inline-block shadow-xl w-full">
              <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div>
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <div class="flex justify-between">
                      <h3 class="text-lg leading-6 font-medium text-gray-900">
                        Systems's Transactions
                      </h3>
                      <h3 class="text-lg leading-6 font-medium text-gray-900">
                        {{ budget.toLocaleString('en-US', { minimumFractionDigits: 0 }) }}
                      </h3>
                      <button @click="resetForm"
                              class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        New Transaction
                      </button>
                    </div>

                    <div class="mt-2">
                      <div class="flex flex-col w-full h-full">
                        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                              <table class="min-w-full divide-y divide-gray-200">
                                <thead class="bg-gray-50">
                                <tr>
                                  <th scope="col"
                                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Amount
                                  </th>
                                  <th scope="col"
                                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Type
                                  </th>
                                  <th scope="col"
                                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Created At
                                  </th>
                                  <th scope="col"
                                      class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Updated At
                                  </th>
                                  <th scope="col" class="relative px-6 py-3">
                                    <span class="sr-only">Edit</span>
                                  </th>
                                  <th scope="col" class="relative px-6 py-3">
                                    <span class="sr-only">Delete</span>
                                  </th>
                                </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                <tr v-for="(transaction, index) in transactions" :key="transaction.id">
                                  <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900">{{ transaction.amount }}</div>
                                  </td>
                                  <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900">{{ transaction.type }}</div>
                                  </td>
                                  <td class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900">{{ formatDateTime(transaction.createdAt) }}</div>
                                    <div class="text-sm text-gray-500">{{ fromNow(transaction.createdAt) }}</div>
                                  </td>
                                  <td v-if="transaction.updatedAt" class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900">{{ formatDateTime(transaction.updatedAt) }}</div>
                                    <div class="text-sm text-gray-500">{{ fromNow(transaction.updatedAt) }}</div>
                                  </td>
                                  <td v-else class="px-6 py-4 whitespace-nowrap">
                                    <div class="text-sm text-gray-900">______</div>
                                    <div class="text-sm text-gray-500">______</div>
                                  </td>
                                  <td class="px-6 font-medium">
                                    <button @click="editTransaction(transaction.id, index)"
                                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                      Edit
                                    </button>
                                  </td>
                                  <td class="px-6 font-medium">
                                    <button @click="deleteTransaction(transaction.id, index)"
                                            class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                                      Delete
                                    </button>
                                  </td>
                                </tr>
                                <!-- More people... -->
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  </div>

  <div v-if="form.visibility" class="fixed z-20 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog"
       aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div @click="form.visibility = false" class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
           aria-hidden="true"></div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <div
          class="inline-block align-bottom bg-white rounded-lg text-left bg-green-500 shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="justify-center">
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                {{ form.title }}
              </h3>
              <div class="mt-2">


                <div class="mt-10 sm:mt-0">
                  <div>
                    <div class="mt-5 md:mt-0 md:col-span-2">
                      <form
                          @submit.prevent="form.mode === 'create' ? createTransactions() : updateTransaction()">
                        <div class="shadow overflow-hidden sm:rounded-md">
                          <div class="px-4 py-5 bg-white sm:p-6">
                            <div class="grid grid-cols-6 gap-6">
                              <div class="col-span-6 sm:col-span-3">
                                <label for="amount" class="block text-sm font-medium text-gray-700">Amount</label>
                                <input v-model="form.fields.amount" type="number" id="amount" required
                                       autocomplete="given-name"
                                       class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                              </div>

                              <div class="col-span-6 sm:col-span-3">
                                <label for="type" class="block text-sm font-medium text-gray-700">Type</label>
                                <select id="type" v-model="form.fields.type" required autocomplete="country"
                                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                  <option value="cashIn">Cash In</option>
                                  <option value="cashOut">Cash Out</option>
                                </select>
                              </div>

                            </div>
                          </div>
                          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button type="submit"
                                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                              Save
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {db} from '../firebase'
import moment from "moment";

export default {
  name: 'Dashboard',
  data: () => ({
    transactions: [],
    form: {},
    budget: 0,
    baseBudget: 0,
    transaction: {},
  }),
  methods: {
    createTransactions() {
      db.collection('system_transactions').add({
        ...this.form.fields,
        createdAt: new Date(),
      })
      this.form.visibility = false
    },
    editTransaction(transactionId, index) {
      this.transaction.id = transactionId;
      this.resetForm()
      this.form.title = 'Update Transaction';
      this.form.mode = 'update';
      this.form.fields.amount = this.transactions[index].amount;
      this.form.fields.type = this.transactions[index].type;
    },
    updateTransaction() {
      db.collection('system_transactions').doc(this.transaction.id).update({
        ...this.form.fields,
        updatedAt: new Date(),
      }).then(() => this.form.visibility = false)
          .catch(error => console.error("Error removing document: ", error))
    },
    deleteTransaction(transactionId, index) {
      if (confirm('Are you sure you want to permanently delete this transaction')) {
        db.collection('system_transactions').doc(transactionId).delete().then().catch()
        this.transactions.slice(index, 1)
      }
    },
    resetForm() {
      this.form = {
        fields: {
          amount: '',
          type: '',
        },
        visibility: true,
        title: 'New transaction',
        mode: 'create'
      }
    },
  },
  created() {

    db.collection('transactions').where('type', '==', 'cashIn').onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.baseBudget += parseInt(doc.data().amount)
      });
    });

    db.collection('system_transactions').onSnapshot((querySnapshot) => {
      this.transactions = [];
      this.budget = this.baseBudget;
      querySnapshot.forEach((doc) => {
        this.transactions.unshift({id: doc.id, ...doc.data()});
        if (doc.data().type === 'cashOut') {
          this.budget -= parseInt(doc.data().amount);
        }
        else if (doc.data().type === 'cashIn') {
          this.budget += parseInt(doc.data().amount);
        }
      });
    });
  },
}
</script>
