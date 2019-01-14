
import { ApiPromise } from '@polkadot/api';
import { Keyring } from '@polkadot/keyring';
import { stringToU8a, arrayFilter } from '@polkadot/util';
import {
  ALICE, BOB, createElement, createElement2, createWrapper,createWrapper2, createWrappertop, 
} from './commons';
//var session_seq_No = 1;
var date1=new Date();  //开始时间 
// https://polkadot.js.org/api/examples/promise/01_simple_connect/
export const nodeConnect = async (provider) => {
  const wrapper = createWrappertop('node_info');
  // Retrieve the chain & node information information via rpc calls
  const api = await ApiPromise.create(provider);
  const [chain, nodeName, nodeVersion] = await Promise.all([
    api.rpc.system.chain(),
    api.rpc.system.name(),
    api.rpc.system.version()    
    ]);  
  createElement(`Connecting to ${chain} ${nodeName} ${nodeVersion} `, wrapper);
};

// https://polkadot.js.org/api/examples/promise/02_listen_to_blocks/
export const listenToBlocks = async (provider) => {
  const wrapper = createWrapper2('listen-to-blocks');
  const wrapper2 = createWrapper('last_block','last_block','last_block','.summary_box');
  const wrapper7 = createWrapper('count_up','count_up','count_up','.summary_box');
  const wrapper6 = createWrapper('Session','Session','Session','.summary_box');
  const wrapper5 = createWrapper('Session_curr','Session_curr','Session_curr','.Session'); 

  var session_curr = 1;
  var timer=setInterval(function(){clock()},100);
  const api2 = await ApiPromise.create(provider);
  const subscriptionId = await api2.rpc.chain.subscribeNewHead((header) => {
  const wap = createElement2(getNowFormatDate(), wrapper,'BlockInfo');    
    createElement2(` ${header.blockNumber}`, wap,'BlockNo');
    createElement2(` ${header.parentHash}`, wap,'pHash'); 
    createElement2(` ${header.extrinsicsRoot}`, wap,'extrinsicaRoot'); 
    createElement2(` ${header.stateRoot}`, wap,'stateRoot'); 

    createElement(` ${header.blockNumber}`, wrapper2); 
    var temp = header.blockNumber;
    //createElement(` ${header.blockNumber} `  , wrapper);     
    var a=document.getElementById("last_block").innerText;
    if (temp!=a){
      document.getElementById("last_block").innerText=temp;
      session_curr = session_curr + 1;
      document.getElementById("Session_curr").innerText=session_curr+' / ';
      date1=new Date();  //开始时间 
      };     
  });
};

export const listenToStaking = async (provider) => {
  const wrapper = createWrapper('Session_index','Session_index','Session_index','.summary_box');  
  const wrapper4 = createWrapper('Session_len','Session_len','Session_len','.Session'); 
  const api = await ApiPromise.create(provider);
  const session_status = await api.query.session.currentIndex((header) => {
    var temp = header; 
    createElement(` ${header} `  , wrapper);     
    var a=document.getElementById("Session_index").innerText;
    if (temp!=a){
      document.getElementById("Session_index").innerText=temp;    
      document.getElementById("Session_curr").innerText= '1 / ';    
    };
   });

  const session_len = await api.query.session.sessionLength((header) => {
    var temp = header;
    createElement(` ${header} `  , wrapper4);     
    var a=document.getElementById("Session_len").innerText;
    if (temp!=a){
      document.getElementById("Session_len").innerText=temp;
    };     
   });
};

export const readChainState = async (provider) => {
  const wrapper = createWrapper('valicator_list','valicator_list','valicator_list','#content-right');
  // Create our API with a default connection to the local node
  const api = await ApiPromise.create(provider);
  // Make our basic chain state/storage queries, all in one go
  const [accountNonce, blockPeriod, validators] = await Promise.all([
    api.query.system.accountNonce(ALICE),
    api.query.timestamp.now(),
    api.query.session.validators()
  ]);
  //createElement(`accountNonce(${ALICE}) ${accountNonce}`, wrapper);
  //createElement(`blockPeriod ${blockPeriod.toNumber()} seconds`, wrapper);
  // Retrieve the balances for all validators
  const validatorBalances = await Promise.all(
    validators.map(authorityId => api.query.balances.freeBalance(authorityId))
  );
  if (validators.length > 0) {
    const string = validators.map((authorityId, index) => ({
      address: authorityId.toString(),
      balance: validatorBalances[index].toString()
    }));
    //console.log('string', string.address);
    createElement(string, wrapper);
    // createElement('validators', validators.map((authorityId, index) => ({
    //   address: authorityId.toString(),
    //   balance: validatorBalances[index].toString()
    // })), wrapper);
  }

    test5();
};


