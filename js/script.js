function calculate() {
    // Ambil nilai panjang sisi dari input
    var sideLength = document.getElementById("sideLength").value;
  
    // Hitung luas persegi
    var area = sideLength * sideLength;
  
    // Hitung keliling persegi
    var perimeter = 4 * sideLength;
  
    // Tampilkan perhitungan manual
    var manualCalculationDiv = document.getElementById("manualCalculation");
    manualCalculationDiv.innerHTML = "<strong>Perhitungan Manual:</strong>";
    manualCalculationDiv.innerHTML += "<p>Luas = Panjang Sisi x Panjang Sisi</p>";
    manualCalculationDiv.innerHTML += "<p>Luas = " + sideLength + " x " + sideLength + "</p>";
    manualCalculationDiv.innerHTML += "<p>Luas = " + area + "</p>";
    manualCalculationDiv.innerHTML += "<p>Keliling = 4 x Panjang Sisi</p>";
    manualCalculationDiv.innerHTML += "<p>Keliling = 4 x " + sideLength + " = " + perimeter + "</p>";
    manualCalculationDiv.innerHTML += "<p>Keliling = "  + perimeter + "</p>";
  }
  
  function resetForm() {
    // Reset nilai input, hasil perhitungan, dan perhitungan manual
    document.getElementById("sideLength").value = "";
    document.getElementById("manualCalculation").innerHTML = "";
  }