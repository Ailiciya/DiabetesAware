document.getElementById("diabetes-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Ambil input dari pengguna
    const age = document.getElementById("age").value;
    const bmi = document.getElementById("bmi").value;
    const bloodPressure = document.getElementById("blood-pressure").value;
  
    // Prediksi sederhana (dummy)
    let risk = "Rendah";
    if (bmi > 25 || bloodPressure > 130) {
      risk = "Tinggi";
    }
  
    // Tampilkan hasil prediksi
    document.getElementById("result").textContent = `Risiko Diabetes: ${risk}`;
  });
  
