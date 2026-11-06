
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("rentalForm");

  if (!form) return;

  const nama = document.getElementById("nama");
  const mobil = document.getElementById("mobil");
  const lama = document.getElementById("lama");
  const message = document.getElementById("formMessage");

  function clearErrors() {
    document.getElementById("namaError").textContent = "";
    document.getElementById("mobilError").textContent = "";
    document.getElementById("lamaError").textContent = "";

    message.textContent = "";
    message.className = "form-message";
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    clearErrors();

    let valid = true;

    const namaValue = nama.value.trim();

    // Nama harus diakhiri 3 digit angka NIM
    const polaNama = /^[A-Za-zÀ-ÿ' -]+\s\d{3}$/;

    if (!polaNama.test(namaValue)) {
      document.getElementById("namaError").textContent =
        "Masukkan nama diikuti 3 digit terakhir NIM. Contoh: Dina 123.";

      valid = false;
    }

    if (!mobil.value) {
      document.getElementById("mobilError").textContent =
        "Silakan pilih mobil.";

      valid = false;
    }

    const jumlahHari = Number(lama.value);

    if (
      lama.value === "" ||
      !Number.isInteger(jumlahHari) ||
      jumlahHari < 1
    ) {
      document.getElementById("lamaError").textContent =
        "Lama sewa minimal 1 hari.";

      valid = false;
    }

    if (!valid) {
      message.textContent =
        "Form belum dapat dikirim. Periksa kembali data yang ditandai.";

      message.classList.add("failure");
      return;
    }

    message.textContent =
      "Validasi berhasil! Permintaan sewa " +
      mobil.value +
      " selama " +
      jumlahHari +
      " hari atas nama " +
      namaValue +
      " siap diproses.";

    message.classList.add("success");

    form.reset();
  });
});