//获取当前时间，格式YYYY-MM-DD
function getNowFormatDate() {
  var date = new Date();
  var seperator1 = "-";
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var strDate = date.getDate();
  var strHour = date.getHours();
  var strMin = date.getMinutes();
  var strSec = date.getSeconds();
  if (month >= 1 && month <= 9) {
      month = "0" + month;
  }
  if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
  }
  if (strMin >= 0 && strMin <= 9) {
     strMin = "0" + strMin;
  }
  if (strHour >= 0 && strHour <= 9) {
     strHour = "0" + strHour;
  }
  if (strSec >= 0 && strSec <= 9) {
     strSec = "0" + strSec;
  }  
  //var strSec = date.getSeconds();
  var currentdate = year + seperator1 + month + seperator1 + strDate + "  " + strHour+ ":" + strMin+ ":" + strSec;
  return currentdate;
}

function clock()
{
    var date2=new Date();    //结束时间
    var date3=date2.getTime()-date1.getTime()  //时间差的毫秒数
    if (date3>=10000){
      var t=(date3/1000).toFixed(0);
    }
    else{
      var t=(date3/1000).toFixed(1);
    }        
    document.getElementById("count_up").innerText=t + 's';
}


function test5(account_id,size_all){
    var circ = new Array(20);
		//通过createElementNS创建svg元素并设置属性
		var svg=document.createElementNS('http://www.w3.org/2000/svg','svg'); 	
		svg.setAttribute("style","width:100%;height:100%;");
    svg.setAttribute("width",size_all);
    svg.setAttribute("width",size_all);
    svg.setAttribute("id",account_id);

    //创建矩形元素并设置属性
    circ[0] = document.createElementNS('http://www.w3.org/2000/svg','circle'); 
    circ[0].setAttribute("cx",32);	circ[0].setAttribute("cy",32);	circ[0].setAttribute("r","32"); 
    
    for (var i=1;i<=5;i++){
      circ[i] = document.createElementNS('http://www.w3.org/2000/svg','circle'); 
      circ[i].setAttribute("cx",'32');	circ[i].setAttribute("cy",56-(i-1)*12);	circ[i].setAttribute("r","5"); 
      svg.appendChild(circ[i]);
    }
    for (var i=6;i<=9;i++){
      circ[i] = document.createElementNS('http://www.w3.org/2000/svg','circle'); 
      circ[i].setAttribute("cx",'21.607695154586736');	circ[i].setAttribute("cy",50-(i-6)*12);	circ[i].setAttribute("r","5"); 
      svg.appendChild(circ[i]);
    }
    for (var i=10;i<=13;i++){
      circ[i] = document.createElementNS('http://www.w3.org/2000/svg','circle'); 
      circ[i].setAttribute("cx",'42.392304845413264');	circ[i].setAttribute("cy",50-(i-10)*12);	circ[i].setAttribute("r","5"); 
      svg.appendChild(circ[i]);
    } 
    for (var i=14;i<=16;i++){
      circ[i] = document.createElementNS('http://www.w3.org/2000/svg','circle'); 
      circ[i].setAttribute("cx",'11.215390309173472');	circ[i].setAttribute("cy",44-(i-14)*12);	circ[i].setAttribute("r","5"); 
      svg.appendChild(circ[i]);
    } 
    for (var i=17;i<=19;i++){
      circ[i] = document.createElementNS('http://www.w3.org/2000/svg','circle'); 
      circ[i].setAttribute("cx",'52.78460969082653');	circ[i].setAttribute("cy",44-(i-17)*12);	circ[i].setAttribute("r","5"); 
      //将矩形和扇形元素添加到SVG元素内
      svg.appendChild(circ[i]);
    }   
    for (var i=0;i<=19;i++){
      circ[i].setAttribute("fill","red"); 
    }
    //SVG元素添加到页面内显示
    const app = document.querySelector('.content-right');
		app.appendChild(svg);

}

