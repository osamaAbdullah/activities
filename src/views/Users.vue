<template>
  <div class="about">
    <h1>This is an Users page hhhh</h1>
  </div>
  <table>
    <thead>
      <tr>
        <th>name</th>
        <th>email</th>
        <th>role</th>
        <th>actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(user, index) in users" :key="user.id">
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>
          <select v-model="users[index].role" @change="changeRole(users[index].role, index)">
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </td>
        <td><button @click="seeTransactions(user.id, index)">see transactions</button></td>
      </tr>
    </tbody>
  </table>

  <div v-if="transaction.visibility">
    <table>
      <thead>
      <tr>
        <th>User</th>
        <th>Amount</th>
        <th>Type</th>
        <th>Created At</th>
        <th>Updated At</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(transaction, index) in transactions" :key="transaction.id">
        <th :title="transaction.user.email">{{ transaction.user.name }}</th>
        <th>{{ transaction.amount }}</th>
        <th>{{ transaction.type }}</th>
        <th>{{ formatDateTime(transaction.createdAt) }}</th>
        <th v-if="transaction.updatedAt">{{ formatDateTime(transaction.updatedAt) }}</th>
        <td><button @click="editTransaction(transaction.id, index)">edit</button></td>
        <td><button @click="deleteTransaction(transaction.id, index)">delete</button></td>
      </tr>
      </tbody>
    </table>
    <h1 v-text="form.title"></h1>
    <form @submit.prevent="form.mode === 'create' ? createTransactions(transaction.userId) : updateTransaction()">
      <div>
        <label>amount</label>
        <input type="number" v-model="form.fields.amount">
      </div>
      <div>
        <label>type</label>
        <select v-model="form.fields.type">
          <option value="cashIn">Cash In</option>
          <option value="cashOut">Cash Out</option>
        </select>
      </div>
      <div>
        <input type="submit" value="Save">
      </div>
    </form>
  </div>

</template>

<script>
import {db} from '../firebase'
import moment from "moment";

export default {
  name: 'Users',
  data: () => ({
    users: [],
    transaction: {
      visibility: false,
      userId: null,
      id: null,
    },
    transactions: [],
    form: {},
  }),
  methods: {
    changeRole(role, index) {
      db.collection('users').doc(this.users[index].id).update({ role }).then().catch()
    },
    seeTransactions(userId, index) {
      this.transaction = {visibility: true, userId}
      this.resetForm()
      db.collection('transactions').where('userId', '==', userId).onSnapshot((querySnapshot) => {
        this.transactions = [];
        querySnapshot.forEach((doc) => {
          this.transactions.unshift({ id: doc.id, ...doc.data(), user: this.users[index]});
        });
      });
    },
    createTransactions(userId) {
      db.collection('transactions').add({
        ...this.form.fields,
        userId,
        createdAt: new Date(),
      })
      this.resetForm()
    },
    editTransaction(transactionId, index) {
      this.transaction.id = transactionId;
      this.resetForm()
      this.form.title = 'Update Transaction';
      this.form.mode = 'update';
      this.form.fields.amount = this.transactions[index].amount;
      this.form.fields.type = this.transactions[index].type;
    },
    updateTransaction(index) {
      db.collection('transactions').doc(this.transaction.id).update({
        ...this.form.fields,
        updatedAt: new Date(),
      }).then(() => this.resetForm())
          .catch(error => console.error("Error removing document: ", error))
    },
    deleteTransaction(transactionId, index) {
      db.collection('transactions').doc(transactionId).delete().then().catch()
      this.transactions.slice(index, 1)
    },
    resetForm() {
      this.form = {
        fields: {
          amount: '',
          type: '',
        },
        title: 'New transaction',
        mode: 'create'
      }
    },
    formatDateTime(timestamp) {
      return moment(timestamp.toDate()).format('YYYY-MM-DD')
    },
  },
  created() {
    db.collection('users').onSnapshot((querySnapshot) => {
      this.users = [];
      querySnapshot.forEach((doc) => {
        this.users.unshift({ id: doc.id, ...doc.data()});
      });
    });
  },
}
</script>
