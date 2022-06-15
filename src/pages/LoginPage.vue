<template>
  <q-btn @click="test" label="登陆"></q-btn>
  <q-btn @click="test1" label="商品列表"></q-btn>
  <q-btn @click="test2" label="更改用户信息"></q-btn>
  <q-btn @click="test3" label="生成订单"></q-btn>
  <q-btn @click="test4" label="查询订单"></q-btn>
  <q-btn @click="test5" label="更改订单支付状态"></q-btn>
  <q-btn @click="test6" label="删除订单（可多个）"></q-btn>
  <q-btn @click="test7" label="生成订单"></q-btn>
  <q-btn @click="test8" label="更新购物车"></q-btn>
  <q-btn @click="test9" label="查询某客户的购物车"></q-btn>

  <q-page>
    <div class="q-pa-md" style="max-width: 400px;margin: 26vh auto">

      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
      >
        <q-input
          filled
          v-model="name"
          label="账户名 *"
          hint="请输入您的账户名称"
          lazy-rules
          :rules="[ val => val && val.length > 0 || '账户名称不能为空']"
        />

        <q-input
          filled
          v-model="passwd"
          label="密码 *"
          hint="请输入您的密码"
          lazy-rules
          :rules="[
          val => val !== null && val !== '' || '密码不能为空',
        ]"
        />

        <q-toggle v-model="accept" label="记住用户名和密码"/>

        <div>
          <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm"/>
          <q-btn label="Register" type="submit" @click="Register" color="primary" class="q-ml-sm"/>
          <q-btn label="Submit" type="submit" @click="Submit" color="primary" class="q-ml-sm"/>
        </div>
      </q-form>
    </div>

  </q-page>

</template>

<script>
import {ref} from 'vue'
import {shoppingStore} from '../stores/shopping-store';
import {
  deleteOrder, generateOrders,
  modifyUserInformation,
  orderList,
  productList, queryCart,
  shoppingCartList, updateCart, updateOrder,
  userLogin,
  userRegistration
} from '../request/api';
import {useRoute, useRouter} from 'vue-router'

export default {
  name: 'LoginPage',
  setup() {
    let name = ref(null)
    let passwd = ref(null)
    const accept = ref(false)
    let shoppingStore1 = shoppingStore();
    const router = useRouter();
    function test(){
      userLogin().then((e)=>{
        console.log(e);
      }).catch((e)=>{
        console.log(e);
      })
    }
    function test1(){
      productList().then((e)=>{
        console.log(e);
        // console.log(e.Data[0]);
      }).catch((e)=>{
        console.log(e[0]);
      })
    }

    function test2(){
      modifyUserInformation('123456789','321','54321','guet').then((e)=>{
        console.log(e);
        // console.log(e.Data[0]);
      }).catch((e)=>{
        console.log(e[0]);
      })
    }

    function test3(){
      modifyUserInformation('123456789','321','54321','guet').then((e)=>{
        console.log(e);
        // console.log(e.Data[0]);
      }).catch((e)=>{
        console.log(e[0]);
      })
    }

    function test4(){
      orderList('123456789').then((e)=>{
        console.log(e);
        // console.log(e.Data[0]);
      }).catch((e)=>{
        console.log(e[0]);
      })
    }

    function test5(){
      /*let mDate=new Date();
      let myDate=mDate.toDateString();
      console.log(myDate);*/
      updateOrder('123456789','123','2022-06-09 02:45:56').then((e)=>{
        console.log(e);
        // console.log(e.Data[0]);
      }).catch((e)=>{
        console.log(e[0]);
      })
    }

    function test6(){
      deleteOrder([5,6]).then((e)=>{
        console.log(e);
        // console.log(e.Data[0]);
      }).catch((e)=>{
        console.log(e[0]);
      })
    }

    function test7(){
      generateOrders('123456789','123',123).then((e)=>{
        console.log(e);
        // console.log(e.Data[0]);
      }).catch((e)=>{
        console.log(e[0]);
      })
    }

    function test8(){
      updateCart('123456789','123',10,true).then((e)=>{
        console.log(e);
        // console.log(e.Data[0]);
      }).catch((e)=>{
        console.log(e[0]);
      })
    }

    function test9(){
      queryCart('123456789').then((e)=>{
        console.log(e);
        // console.log(e.Data[0]);
      }).catch((e)=>{
        console.log(e[0]);
      })
    }


    return {
      name,test1,
      passwd,test,test2,test3,test4,test5,test6,test7,test8,test9,
      accept,

      Register() {
        if (!name.value || !passwd.value) {
          return;
        }
        userRegistration(Number(name.value), Number(passwd.value)).then((res) => {
          if (res === 'OK') {
            console.log(res);
            alert('注册成功');
          } else if (res === 'isexist') {
            alert('已经存在');
          } else {
            console.log(res);
          }
        })
      },
      Submit() {
        userLogin(Number(name.value), Number(passwd.value)).then((res) => {
          if (res === 'invalid') {
            alert('尚未注册，登陆失败');
          } else {
            alert('登陆成功');
            console.log(res);
            shoppingStore1.logined = true;
            shoppingStore1.userId = res;
            let temp = shoppingStore1.mItems;
            shoppingCartList(shoppingStore1.userId).then((ress) => {
              console.log(ress);
              ress.forEach((e) => {
                temp.forEach((item) => {
                  if (e.name === item.name) {
                    item.love = true;
                    item.cardid = e.cardid;
                    item.num = e.num;
                    console.log(item);
                    console.log(item.name);
                  }
                })
              })
            })

            orderList(shoppingStore1.userId).then(res => {
              shoppingStore1.mOrders = res;
            })
            router.push('/ShopPage');
          }
        })
      },
      onSubmit() {
        console.log();
      },

      onReset() {
        name.value = null
        passwd.value = null
        accept.value = false
      }
    }
  }
}
</script>


<style scoped>

</style>
