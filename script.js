let strongElement = document.querySelectorAll("strong");
function highlight() {
    //Write your code here
	for ( let i = 0; i < strongElement.length; i++){
		strongElement[i].classList.add("addColor");
	}

}


function return_normal() {
    //Write your code here
for ( let i = 0; i < strongElement.length; i++){
		strongElement[i].classList.remove("addColor");
	}
    
}
