(this["webpackJsonptic-tac-react"]=this["webpackJsonptic-tac-react"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(2),s=n.n(c),i=n(6),r=n.n(i),o=(n(20),n.p,n(21),n(4)),l=n.n(o),d=n(7),u=n(5),j=n(8),m=n(9),h=n(14),b=n(13),f=(n(23),n(24),function(){return Object(a.jsxs)("div",{className:"footer",children:[Object(a.jsxs)("div",{children:["Check out my ",Object(a.jsx)("a",{href:"https://github.com/aplinstang",children:"Github"})," for more cool projects."]}),Object(a.jsx)("div",{children:Object(a.jsx)("a",{href:"https://www.freepik.com/photos/background",children:"Background photo created by freepik - www.freepik.com"})}),Object(a.jsxs)("div",{children:[Object(a.jsx)("br",{}),Object(a.jsx)("a",{rel:"license",href:"http://creativecommons.org/licenses/by-nc-sa/4.0/",children:Object(a.jsx)("img",{alt:"Creative Commons License",style:{borderWidth:"0"},src:"https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"})})]})]})}),p=n(10),O=(n(27),n(12)),x=n.n(O),y=n.p+"static/media/cat-dance.6102c347.gif",g=n.p+"static/media/x.ffa2ebc5.png",v=n.p+"static/media/o.ff1a2aad.png",k={angle:"120",spread:360,startVelocity:40,elementCount:"87",dragFriction:.12,duration:3e3,stagger:3,width:"18px",height:"13px",perspective:"345px",colors:["#a864fd","#29cdff","#78ff44","#ff718d","#fdff6a"]},w=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).update=function(e){var t;if(a.state.filled.includes(e.target.id))return a.state.count,void a.checkForWinner(a.state.playerOne,a.state.currentPlayer);var n,c=parseInt(e.target.className),s=[],i="";if(a.state.count%2===0){n="playerOne",i="Player Two",(s=a.state.playerOne)[c]=parseInt(e.target.id);var r=document.createElement("img");r.src=v,r.style="width: 70%",e.target.appendChild(r)}else{n="PlayerTwo",i="Player One",(s=a.state.playerTwo)[c]=parseInt(e.target.id);var o=document.createElement("img");o.src=g,e.target.appendChild(o)}(a.setState({filled:e.target.id}),a.state.count>2)&&(a.checkForWinner(s,a.state.currentPlayer)&&a.gameOver(a.state.currentPlayer));a.setState((t={count:a.state.count+1},Object(u.a)(t,n,s),Object(u.a)(t,"currentPlayer",i),t))},a.checkForWinner=function(e,t){return(e[0]+e[1]+e[2]===15||e[3]+e[4]+e[5]===15||e[6]+e[7]+e[8]===15||e[0]+e[3]+e[6]===15||e[1]+e[4]+e[7]===15||e[2]+e[5]+e[8]===15||e[0]+e[4]+e[8]===15||e[6]+e[4]+e[2]===15)&&t},a.gameOver=function(e){a.setState({visible:!0,winner:e})},a.sleep=function(e){return new Promise((function(t){return setTimeout(t,e)}))},a.myRef=s.a.createRef(),a.state={currentPlayer:"Player One",playerOne:[0,0,0,0,0,0,0,0,0],playerTwo:[0,0,0,0,0,0,0,0,0],count:0,visible:!1,winner:"Nobody",filled:[]},a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.animateBoxes()}},{key:"show",value:function(){this.setState({visible:!0})}},{key:"hide",value:function(){return this.setState({visible:!1}),window.location.reload(),!1}},{key:"animateBoxes",value:function(){var e=Object(d.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.getElementsByTagName("td"),document.getElementsByClassName("title")[0].classList.add("animate__animated","animate__fadeInDownBig"),document.getElementsByClassName("subtitle")[0].classList.add("animate__animated","animate__fadeIn","animate__delay-1s"),n=document.getElementsByClassName("footer")[0],e.next=8,this.sleep(75);case 8:n.classList.add("animate__animated","animate__fadeInUpBig"),a=0;case 10:if(!(a<t.length)){e.next=18;break}return t[a].classList.add("animate__animated","animate__zoomIn","fade-in"),t[8-a].classList.add("animate__animated","animate__zoomIn","fade-in"),e.next=15,this.sleep(105);case 15:a++,e.next=10;break;case 18:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.currentPlayer,c=t.count,s=t.playerOne,i=t.playerTwo,r=t.visible,o=t.winner;return console.log("count",c),Object(a.jsxs)("div",{className:"board-container",children:[Object(a.jsxs)("div",{className:"board",children:[Object(a.jsx)("h2",{className:"title",children:"Tic Tac Toe"}),Object(a.jsxs)("h3",{className:"subtitle",children:["It is ",n,"'s turn..."]}),Object(a.jsx)("table",{children:Object(a.jsxs)("tbody",{children:[Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{onClick:function(t){return e.update(t)},id:"2",className:"0",ref:this.myRef}),Object(a.jsx)("td",{onClick:function(t){return e.update(t)},id:"7",className:"1",ref:this.myRef}),Object(a.jsx)("td",{onClick:function(t){return e.update(t)},id:"6",className:"2",ref:this.myRef})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{onClick:function(t){return e.update(t)},id:"9",className:"3"}),Object(a.jsx)("td",{onClick:function(t){return e.update(t)},id:"5",className:"4",children:Object(a.jsx)(x.a,{active:r,config:k})}),Object(a.jsx)("td",{onClick:function(t){return e.update(t)},id:"1",className:"5"})]}),Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{onClick:function(t){return e.update(t)},id:"4",className:"6"}),Object(a.jsx)("td",{onClick:function(t){return e.update(t)},id:"3",className:"7"}),Object(a.jsx)("td",{onClick:function(t){return e.update(t)},id:"8",className:"8"})]})]})}),Object(a.jsxs)("div",{className:"debug",style:{color:"black"},children:[Object(a.jsxs)("p",{children:["Count: ",c]}),Object(a.jsxs)("p",{children:["Player: ",n]}),Object(a.jsxs)("p",{children:["Player 1 Array: ",s.toString()]}),Object(a.jsxs)("p",{children:["Player 2 Array: ",i.toString()]})]}),Object(a.jsx)(f,{})]}),Object(a.jsxs)(p.a,{showMask:!1,animation:"door",duration:400,visible:r,onClose:this.hide.bind(this),children:[Object(a.jsx)("h3",{children:"Congratulations!"}),Object(a.jsxs)("div",{class:"row",children:[Object(a.jsx)("div",{class:"column",children:Object(a.jsx)("img",{style:{width:"100%",marginTop:"-15px"},alt:"Victory",src:y})}),Object(a.jsxs)("div",{class:"column",children:[o," won the game!"]})]})]})]})}}]),n}(s.a.Component);var C=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(w,{})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(C,{})}),document.getElementById("root")),N()}},[[29,1,2]]]);
//# sourceMappingURL=main.f6b3a755.chunk.js.map