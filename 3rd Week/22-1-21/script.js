// iffy unutma!
// selecting column to check where is clicked on the board
// e.target tam olarak nereye tıklandığğı e.currentTarget ise 
// eventListenerın nereye eklendiğini/ex. the column verir
// after this EL i need to know the situation of that column / is it filled= slotsInCol=col.children()
// bu elde ettiğimiz arrayde gezinerek player 1-2 class'ı var mı diye bakacağız
// bunun için reverse for loop yapacağız...for(var i=col.lenght-1; i<0;i--)
//  if statement ta && ile p1 ve p2 olmadığını check ederiz ve eğer boş ise class ekleyip break ile bitirmek gerekir
// bu loop ve atama bitince switch player fn çalışması gerekir
// burada column dolduğunda dahi o kcolumn a tıklanınca fn yine çalışıyor bunu çözmek gerekir
// if i === -1 return kullanırız, -1 aldığı son incremation değer oluyor
// bu EL kaldırılarak da yapılır ancak sonradan tekrar EL eklediğimzie  emin oplmalıyız, bu da daha çok kod demektir
// tıklanan column da 4 tane aynı klas var mı bakacağız, yoksa row a bakacağız
// en son da diagonal olarak kontrol yapacağız
// checkForVictory fn (slots)=> 

// First current player and switch it with a if statement=switchPlayer fn
var currentPlayer = "player1";

function switchPlayer() {
    currentPlayer = currentPlayer === "player1" ? "player2" : "player1";
}


$(".column").on("click", function (event) {
    var column = $(event.currentTarget);
    var columnSlots = column.children();
    console.log(columnSlots);

    for (var i = columnSlots.lenght - 1; i >= 0; i--) {
        console.log("iterating");
        if (!columnSlots.eq(i).hasClass("player1") && columnSlots.eq(i).hasClass("player2")) {
            console.log("free");
            columnSlots.eq(i).addClass(currentPlayer);
        }

    }




})



