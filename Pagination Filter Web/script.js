//Configure the data of items as arrays
var destinations = ['Hoan Kiem Lake', 'Hoi An Old Town', 'Yellow Stone National Park', 'Imperial City', 'Basilique Notre-Dame', 'Red Rocks Park', 'Stanley Park', 'Kinkaku-ji', 'Taj Mahal', 'Manikarnika Ghat', 'Mt Fuji', 'Temples of Angkor', 'Freycinet National Park', 'Sydney Harbour Bridge', 'Queens Town'];
var imageFiles = ['HoanKiemLake.jpg', 'HoiAnOldTown.jpg', 'YellowStoneNationalPark.jpg', 'ImperialCity.jpg', 'BasiliqueNotreDame.jpg', 'RedRocksPark.jpg', 'StanleyPark.jpg', 'KinkakuJi.jpg', 'TajMahal.jpg', 'ManikarnikaGhat.jpg', 'MtFuji.jpg', 'TemplesofAngkor.jpg', 'FreycinetNationalPark.jpg', 'SydneyHarbourBridge.jpg', 'QueensTown.jpg'];
var locations = ['Ha Noi, Vietnam', 'Quang Nam, Vietnam', 'USA', 'Hue, Vietnam', 'Montreal, Canada', 'The Rocky Moutains, USA', 'Vancouver, Canada', 'Kyoto, Japan', 'Agra, India', 'Varanasi, India', 'Japan', 'Cambodia', 'Autralia', 'Autralia', 'New Zealand'];
var areas = ['Asia', 'Asia', 'North America', 'Asia', 'North America', 'North America', 'North America', 'Asia', 'Asia', 'Asia', 'Asia', 'Asia', 'Australia & Pacific', 'Australia & Pacific', 'Australia & Pacific'];
var areaRankings = ['15', '13', '3', '23', '8', '9', '12', '7', '1', '11', '21', '8', '3', '7', '5'];

//Constants
var numberOfItems = destinations.length;
const itemsPerPage = 5;
const numberOfPages = Math.ceil(numberOfItems/itemsPerPage);

//Global variable
const mainContainer = document.querySelector("main");

//Add all list of items into the main container
showAllItems(0,numberOfItems);

const Items = document.querySelectorAll('div.lists');

//Create Page-button
const pageNumContainer = document.querySelector("div.page");
for (var i=0; i<numberOfPages; i++){
    createNode("button", "page-number", (i+1).toString(), pageNumContainer);
}

//Add Listener for Page Buttons
var btnPage = document.querySelectorAll(".page-number");
for (var i=0; i<numberOfPages; i++){
    btnPage[i].addEventListener('click', function (){
        var number = this.innerHTML;
        number = number.toString();
        showPage(currentListOfItems,number);
    });
}

//Show all items on Page 1 when loading at the first time
var currentListOfItems =[];
for (var i=0; i<numberOfItems; i++){currentListOfItems[i]=true;}
showPage(currentListOfItems,1);

//Add Listener for Search bar
var inputSearch = document.querySelector(".header-search input");

inputSearch.addEventListener("keyup",searchItems);


/****************************************************************
 * FUNCTIONS
 * **************************************************************/
function searchItems() {
    var keyText = inputSearch.value;
    keyText = keyText.toString().toLowerCase();
    if(keyText === ""){
        for (i=0; i<numberOfItems; i++){currentListOfItems[i]=true;}
        showPage(currentListOfItems,1);
        removePageButton(numberOfItems);
        return;
    }
    for (i=0; i<numberOfItems; i++){currentListOfItems[i]=false;}
    var counter = 0;
    for (var i = 0; i<numberOfItems; i++){
        var data1 = destinations[i] + areaRankings[i] + locations[i] +areas[i];
        data1 = data1.toLowerCase();
        if (data1.indexOf(keyText)>=0){
            currentListOfItems[i]=true;
            counter++;
        } else {
            currentListOfItems[i]=false;
        }
    }
    removePageButton(counter);
    showPage(currentListOfItems,1);
}

function removePageButton(counter) {
    for (i=0; i<numberOfPages; i++) {
        if (counter/numberOfPages >= i) {
            btnPage[i].classList.remove("hide");
        } else{
            btnPage[i].classList.add("hide");
        }
    }
}

/*Show items on one page of the currentListOfItems*/
function showPage(li, number) {
    var counter =0;
    for (var i= 0; i<numberOfItems;i++){
        if (li[i]){
            if (counter>= (number-1)*itemsPerPage && counter<number*itemsPerPage){
                Items[i].classList.remove('hide');
            } else {
                Items[i].classList.add('hide');
            }
            counter ++;
        } else {
            Items[i].classList.add('hide');
        }
    }
}

/*Create an html element with class and innerHtml, and then append to the parent node*/
function createNode(type, className, innerHTMLValue, parentNode) {
    var node = document.createElement(type);
    node.setAttribute("class", className);
    node.innerHTML = innerHTMLValue;
    parentNode.appendChild(node);
}

/*Show all items on the html page*/
function showAllItems(iBegin, iEnd) {

    //var iBegin = 0;//(page - 1) * itemsPerPage;
    //var iEnd = itemsPerPage;//+ iBegin;

    //Clear the main element
    mainContainer.innerHTML = '';

    for (var i = iBegin; i < iEnd; i++) {
        //Create the image node
        var imageNode = document.createElement("div");
        imageNode.setAttribute("class", "lists-image-container");
        var image = document.createElement("img");
        image.setAttribute("class", "images");
        image.setAttribute("src", "Data/" + imageFiles[i]);
        imageNode.appendChild(image);

        //Create the information node
        var inforNode = document.createElement("div");
        inforNode.setAttribute("class", "lists-infor");
        createNode("div", "lists-infor-destination", destinations[i], inforNode);
        createNode("div", "lists-infor-location", locations[i], inforNode);
        createNode("div", "lists-infor-area", areas[i], inforNode);
        createNode("div", "lists-infor-ranking", areaRankings[i], inforNode);


        //Create a container and Append the image node and information node to this container
        var container = document.createElement("div");
        container.setAttribute("class", "lists");
        container.appendChild(imageNode);
        container.appendChild(inforNode);
        mainContainer.appendChild(container);
    }
}
