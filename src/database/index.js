import firebase from 'firebase';

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.firebaseConfig = {
      apiKey: 'AIzaSyAK29MJmxhC1_wOyyyILCkCEDQnY47M6mA',
      authDomain: 'winkforyou-91363.firebaseapp.com',
      databaseURL: 'https://winkforyou-91363.firebaseio.com',
      projectId: 'winkforyou-91363',
      storageBucket: '',
      messagingSenderId: '859609224753',
      appId: '1:859609224753:web:ec680e9adb5fc868',
    };

    firebase.initializeApp(this.firebaseConfig);
  }
}

export default new Database();
