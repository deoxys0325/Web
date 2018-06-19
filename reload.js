
var bookTest = [["果然我的青春戀愛喜劇搞錯了(3)", "渡 航", "9789571051840", "尖端出版社", "2013/3/22", "210", "images/book0.jpg"],
				["不正經的魔術講師與追想日誌 (2)", "羊太郎", "9789864865680", "東立出版社", "2017/08/10", "230", "images/book1.jpg"],
				["GAMERS電玩咖！ (4) 亞玖璃與無自覺CRITICAL", "葵せきな", "9789864737888", "台灣角川出版社", "2017/07/20", "220", "images/book2.jpg"],
				["Sword Art Online 刀劍神域 (18) Alicization lasting", "川原礫", "9789864736102", "台灣角川出版社", "2017/04/27", "280", "images/book3.jpg"]];



function listBlockDatabase(a){
	var list = document.createElement("DIV");
		var bookPicture = document.createElement("DIV");
		var book = document.createElement("DIV");
		var bookName = document.createElement("DIV");
		var bookWriter = document.createElement("DIV");
		
		bookName.setAttribute("class", "bookName");
		bookName.innerHTML = localStorage.getItem("NAME" + a);
		bookWriter.setAttribute("class", "bookWriter");
		bookWriter.innerHTML = "作者 : " + localStorage.getItem("AUTHOR" + a);
		book.setAttribute("class", "book");
		bookPicture.setAttribute("class", "bookPicture");
		bookPicture.setAttribute("id", "book" + a);
		if(localStorage.getItem('PICTURE'+a)) bookPicture.innerHTML = "<img src="+localStorage.getItem('PICTURE'+a)+" height=200px>";
		list.setAttribute("id", "List" + a);
		list.setAttribute("class", "list");
		list.setAttribute("onclick", "switchMenu(this, 'ListDetail"+ a +"')");
		
		list.innerHTML=list.innerHTML+"";
		
		
		book.appendChild(bookName);
		book.innerHTML += "<hr>";
		book.appendChild(bookWriter);
		list.appendChild(bookPicture);
		list.appendChild(book);
		document.getElementById("listBlock").appendChild(list);
}

function listBlockDatabase_delete(a){
	var list = document.createElement("DIV");
		var bookPicture = document.createElement("DIV");
		var book = document.createElement("DIV");
		var bookName = document.createElement("DIV");
		var bookWriter = document.createElement("DIV");
		
		bookName.setAttribute("class", "bookName");
		bookName.setAttribute("id", "bookName");
		bookName.innerHTML = localStorage.getItem("NAME" + a);
		bookWriter.setAttribute("class", "bookWriter");
		bookWriter.innerHTML = "作者 : " + localStorage.getItem("AUTHOR" + a);
		book.setAttribute("class", "book");
		bookPicture.setAttribute("class", "bookPicture");
		bookPicture.setAttribute("id", "book" + a);
		if(localStorage.getItem('PICTURE'+a)) bookPicture.innerHTML = "<img src="+localStorage.getItem('PICTURE'+a)+" height=200px>";
		list.setAttribute("id", "List" + a);
		list.setAttribute("class", "deleteSearchList");
		list.setAttribute("onclick", "document.getElementById('deleteBookName').value = this.children[1].children[0].innerHTML");
		
		list.innerHTML=list.innerHTML+"";
		
		
		book.appendChild(bookName);
		book.innerHTML += "<hr>";
		book.appendChild(bookWriter);
		list.appendChild(bookPicture);
		list.appendChild(book);
		document.getElementById("listBlock").appendChild(list);
}


function listDetailDatabase(a){
	var listDetail = document.createElement("UL");
	listDetail.setAttribute("id", "ListDetail" + a);
	listDetail.setAttribute("class", "List_Detail2");
	listDetail.setAttribute("style", "display: none");
	listDetail.innerHTML = "<a class = 'bookDetailTittle'>-書名-</br></a>" + 
	"<p style = 'color:rgb(250,200,200)'>" + localStorage.getItem('NAME' + a) + "</p>" + 
	"<hr>" + 
	"<a class = 'bookDetailTittle'>-作者-</br></a>" + 
	"<p style = 'color:rgb(250,200,200)'>" + localStorage.getItem('AUTHOR' + a) + "</p>" + 
	"<hr>" + 
	"<a class = 'bookDetailTittle'>-ISBN-</br></a>" + 
	"<p>" + localStorage.getItem('ISBN' + a) + "</p>" + 
	"<hr>"+
	"<a class = 'bookDetailTittle'>-發行商-</br></a>"+
	"<p>" + localStorage.getItem('PUBLISHER' + a) + "</p>"+
	"<hr>"+
	"<a class = 'bookDetailTittle'>-發行日期-</br></a>"+
	"<p>" + localStorage.getItem('DATE' + a) + "</p>"+
	"<hr>"+
	"<a class = 'bookDetailTittle'>-定價-</br></a>"+
	"<p>" + localStorage.getItem('PRICE' + a) + "元</p>"+
	"<hr>";
	document.getElementById("ListDetailBlock").appendChild(listDetail);
}

function addTestBook(){
	for(count = 0;count < 4;count++){
		localStorage.setItem("NAME"+count, bookTest[count][0]);
		localStorage.setItem("AUTHOR"+count, bookTest[count][1]);
		localStorage.setItem("ISBN"+count, bookTest[count][2]);
		localStorage.setItem("ILLUSTRATOR"+count, "無");
		localStorage.setItem("PUBLISHER"+count, bookTest[count][3]);
		localStorage.setItem("DATE"+count, bookTest[count][4]);
		localStorage.setItem("PRICE"+count, bookTest[count][5]);
		localStorage.setItem("PICTURE"+count, bookTest[count][6]);
	}
}


function reload(){
	if(localStorage.length == 0){
		var F = confirm("資料庫中沒有東西喔!!"+"需要讀入測試資料嗎?");
		if(F) addTestBook();
	}
	var i=localStorage.length/7;
	for(var j=0;j<i;j++){
		var a=j+5;
		if(localStorage.getItem("NAME"+j)){
			if(document.getElementById("ListDetailBlock")){
				listBlockDatabase(j);
				listDetailDatabase(j);
			}
			else{ listBlockDatabase_delete(j); }
		}
	}
}
window.addEventListener("load",reload,false);