// Tarifler dizisi, localStorage'dan okunuyor veya boş bir dizi oluşturuluyor
let recipes = JSON.parse(localStorage.getItem('recipes')) || [];

// Tarifi ekleme fonksiyonu
function addRecipe() {
    const recipe = prompt('Lütfen bir yemek tarifi girin:'); // Kullanıcıdan tarif al
    if (recipe) {
        recipes.push(recipe); // Diziye ekle
        localStorage.setItem('recipes', JSON.stringify(recipes)); // localStorage'a kaydet
        console.log(`Tarif eklendi: ${recipe}`);
    } else {
        console.log('Boş tarif girilemez!');
    }
}

// Tarif silme fonksiyonu
function deleteRecipe() {
    listRecipes(); // Mevcut tarifleri göster
    const index = prompt('Silmek istediğiniz tarifin numarasını girin:'); // Silinecek tarifin numarasını al
    const parsedIndex = parseInt(index, 10) - 1; // İndeksi doğru formatta al
    if (!isNaN(parsedIndex) && parsedIndex >= 0 && parsedIndex < recipes.length) {
        const removed = recipes.splice(parsedIndex, 1); // Diziye silme işlemi
        localStorage.setItem('recipes', JSON.stringify(recipes)); // localStorage'ı güncelle
        console.log(`Silinen tarif: ${removed}`);
    } else {
        console.log('Geçersiz numara!');
    }
}

// Tarifleri listeleme fonksiyonu
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

// Ana uygulama akışı
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
