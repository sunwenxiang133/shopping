import request from 'src/request/request';
import { shoppingStore } from 'stores/shopping-store';

const shoppingStore1 = shoppingStore();
//用户管理
//用户注册
export const userRegistration = (name: number, passwd: number) =>
  request.get('/user/register', {
    params: {
      name: name,
      password: passwd,
    },
  });
//用户登陆
//?account=123456789&password=54321
export const userLogin = (account:number,password:number) =>
  request.post('/signin',{
    Body:{
    account:account,
    password:password,
    }
  });

//修改用户信息
export const modifyUserInformation = (name:string,newPwd:string,newBlc:string,newAdrs:string) =>
  request.post('/costumer/updateMsg',{
    Body:{
      name:name,
      newPwd:newPwd,  //密码
      newBlc:newBlc,  //余额
      newAdrs:newAdrs  //地址
    }

  });

//商品列表
export const productList = () => request.post('/costumer/select_all_com',{
  Date:{}
});

/*//加入商品
export const addProduct = (goodsId: string, num: number, price: string) =>
  request.post(
    `/cart/add?userId=${shoppingStore1.userId}&goodsId=${goodsId}&&num=${num}&price=${price}`
  );*/

//购物车列表
export const shoppingCartList = (userId: string) =>
  request.get('/cart/listByUser', {
    params: {
      userId: userId,
    },
  });
//删除商品
export const deleteItem = (cardid: string) =>
  request.delete(
    `/cart/deleteById?userId=${shoppingStore1.userId}&cartId=${cardid}`
  );
//生成订单 （把购物车里的东西加入订单）
export const generateOrders = (co_account:string,sh_account:string,com_ID:number) =>
  request.post(
    '/costumer/addFromShoppingCarToOrders',{
      Body:{
        co_account:co_account,
        sh_account:sh_account,
        com_ID:com_ID,
    }
    }
  );
//更改订单支付状态
export const orderList = (muserId: string) =>
  request.post('/costumer/selectAllOrdersState',{
    Body:{
        co_account:muserId,
      }
  });

//更新订单
export const updateOrder = (co_account:string,comID:string,time:string) =>
  request.post('/costumer/updateOrder',{
    Body:{
      co_account:co_account,  //用户帐号
      com_ID:comID,  //商品ID
      time:time,  //时间
  }})

//删除订单信息
export const deleteOrder = (id:number[]) =>
  request.post('/costumer/deleteOrder',{
    Body:{
      ID:id,
    }})


//更新购物车
export const updateCart = (co_account:string,com_ID:string,amount:number,operate:boolean) =>
  request.post('/costumer/deleteOrder',{
    Body:{
      co_account:co_account,
      com_ID:com_ID,
      amount:amount,
      operate:operate,
  }
})

//查询某客户的购物车
export const queryCart = (co_account:string) =>
  request.post('/costumer/queryShopCar',{
    Body:{
      co_account:co_account,
    }
  })



//co_account:购买物品的客户的帐号
//sh_account:售出商品商家的帐号
//com_ID:int类型  商品ID 主键
//amount：商品数目
//total: 商品总价
