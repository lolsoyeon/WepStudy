/**
 * myMenu.js 
 */

function myMenu(status)
{
	var menu = document.getElementById("menuTable");

	if (status==1)
	{
//		menu.style.		did 엘리먼트에게 스타일부여한다는거는  CSS이다.
		menu.style.display = "block";
	} 
	else
	{
		menu.style.display = "none";
	}

}





/*
function 메뉴보이기()
{
	
}

function 메뉴 감추기()
{
	
}
*/

