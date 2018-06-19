// 顯示或隱藏子選單
function switchMenu( theMainMenu, theSubMenu){
    var SubMenu = document.getElementById( theSubMenu );
    if( SubMenu.style.display == 'none' ){ // 顯示子選單
    	if(theSubMenu != 'Set'){
    	var element = document.getElementsByClassName( "list_detail2" )[0];
    	var element2 = document.getElementsByClassName( "list" )[0];
		for(var i = 0;element;i++){
			element.style.display = 'none';
			element2.style.backgroundColor = 'rgba(23, 36, 61, 0.9)';
			element = document.getElementsByClassName( "list_detail2" )[i + 1];
			element2 = document.getElementsByClassName( "list" )[i + 1];
		}
		}
        //theMainMenu.style.marginBottom = "30px";
        //SubMenu.style.marginBottom = "30px";
        //background-color: rgba(23, 36, 61, 0.9);
        theMainMenu.style.backgroundColor = 'rgba(154, 215, 234, 0.8)';
        SubMenu.style.display = 'block';
        SubMenu.style.animationPlayState = "running";
    }
    else{ // 隱藏子選單;
        	//SubMenu.style.marginBottom = "0px";
            //theMainMenu.style.marginBottom = "10px";
        theMainMenu.style.backgroundColor = 'rgba(23, 36, 61, 0.9)';
        SubMenu.style.display = 'none';
        SubMenu.style.animationPlayState = 'paused';
    }
}

function switchMenu2( theMainMenu, theSubMenu){
    var SubMenu = document.getElementById( theSubMenu );
    if( SubMenu.style.display == 'none' ){ // 顯示子選單

        //background-color: rgba(23, 36, 61, 0.9);
        theMainMenu.style.backgroundColor = 'rgba(23, 36, 61, 0.9)';
        SubMenu.style.display = 'block';
        SubMenu.style.animationPlayState = "running";
    }
    else{ // 隱藏子選單;
        	//SubMenu.style.marginBottom = "0px";
            //theMainMenu.style.marginBottom = "10px";
        theMainMenu.style.backgroundColor = 'rgba(23, 36, 61, 0.9)';
        SubMenu.style.display = 'none';
        SubMenu.style.animationPlayState = 'paused';
    }
}

function switchSettingList( theMainMenu, theSubMenu){
    var SubMenu = document.getElementById( theSubMenu );
    if( SubMenu.style.display == 'none' ){ // 顯示子選單
        SubMenu.style.display = 'block';
    }
    else{ // 隱藏子選單;
        SubMenu.style.display = 'none';
    }
}


var listOn = false;
function settingListAnimateCTL( theList, theElement){
	var List = document.getElementById( theList );
	if(!listOn){
		List.style.animationPlayState = "running";
		listOn = true;
		//element漸入
		var element = document.getElementsByClassName( theElement )[0];
		for(var i = 0;element;i++){
			element.style.animationPlayState = "running";
			element = document.getElementsByClassName( theElement )[i + 1];
		}
	}
	else{
		List.style.animationPlayState = "paused";
		var element = document.getElementsByClassName( theElement )[0];
		for(var i = 0;element;i++){
			element.style.animationPlayState = "paused";
			element = document.getElementsByClassName( theElement )[i + 1];
		}
		listOn = false;
	}
}

function selectDeleteList( theList ){
    if(theList.style.marginLeft == "50px"){
        theList.style.marginLeft = "80px";
        listOn = true;
    }
    else if (theList.style.marginLeft == "80px"){
        theList.style.marginLeft = "50px";
        listOn = flase;
    }
}
var count=5;
function addBook(){
    var bookname=document.getElementById("_bookname");
    localStorage.setItem("NAME"+count,bookname.value);
    var isbn=document.getElementById("_ISBN");
    localStorage.setItem("ISBN"+count,isbn.value);
    var author=document.getElementById("_author");
    localStorage.setItem("AUTHOR"+count,author.value);
    var illustrator=document.getElementById("_illustrator");
    localStorage.setItem("ILLUSTRATOR"+count,illustrator.value);
    var price=document.getElementById("_price");
    localStorage.setItem("PRICE"+count,price.value);
    var publisher=document.getElementById("_publisher");
    localStorage.setItem("PUBLISHER"+count,publisher.value);
    var date=document.getElementById("_date");
    localStorage.setItem("DATE"+count,date.value);
    count++;
	alert("已新增");
	document.getElementById("_bookname").value = "";
	document.getElementById("_ISBN").value = "";
	document.getElementById("_author").value = "";
	document.getElementById("_illustrator").value = "";
	document.getElementById("_price").value = "";
	document.getElementById("_publisher").value = "";
	document.getElementById("_date").value = "";
}

function deleteBook(){
	var D = confirm("確定要將["+ document.getElementById('deleteBookName').value +"]刪除嗎?");
	if(D){
		var book;
		for(var i = 0; i < localStorage.length/7;i++){
			var a=i+5;
			if(localStorage.getItem("NAME"+a) == document.getElementById("deleteBookName").value){
				localStorage.removeItem("NAME"+a);
				localStorage.removeItem("ISBN"+a);
				localStorage.removeItem("AUTHOR"+a);
				localStorage.removeItem("ILLUSTRATOR"+a);
				localStorage.removeItem("PRICE"+a);
				localStorage.removeItem("PUBLISHER"+a);
				localStorage.removeItem("DATE"+a);
				
			}
		}
		location.reload();
	}
}
function researchBookByBookname(){
    var words=document.getElementById("research").value;
    if(words!=""){
    for(var i = 0; i < localStorage.length/7;i++){
            var a=i+5;
            if(localStorage.getItem("NAME"+a) != words){
                $("#List"+a).hide();
            }
              if(localStorage.getItem("NAME"+a) == words){
                $("#List"+a).show();
            }
        }
    }
}
function researchBookByBookauthor(){
    var words=document.getElementById("research").value;
    if(words!=""){
    for(var i = 0; i < localStorage.length/7;i++){
            var a=i+5;
            if(localStorage.getItem("AUTHOR"+a) != words){
                $("#List"+a).hide();
            }
              if(localStorage.getItem("AUTHOR"+a) == words){
                $("#List"+a).show();
            }
        }
    }
}
function researchBookByBookprice(){
    var words=document.getElementById("research").value;
    if(words!=""){
    for(var i = 0; i < localStorage.length/7;i++){
            var a=i+5;
            if(localStorage.getItem("PRICE"+a) != words){
                $("#List"+a).hide();
            }
              if(localStorage.getItem("PRICE"+a) == words){
                $("#List"+a).show();
            }
        }
    }
}
function researchBookByBookdate(){
    var words=document.getElementById("research").value;
    if(words!=""){
    for(var i = 0; i < localStorage.length/7;i++){
            var a=i+5;
            if(localStorage.getItem("PRICE"+a) != words){
                $("#List"+a).hide();
            }
              if(localStorage.getItem("PRICE"+a) == words){
                $("#List"+a).show();
            }
        }
    }
}
function scrolltop(){
    window,document.body.scrollTop=0;
}
function scrollEnd(){
    window,document.body.scrollTop=2500;
}