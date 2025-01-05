let recipes = JSON.parse(localStorage.getItem('recipes')) || [];


function addRecipe() {
    const recipe = prompt('Lütfen bir yemek tarifi girin:'); 
    if (recipe) {
        recipes.push(recipe); 
        localStorage.setItem('recipes', JSON.stringify(recipes)); 
        console.log(`Tarif eklendi: ${recipe}`);
    } else {
        console.log('Boş tarif girilemez!');
    }
}


function deleteRecipe() {
    listRecipes(); 
    const index = prompt('Silmek istediğiniz tarifin numarasını girin:'); 
    const parsedIndex = parseInt(index, 10) - 1; 
    if (!isNaN(parsedIndex) && parsedIndex >= 0 && parsedIndex < recipes.length) {
        const removed = recipes.splice(parsedIndex, 1); 
        localStorage.setItem('recipes', JSON.stringify(recipes)); 
        console.log(`Silinen tarif: ${removed}`);
    } else {
        console.log('Geçersiz numara!');
    }
}

function listRecipes() {
    console.log('Kayıtlı tarifler:');
    if (recipes.length > 0) {
        recipes.forEach((recipe, index) => {
            console.log(`${index + 1}: ${recipe}`);
        });
    } else {
        console.log('Henüz tarif yok.');
    }
}


function Menu(){
let choice = prompt(`
Yemek Tarifleri Uygulaması:
1. Tarif Ekle
2. Tarif Sil
3. Tarifleri Listele
4. Çıkış
Lütfen bir seçenek girin (1-4):
`);

switch (choice) {
    case '1':
        addRecipe();
        break;
    case '2':
        deleteRecipe();
        break;
    case '3':
        listRecipes();
        break;
    case '4':
        console.log('Uygulama kapatıldı.');
        break;
    default:
        console.log('Geçersiz bir seçim yaptınız. Lütfen tekrar deneyin.');
}
};
Menu();
