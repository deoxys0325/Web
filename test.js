
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

function addBook(){
	var count = parseInt(localStorage.length/7);
    var bookname=document.getElementById("_bookname");
    var isbn=document.getElementById("_ISBN");
	var author=document.getElementById("_author");
	var illustrator=document.getElementById("_illustrator");
	var price=document.getElementById("_price");
	var publisher=document.getElementById("_publisher");
	var date=document.getElementById("_date");
	if(bookname.value && isbn.value && author.value && illustrator.value && price.value && publisher.value && date.value){
		localStorage.setItem("NAME"+count,bookname.value);
		localStorage.setItem("ISBN"+count,isbn.value);
		localStorage.setItem("AUTHOR"+count,author.value);
		localStorage.setItem("ILLUSTRATOR"+count,illustrator.value);
		localStorage.setItem("PRICE"+count,price.value);
		localStorage.setItem("PUBLISHER"+count,publisher.value);
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
	else{ alert("資料未填寫完整!!"); }
}


function deleteBook(){
	var D = confirm("確定要將["+ document.getElementById('deleteBookName').value +"]刪除嗎?");
	if(D){
		var isBookExist = false;
		for(var i = 0; i < parseInt(localStorage.length/7);i++){
			var a=i+5;
			if(localStorage.getItem("NAME"+i) == document.getElementById("deleteBookName").value){
				isBookExist = true;console.log(i);
				localStorage.removeItem("NAME"+i);
				localStorage.removeItem("ISBN"+i);
				localStorage.removeItem("AUTHOR"+i);
				localStorage.removeItem("ILLUSTRATOR"+i);
				localStorage.removeItem("PRICE"+i);
				localStorage.removeItem("PUBLISHER"+i);
				localStorage.removeItem("DATE"+i);
				if(localStorage.getItem("PICTURE"+i)) localStorage.removeItem("PICTURE"+i);
				
				if(localStorage.getItem("NAME"+(i+1))){
					for(var j = i; localStorage.getItem("NAME"+(j+1)); j++ ){
					localStorage.setItem("NAME"+j, localStorage.getItem("NAME"+(j+1)));
					localStorage.setItem("ISBN"+j, localStorage.getItem("ISBN"+(j+1)));
					localStorage.setItem("AUTHOR"+j, localStorage.getItem("AUTHOR"+(j+1)));
					localStorage.setItem("ILLUSTRATOR"+j, localStorage.getItem("ILLUSTRATOR"+(j+1)));
					localStorage.setItem("PRICE"+j, localStorage.getItem("PRICE"+(j+1)));
					localStorage.setItem("PUBLISHER"+j, localStorage.getItem("PUBLISHER"+(j+1)));
					localStorage.setItem("DATE"+j, localStorage.getItem("DATE"+(j+1)));
					if(localStorage.getItem("PICTURE"+(j+1))) localStorage.setItem("PICTURE"+j, localStorage.getItem("PICTURE"+(j+1)));
					else localStorage.removeItem("PICTURE"+j);
					document.getElementById("book"+j).innerHTML = "<img src='images/book"+(j+1)+".jpg' height='200px'>";
					}
					localStorage.removeItem("NAME"+j);
					localStorage.removeItem("ISBN"+j);
					localStorage.removeItem("AUTHOR"+j);
					localStorage.removeItem("ILLUSTRATOR"+j);
					localStorage.removeItem("PRICE"+j);
					localStorage.removeItem("PUBLISHER"+j);
					localStorage.removeItem("DATE"+j);
					if(localStorage.getItem("PICTURE"+j)) localStorage.removeItem("PICTURE"+j);
				}
			}
		}
		if(!isBookExist){ alert("資料庫中沒有這本書唷~"); }
		location.reload();
	}
}


function researchBookByBookname(){
    var words=document.getElementById("research").value;
    if(words!=""){
    for(var i = 0; i < parseInt(localStorage.length/7);i++){
            var a=i+5;
            if(localStorage.getItem("NAME"+i) != words){
                $("#List"+i).hide();
            }
              if(localStorage.getItem("NAME"+i) == words){
                $("#List"+i).show();
            }
        }
    }
}
function researchBookByBookauthor(){
    var words=document.getElementById("research").value;
    if(words!=""){
    for(var i = 0; i < parseInt(localStorage.length/7);i++){
            var a=i+5;
            if(localStorage.getItem("AUTHOR"+i) != words){
                $("#List"+i).hide();
            }
              if(localStorage.getItem("AUTHOR"+i) == words){
                $("#List"+i).show();
            }
        }
    }
}
function researchBookByBookprice(){
    var words=document.getElementById("research").value;
    if(words!=""){
    for(var i = 0; i < parseInt(localStorage.length/7);i++){
            var a=i+5;
            if(localStorage.getItem("PRICE"+i) != words){
                $("#List"+i).hide();
            }
              if(localStorage.getItem("PRICE"+i) == words){
                $("#List"+i).show();
            }
        }
    }
}
function researchBookByBookdate(){
    var words=document.getElementById("research").value;
    if(words!=""){
    for(var i = 0; i < parseInt(localStorage.length/7);i++){
            var a=i+5;
            if(localStorage.getItem("PRICE"+i) != words){
                $("#List"+i).hide();
            }
              if(localStorage.getItem("PRICE"+i) == words){
                $("#List"+i).show();
            }
        }
    }
}