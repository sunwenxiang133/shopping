import { defineStore } from 'pinia';


/*amount: 534
id: 34
name: "34erg"
owerAccount: null
price: "erg"
url: "reg"*/


type Item = {
  amount: number;
  id: number;
  name: string;
  owerAccount: any;
  price: string;
  url: string;
  love:boolean;
};

export const shoppingStore = defineStore('shoppingStore', {
  state: () => ({
    mItems: [] as Item[],
    userId: String,
    mOrders: [],
    logined: false,
    alert: false,
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    /*change(name: string, things: string, aim: any) {
      this.mItems.forEach((e) => {
        if (e.name === name) {
          if (things === 'num') {
            if (aim > 0) {
              e.num++;
            } else {
              e.num--;
              if (e.num < 0) e.num = 0;
            }
          } else if (things === 'love') {
            e.love = !e.love;
          }
        }
      });
    },*/
  },
});
