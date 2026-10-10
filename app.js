/**
 * APP.JS - SISTEM LOGISTIK SATGAS KARHUTLA KAB. PULAU TALIABU
 * Update: Perbaikan Background Sync, Optimistic UI, Pagination, & Mobile Action Expansion
 */

const DEFAULT_INVENTORY = [
  { id: 1, nama: "Beras 5 Kg", masuk: 103, keluar: 20, satuan: "Karung", sisa: 83 },
  { id: 2, nama: "Beras 10 Kg", masuk: 21, keluar: 0, satuan: "Karung", sisa: 21 },
  { id: 3, nama: "Beras 25 Kg", masuk: 5, keluar: 0, satuan: "Karung", sisa: 5 },
  { id: 4, nama: "Beras 50 Kg", masuk: 1, keluar: 0, satuan: "Karung", sisa: 1 },
  { id: 5, nama: "Le Minerale 600 ml", masuk: 13, keluar: 0, satuan: "Dos", sisa: 13 },
  { id: 6, nama: "Le Minerale 330 ml", masuk: 70, keluar: 5, satuan: "Dos", sisa: 65 },
  { id: 7, nama: "Aqua Botol 600 ml", masuk: 7, keluar: 0, satuan: "Dos", sisa: 7 },
  { id: 8, nama: "Aqua Gelas Lt", masuk: 56, keluar: 30, satuan: "Dos", sisa: 26 },
  { id: 9, nama: "Aqua Gelas Viand", masuk: 33, keluar: 0, satuan: "Dos", sisa: 33 },
  { id: 10, nama: "Aqua Gelas Venesta", masuk: 7, keluar: 0, satuan: "Dos", sisa: 7 },
  { id: 11, nama: "Aqua Gelas Awesome", masuk: 9, keluar: 9, satuan: "Dos", sisa: 0 },
  { id: 12, nama: "Aqua Gelas Maxi", masuk: 31, keluar: 31, satuan: "Dos", sisa: 0 },
  { id: 13, nama: "Telur", masuk: 124, keluar: 45, satuan: "Rak", sisa: 79 },
  { id: 14, nama: "Indomie Goreng", masuk: 16, keluar: 12, satuan: "Dos", sisa: 4 },
  { id: 15, nama: "Mie Sedap Goreng", masuk: 31, keluar: 6, satuan: "Dos", sisa: 25 },
  { id: 16, nama: "Supermi Ayam Bawang", masuk: 32, keluar: 0, satuan: "Dos", sisa: 32 },
  { id: 17, nama: "Mie Sedap Soto", masuk: 9, keluar: 0, satuan: "Dos", sisa: 9 },
  { id: 18, nama: "Indomie Kaldu Ayam", masuk: 10, keluar: 4, satuan: "Dos", sisa: 6 },
  { id: 19, nama: "Pop Mie Ayam Bawang", masuk: 14, keluar: 3, satuan: "Dos", sisa: 11 },
  { id: 20, nama: "Mie Sedap Cup Korea Spicy", masuk: 6, keluar: 2, satuan: "Dos", sisa: 4 },
  { id: 21, nama: "Mie Sedap Cup Ayam Nampol", masuk: 4, keluar: 0, satuan: "Dos", sisa: 4 },
  { id: 22, nama: "Eko Mie", masuk: 5, keluar: 5, satuan: "Dos", sisa: 0 },
  { id: 23, nama: "Mie Dua Burung", masuk: 2, keluar: 2, satuan: "Dos", sisa: 0 },
  { id: 24, nama: "Minya Bimoli 1 Ltr", masuk: 28, keluar: 10, satuan: "Bungkus", sisa: 18 },
  { id: 25, nama: "Minyak Kita 900 Ml", masuk: 1, keluar: 0, satuan: "Dos", sisa: 1 },
  { id: 26, nama: "Good Day Cappucino", masuk: 1, keluar: 0, satuan: "Renteng", sisa: 1 },
  { id: 27, nama: "Kopi Gula Aren", masuk: 1, keluar: 0, satuan: "Renteng", sisa: 1 },
  { id: 28, nama: "Kopi Gula Aren", masuk: 3, keluar: 1, satuan: "Renteng", sisa: 2 },
  { id: 29, nama: "Torabika Cappucino", masuk: 1, keluar: 0, satuan: "Renteng", sisa: 1 },
  { id: 30, nama: "Kopi Kapal Api Renteng", masuk: 2, keluar: 2, satuan: "Bungkus", sisa: 0 },
  { id: 31, nama: "Kopi Kapal Api 350 g", masuk: 8, keluar: 5, satuan: "Bungkus", sisa: 3 },
  { id: 32, nama: "Kopi Mocca", masuk: 1, keluar: 1, satuan: "Renteng", sisa: 0 },
  { id: 33, nama: "Energen Coklat", masuk: 1, keluar: 0, satuan: "Renteng", sisa: 1 },
  { id: 34, nama: "Energen Vanila", masuk: 1, keluar: 0, satuan: "Renteng", sisa: 1 },
  { id: 35, nama: "Jasjus", masuk: 3, keluar: 0, satuan: "Pak", sisa: 3 },
  { id: 36, nama: "Extra Jos", masuk: 2, keluar: 0, satuan: "Pak", sisa: 2 },
  { id: 37, nama: "The Celup", masuk: 12, keluar: 8, satuan: "Pak", sisa: 4 },
  { id: 38, nama: "Susu Cap Enak", masuk: 1, keluar: 0, satuan: "Dos", sisa: 1 },
  { id: 39, nama: "You C 100", masuk: 1, keluar: 0, satuan: "Dos", sisa: 1 },
  { id: 40, nama: "Khonguan Kaleng", masuk: 2, keluar: 0, satuan: "Kaleng", sisa: 2 },
  { id: 41, nama: "Khonguan Bungkus", masuk: 1, keluar: 0, satuan: "Pak", sisa: 1 },
  { id: 42, nama: "Biscuit S.A.B", masuk: 2, keluar: 0, satuan: "Pak", sisa: 2 },
  { id: 43, nama: "Sari Gandum", masuk: 1, keluar: 0, satuan: "Pak", sisa: 1 },
  { id: 44, nama: "Biscuit UBM", masuk: 6, keluar: 0, satuan: "Pak", sisa: 6 },
  { id: 45, nama: "Gabing", masuk: 3, keluar: 3, satuan: "Dos", sisa: 0 },
  { id: 46, nama: "Gula Pasir", masuk: 8, keluar: 5, satuan: "Kg", sisa: 3 },
  { id: 47, nama: "Masker", masuk: 2, keluar: 1, satuan: "Dos", sisa: 1 }
];

const AppState = {
  gasUrl: window.GAS_API_URL || "",
  isAdmin: sessionStorage.getItem("satgas_is_admin") === "true",
  items: [],
  logs: JSON.parse(localStorage.getItem("satgas_local_logs") || "[]"),
  filter: { search: "", status: "ALL", satuan: "ALL", sort: "id_asc" },
  pagination: { page: 1, limit: 20 },
  isLoading: false,
  isLive: false
};

document.addEventListener("DOMContentLoaded", function () {
  initApp();
  setupEventListeners();
});

function initApp() {
  updateAdminUI();

  const savedLocalItems = localStorage.getItem("satgas_inventory_data");
  if (savedLocalItems) {
    try {
      AppState.items = JSON.parse(savedLocalItems);
    } catch (e) {
      AppState.items = [...DEFAULT_INVENTORY];
    }
  } else {
    AppState.items = [...DEFAULT_INVENTORY];
    saveLocalItems();
  }

  populateSatuanFilter();

  if (AppState.gasUrl && !AppState.gasUrl.includes("YOUR_SCRIPT_ID_HERE")) {
    fetchFromGAS();
  } else {
    updateConnectionStatus(false, "Mode Demo (Lokal)");
    renderDashboard();
  }
}

function setupEventListeners() {
  document.getElementById("searchInput").addEventListener("input", function (e) {
    AppState.filter.search = e.target.value.toLowerCase().trim();
    AppState.pagination.page = 1;
    renderTable();
  });
  document.getElementById("filterStatus").addEventListener("change", function (e) {
    AppState.filter.status = e.target.value;
    AppState.pagination.page = 1;
    renderTable();
  });
  document.getElementById("filterSatuan").addEventListener("change", function (e) {
    AppState.filter.satuan = e.target.value;
    AppState.pagination.page = 1;
    renderTable();
  });
  document.getElementById("sortOption").addEventListener("change", function (e) {
    AppState.filter.sort = e.target.value;
    AppState.pagination.page = 1;
    renderTable();
  });

  document.getElementById("itemsPerPage").addEventListener("change", function (e) {
    AppState.pagination.limit = parseInt(e.target.value);
    AppState.pagination.page = 1; 
    renderTable();
  });
  document.getElementById("btnPrevPage").addEventListener("click", function () {
    if (AppState.pagination.page > 1) {
      AppState.pagination.page--;
      renderTable();
    }
  });
  document.getElementById("btnNextPage").addEventListener("click", function () {
    AppState.pagination.page++;
    renderTable();
  });

  document.getElementById("btnRefresh").addEventListener("click", function () {
    if (AppState.gasUrl && !AppState.gasUrl.includes("YOUR_SCRIPT_ID_HERE")) {
      fetchFromGAS();
    } else {
      showToast("Data dimuat dari offline cache", "success");
      renderDashboard();
    }
  });

  document.getElementById("btnExportCsv").addEventListener("click", exportToCSV);
  document.getElementById("btnPrint").addEventListener("click", function () {
    window.print();
  });

  document.getElementById("btnAdminToggle").addEventListener("click", function () {
    if (AppState.isAdmin) {
      exitAdminMode();
    } else {
      openModal("modalAdminLogin");
      document.getElementById("adminPinInput").value = "";
      document.getElementById("adminPinInput").focus();
    }
  });

  document.getElementById("btnLogoutAdmin").addEventListener("click", exitAdminMode);

  document.getElementById("formAdminLogin").addEventListener("submit", async function (e) {
    e.preventDefault();
    const pin = document.getElementById("adminPinInput").value.trim();
    const submitBtn = document.getElementById("btnSubmitLogin");

    submitBtn.disabled = true;
    submitBtn.textContent = "Memverifikasi...";

    try {
      const res = await sendActionToGAS({ action: "verifyPin", pin: pin });
      if (res && res.status === "success") {
        AppState.isAdmin = true;
        sessionStorage.setItem("satgas_is_admin", "true");
        sessionStorage.setItem("satgas_session_pin", pin);
        closeModal("modalAdminLogin");
        updateAdminUI();
        renderTable();
        showToast("Akses Petugas Berhasil Diaktifkan!", "success");
      } else {
        showToast(res.message || "PIN Petugas salah!", "danger");
      }
    } catch (err) {
      showToast("Gagal memverifikasi ke server!", "danger");
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Buka Akses";
    }
  });

  document.getElementById("btnViewLogs").addEventListener("click", function () {
    renderLogTable();
    openModal("modalLogs");
  });

  document.getElementById("btnTambahBarang").addEventListener("click", function () {
    if (!AppState.isAdmin) {
      openModal("modalAdminLogin");
      return;
    }
    document.getElementById("formTambah").reset();
    openModal("modalTambah");
  });

  document.getElementById("formTambah").addEventListener("submit", handleTambahBarangSubmit);
  document.getElementById("formTransaksi").addEventListener("submit", handleTransaksiSubmit);
  document.getElementById("formEdit").addEventListener("submit", handleEditSubmit);

  document.querySelectorAll("[data-close]").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      closeModal(btn.getAttribute("data-close"));
    });
  });

  document.querySelectorAll(".modal-backdrop").forEach(function (backdrop) {
    backdrop.addEventListener("click", function (e) {
      if (e.target === backdrop) closeModal(backdrop.id);
    });
  });
}

function updateAdminUI() {
  const adminBanner = document.getElementById("adminBanner");
  const btnTambah = document.getElementById("btnTambahBarang");
  const thAction = document.getElementById("thAction");
  const btnAdminToggle = document.getElementById("btnAdminToggle");

  if (AppState.isAdmin) {
    document.body.classList.add("admin-active"); // CSS marker untuk mode mobile
    adminBanner.classList.add("active");
    btnTambah.style.display = "inline-flex";
    if (thAction) thAction.style.display = "table-cell";
    btnAdminToggle.textContent = "🚪 Keluar";
    btnAdminToggle.classList.replace("btn-primary", "btn-secondary");
  } else {
    document.body.classList.remove("admin-active");
    adminBanner.classList.remove("active");
    btnTambah.style.display = "none";
    if (thAction) thAction.style.display = "none";
    btnAdminToggle.textContent = "🔒 Mode Petugas";
    btnAdminToggle.classList.replace("btn-secondary", "btn-primary");
  }
}

function exitAdminMode() {
  AppState.isAdmin = false;
  sessionStorage.removeItem("satgas_is_admin");
  sessionStorage.removeItem("satgas_session_pin");
  updateAdminUI();
  renderTable();
  showToast("Mode Petugas dinonaktifkan", "warning");
}

async function fetchFromGAS() {
  if (!AppState.gasUrl || AppState.gasUrl.includes("YOUR_SCRIPT_ID_HERE")) return;
  setLoading(true);
  updateConnectionStatus(false, "Menghubungkan...");
  
  const noCacheUrl = AppState.gasUrl + "?action=read&t=" + new Date().getTime();
  
  try {
    const response = await fetch(noCacheUrl);
    if (!response.ok) throw new Error("Gagal mengambil data");
    const result = await response.json();
    if (result.status === "success" && Array.isArray(result.data)) {
      AppState.items = result.data;
      if (result.recentLogs && Array.isArray(result.recentLogs)) {
        AppState.logs = result.recentLogs;
      }
      AppState.isLive = true;
      saveLocalItems();
      updateConnectionStatus(true, "db_on");
    } else {
      throw new Error(result.message || "Respon backend tidak valid");
    }
  } catch (err) {
    console.warn("GAS offline fallback:", err);
    updateConnectionStatus(false, "Offline / Demo Data");
    showToast("Koneksi Sheets: " + err.message, "danger");
  } finally {
    setLoading(false);
    populateSatuanFilter();
    renderDashboard();
  }
}

async function sendActionToGAS(payload) {
  if (!AppState.gasUrl || AppState.gasUrl.includes("YOUR_SCRIPT_ID_HERE")) {
    return { status: "offline", message: "Mode lokal aktif" };
  }
  
  try {
    const targetUrl = AppState.gasUrl + "?action=" + encodeURIComponent(payload.action);
    
    const res = await fetch(targetUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload)
    });
    
    const textRes = await res.text();
    try {
      return JSON.parse(textRes);
    } catch(e) {
      console.warn("GAS tidak mengembalikan JSON valid:", textRes);
      return { status: "error", message: "Server mengembalikan format tidak valid." };
    }
    
  } catch (err) {
    console.warn("Fetch POST gagal, mencoba URL params fallback...", err);
    try {
      const params = new URLSearchParams(payload).toString();
      const resFallback = await fetch(AppState.gasUrl + "?" + params);
      return await resFallback.json();
    } catch (fallbackErr) {
      return { status: "error", message: "Koneksi ke server gagal: " + fallbackErr.message };
    }
  }
}

function syncToGASBackground(payload) {
  if (!AppState.gasUrl || AppState.gasUrl.includes("YOUR_SCRIPT_ID_HERE")) return;
  
  sendActionToGAS(payload).then(res => {
    if (res && res.status === "error") {
      showToast("Peringatan Sinkronisasi: " + res.message, "danger");
    }
  }).catch(err => {
    console.warn("Background sync tertunda:", err);
  });
}

function renderDashboard() {
  renderKPI();
  renderTable();
}

function renderKPI() {
  const items = AppState.items;
  let totalMasuk = 0, totalKeluar = 0, totalSisa = 0;
  let habisCount = 0, menipisCount = 0;

  items.forEach(function (it) {
    const sisa = it.masuk - it.keluar;
    totalMasuk += it.masuk;
    totalKeluar += it.keluar;
    totalSisa += sisa;
    if (sisa <= 0) habisCount++;
    else if (sisa <= 5) menipisCount++;
  });

  document.getElementById("statTotalItems").textContent = items.length;
  document.getElementById("statTotalMasuk").textContent = totalMasuk.toLocaleString("id-ID");
  document.getElementById("statTotalKeluar").textContent = totalKeluar.toLocaleString("id-ID");
  document.getElementById("statTotalSisa").textContent = totalSisa.toLocaleString("id-ID");
  document.getElementById("statStokPerhatian").textContent = habisCount + menipisCount;
  document.getElementById("statStokPerhatianSub").textContent = habisCount + " Habis, " + menipisCount + " Menipis";
  document.getElementById("lblTotalCount").textContent = items.length;
  document.getElementById("lblLastSync").textContent = new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }) + " WITA";
}

function renderTable() {
  const tbody = document.getElementById("tableBody");
  const emptyState = document.getElementById("emptyState");
  tbody.innerHTML = "";

  let filtered = AppState.items.filter(function (it) {
    const sisa = it.masuk - it.keluar;
    if (AppState.filter.search) {
      const matchName = it.nama.toLowerCase().includes(AppState.filter.search);
      const matchSatuan = it.satuan.toLowerCase().includes(AppState.filter.search);
      if (!matchName && !matchSatuan) return false;
    }
    if (AppState.filter.status === "AVAILABLE" && sisa <= 5) return false;
    if (AppState.filter.status === "LOW" && (sisa <= 0 || sisa > 5)) return false;
    if (AppState.filter.status === "EMPTY" && sisa > 0) return false;
    if (AppState.filter.satuan !== "ALL" && it.satuan.toLowerCase() !== AppState.filter.satuan.toLowerCase()) return false;
    return true;
  });

  filtered.sort(function (a, b) {
    const sisaA = a.masuk - a.keluar;
    const sisaB = b.masuk - b.keluar;
    if (AppState.filter.sort === "id_asc") return a.id - b.id;
    if (AppState.filter.sort === "name_asc") return a.nama.localeCompare(b.nama);
    if (AppState.filter.sort === "stock_desc") return sisaB - sisaA;
    if (AppState.filter.sort === "stock_asc") return sisaA - sisaB;
    if (AppState.filter.sort === "out_desc") return b.keluar - a.keluar;
    return 0;
  });

  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / AppState.pagination.limit) || 1;
  
  if (AppState.pagination.page > totalPages) {
    AppState.pagination.page = totalPages;
  }

  const startIndex = (AppState.pagination.page - 1) * AppState.pagination.limit;
  const endIndex = startIndex + AppState.pagination.limit;
  const paginatedItems = filtered.slice(startIndex, endIndex);

  document.getElementById("lblShowingCount").textContent = paginatedItems.length;
  document.getElementById("pageInfo").textContent = `Hal ${AppState.pagination.page} dari ${totalPages}`;
  document.getElementById("btnPrevPage").disabled = AppState.pagination.page === 1;
  document.getElementById("btnNextPage").disabled = AppState.pagination.page === totalPages;

  emptyState.style.display = totalItems === 0 ? "block" : "none";

  paginatedItems.forEach(function (item) {
    const tr = document.createElement("tr");
    const sisa = item.masuk - item.keluar;
    if (sisa <= 0) tr.classList.add("highlight-empty");

    let statusBadge = sisa <= 0 ? '<span class="badge badge-danger">Habis</span>' :
                      sisa <= 5 ? '<span class="badge badge-warning">Menipis</span>' :
                                  '<span class="badge badge-success">Tersedia</span>';

    let desktopActionCell = "";
    let mobileActionBlock = "";
    let nameCellAttrs = "";

    if (AppState.isAdmin) {
      // Tombol aksi ditambahkan event.stopPropagation() agar klik tidak memicu collapse baris di mobile
      const actionButtons = `
        <button class="btn-icon-action in-btn" title="Masuk (+)" onclick="event.stopPropagation(); openTransaksiModal(${item.id}, 'MASUK')">📥</button>
        <button class="btn-icon-action out-btn" title="Keluar (-)" onclick="event.stopPropagation(); openTransaksiModal(${item.id}, 'KELUAR')">📤</button>
        <button class="btn-icon-action edit-btn" title="Edit" onclick="event.stopPropagation(); openEditModal(${item.id})">✏️</button>
        <button class="btn-icon-action del-btn" title="Hapus" onclick="event.stopPropagation(); hapusBarang(${item.id})">🗑️</button>
      `;

      desktopActionCell = `
        <td class="col-action" style="text-align:center;">
          <div class="action-buttons-group">${actionButtons}</div>
        </td>
      `;

      mobileActionBlock = `
        <div class="mobile-action-bar">
          <div class="action-buttons-group" style="justify-content: flex-start; gap: 0.4rem; width: 100%;">
            ${actionButtons}
          </div>
        </div>
      `;

      nameCellAttrs = `onclick="this.parentElement.classList.toggle('row-expanded')"`;
    }

    tr.innerHTML = `
      <td class="col-num">${item.id}</td>
      <td class="col-name" ${nameCellAttrs}>
        <div style="display:flex; align-items:center; justify-content:space-between; width:100%;">
          <span>${escapeHtml(item.nama)}</span>
          ${AppState.isAdmin ? `<span class="mobile-tap-hint"></span>` : ""}
        </div>
        ${mobileActionBlock}
      </td>
      <td class="col-qty" style="text-align:right;">${item.masuk.toLocaleString("id-ID")}</td>
      <td class="col-qty" style="text-align:right; color:var(--primary);">${item.keluar.toLocaleString("id-ID")}</td>
      <td class="col-qty" style="text-align:right; font-weight:800;">${sisa.toLocaleString("id-ID")}</td>
      <td><span class="unit-tag">${escapeHtml(item.satuan)}</span></td>
      <td>${statusBadge}</td>
      ${desktopActionCell}
    `;
    tbody.appendChild(tr);
  });
}

// TRANSAKSI MUTASI (MASUK/KELUAR)
window.openTransaksiModal = function (itemId, jenis) {
  const item = AppState.items.find((i) => i.id === itemId);
  if (!item) return;
  const sisa = item.masuk - item.keluar;
  document.getElementById("transaksiItemId").value = item.id;
  document.getElementById("transaksiNama").value = item.nama;
  document.getElementById("transaksiSisaBadge").textContent = `${sisa} ${item.satuan}`;
  document.getElementById("transaksiJumlah").value = "";
  document.getElementById("transaksiKeterangan").value = "";

  document.getElementById(jenis === "KELUAR" ? "typeKeluar" : "typeMasuk").checked = true;
  openModal("modalTransaksi");
  setTimeout(() => document.getElementById("transaksiJumlah").focus(), 100);
};

function handleTransaksiSubmit(e) {
  e.preventDefault();
  const id = parseInt(document.getElementById("transaksiItemId").value, 10);
  const jenis = document.querySelector('input[name="transaksiJenis"]:checked').value;
  const jumlah = parseInt(document.getElementById("transaksiJumlah").value, 10);
  const keterangan = document.getElementById("transaksiKeterangan").value.trim() || "-";
  const petugas = document.getElementById("transaksiPetugas").value.trim() || "Petugas";
  const item = AppState.items.find((i) => i.id === id);

  if (!item || isNaN(jumlah) || jumlah <= 0) {
    showToast("Jumlah mutasi tidak valid!", "danger");
    return;
  }

  const sisa = item.masuk - item.keluar;
  if (jenis === "KELUAR" && jumlah > sisa) {
    showToast(`Stok tidak cukup! Sisa: ${sisa} ${item.satuan}`, "danger");
    return;
  }

  // 1. Pembaruan Lokal Optimis (Optimistic Update)
  if (jenis === "MASUK") item.masuk += jumlah;
  else item.keluar += jumlah;
  item.sisa = item.masuk - item.keluar;

  const now = new Date().toLocaleString("id-ID");
  AppState.logs.unshift({
    timestamp: now, idBarang: item.id, namaBarang: item.nama,
    jenis: jenis, jumlah: jumlah, satuan: item.satuan, keterangan: keterangan, petugas: petugas
  });
  
  localStorage.setItem("satgas_local_logs", JSON.stringify(AppState.logs.slice(0, 50)));
  saveLocalItems();
  renderDashboard();
  closeModal("modalTransaksi");
  showToast(`Mutasi ${jenis} berhasil dicatat!`, "success");

  // 2. Kirim ke Server di Latar Belakang
  const payload = {
    action: "transaksi", id: id, jenis: jenis, jumlah: jumlah,
    keterangan: keterangan, petugas: petugas, pin: sessionStorage.getItem("satgas_session_pin") || ""
  };
  syncToGASBackground(payload);
}

// TAMBAH BARANG BARU
function handleTambahBarangSubmit(e) {
  e.preventDefault();
  const nama = document.getElementById("tambahNama").value.trim();
  const satuan = document.getElementById("tambahSatuan").value.trim();
  const stokAwal = parseInt(document.getElementById("tambahStokAwal").value, 10) || 0;
  const keterangan = document.getElementById("tambahKeterangan").value.trim() || "Barang baru";

  if (!nama || !satuan) {
    showToast("Nama dan satuan wajib diisi!", "danger");
    return;
  }

  // 1. Pembaruan Lokal Optimis
  const maxId = AppState.items.reduce((max, it) => Math.max(max, it.id || 0), 0);
  const newItem = {
    id: maxId + 1, nama: nama, masuk: stokAwal, keluar: 0, satuan: satuan,
    sisa: stokAwal, status: stokAwal <= 0 ? "Habis" : (stokAwal <= 5 ? "Menipis" : "Tersedia")
  };

  AppState.items.push(newItem);
  saveLocalItems();
  populateSatuanFilter();
  renderDashboard();
  closeModal("modalTambah");
  showToast(`Barang "${nama}" berhasil ditambah!`, "success");

  // 2. Kirim ke Server di Latar Belakang
  const payload = {
    action: "tambah", nama: nama, satuan: satuan, stokAwal: stokAwal,
    keterangan: keterangan, petugas: "Petugas Posko", pin: sessionStorage.getItem("satgas_session_pin") || ""
  };
  syncToGASBackground(payload);
}

// EDIT / KOREKSI BARANG
window.openEditModal = function (itemId) {
  const item = AppState.items.find((i) => i.id === itemId);
  if (!item) return;
  document.getElementById("editId").value = item.id;
  document.getElementById("editNama").value = item.nama;
  document.getElementById("editSatuan").value = item.satuan;
  document.getElementById("editMasuk").value = item.masuk;
  document.getElementById("editKeluar").value = item.keluar;
  document.getElementById("editKeterangan").value = "";
  openModal("modalEdit");
};

function handleEditSubmit(e) {
  e.preventDefault();
  const id = parseInt(document.getElementById("editId").value, 10);
  const nama = document.getElementById("editNama").value.trim();
  const satuan = document.getElementById("editSatuan").value.trim();
  const masuk = parseInt(document.getElementById("editMasuk").value, 10);
  const keluar = parseInt(document.getElementById("editKeluar").value, 10);
  const keterangan = document.getElementById("editKeterangan").value.trim();

  if (isNaN(masuk) || isNaN(keluar) || masuk < 0 || keluar < 0) {
    showToast("Nilai masuk dan keluar harus angka valid!", "danger");
    return;
  }

  const item = AppState.items.find((i) => i.id === id);
  if (!item) return;

  // 1. Pembaruan Lokal Optimis
  item.nama = nama;
  item.satuan = satuan;
  item.masuk = masuk;
  item.keluar = keluar;
  item.sisa = masuk - keluar;

  saveLocalItems();
  populateSatuanFilter();
  renderDashboard();
  closeModal("modalEdit");
  showToast(`Perubahan data "${nama}" disimpan!`, "success");

  // 2. Kirim ke Server di Latar Belakang
  const payload = {
    action: "edit", id: id, nama: nama, satuan: satuan, masuk: masuk, keluar: keluar,
    keterangan: keterangan, pin: sessionStorage.getItem("satgas_session_pin") || ""
  };
  syncToGASBackground(payload);
}

// HAPUS BARANG
window.hapusBarang = function (itemId) {
  const item = AppState.items.find((i) => i.id === itemId);
  if (!item) return;
  if (!confirm(`Hapus barang "${item.nama}" dari inventaris?`)) return;

  // 1. Pembaruan Lokal Optimis
  AppState.items = AppState.items.filter((i) => i.id !== itemId);
  saveLocalItems();
  populateSatuanFilter();
  renderDashboard();
  showToast(`Barang "${item.nama}" telah dihapus!`, "warning");

  // 2. Kirim ke Server di Latar Belakang
  const payload = {
    action: "hapus", id: itemId, pin: sessionStorage.getItem("satgas_session_pin") || ""
  };
  syncToGASBackground(payload);
};

// Fungsi Utilitas dan Rendering
function renderLogTable() {
  const tbody = document.getElementById("logTableBody");
  tbody.innerHTML = "";
  if (!AppState.logs || AppState.logs.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" style="text-align:center; padding:1.5rem; color:var(--text-muted);">Belum ada riwayat tercatat.</td></tr>';
    return;
  }
  AppState.logs.forEach(function (log) {
    const tr = document.createElement("tr");
    const jenisClass = (log.jenis || "").includes("MASUK") ? "badge-success" : "badge-danger";
    tr.innerHTML = `
      <td>${escapeHtml(log.timestamp || "-")}</td>
      <td><strong>${escapeHtml(log.namaBarang || "-")}</strong></td>
      <td><span class="badge ${jenisClass}">${escapeHtml(log.jenis || "-")}</span></td>
      <td>${escapeHtml(String(log.jumlah || "-"))} ${escapeHtml(log.satuan || "")}</td>
      <td>${escapeHtml(log.keterangan || "-")}</td>
      <td>${escapeHtml(log.petugas || "-")}</td>
    `;
    tbody.appendChild(tr);
  });
}

function populateSatuanFilter() {
  const select = document.getElementById("filterSatuan");
  const currentVal = select.value;
  const satuanSet = new Set();
  AppState.items.forEach((it) => { if (it.satuan) satuanSet.add(it.satuan.trim()); });
  select.innerHTML = '<option value="ALL">Semua Satuan</option>';
  Array.from(satuanSet).sort().forEach((sat) => {
    const opt = document.createElement("option");
    opt.value = sat;
    opt.textContent = sat;
    if (sat === currentVal) opt.selected = true;
    select.appendChild(opt);
  });
}

function exportToCSV() {
  if (AppState.items.length === 0) return showToast("Tidak ada data untuk diekspor!", "warning");
  const headers = ["No", "Nama Barang", "Masuk", "Keluar", "Persediaan di Gudang", "Satuan", "Status"];
  const rows = AppState.items.map((it) => [
    it.id, `"${it.nama.replace(/"/g, '""')}"`, it.masuk, it.keluar, it.masuk - it.keluar,
    `"${it.satuan}"`, it.masuk - it.keluar <= 0 ? "Habis" : (it.masuk - it.keluar <= 5 ? "Menipis" : "Tersedia")
  ]);
  const csvContent = "\uFEFF" + [headers.join(","), ...rows.map((r) => r.join(","))].join("\r\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `Logistik_Satgas_Karhutla_Taliabu_${new Date().toISOString().split("T")[0]}.csv`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  showToast("File CSV logistik berhasil diunduh!", "success");
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add("open");
    document.body.style.overflow = "hidden"; 
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "auto";
  }
}

function showToast(message, type = "success") {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${escapeHtml(message)}</span>
    <button style="background:none; border:none; cursor:pointer; font-size:1.1rem; color:inherit;" onclick="this.parentElement.remove()">&times;</button>`;
  container.appendChild(toast);
  setTimeout(() => { if (toast.parentElement) toast.remove(); }, 4000);
}

function updateConnectionStatus(isLive, label) {
  const statusEl = document.getElementById("connectionStatus");
  statusEl.className = isLive ? "status-pill status-live" : "status-pill status-demo";
  document.getElementById("connectionStatusText").textContent = label;
}

function setLoading(isLoading) {
  AppState.isLoading = isLoading;
  const btn = document.getElementById("btnRefresh");
  if (isLoading) {
    btn.textContent = "⏳ Memuat..."; btn.disabled = true;
  } else {
    btn.textContent = "🔄 Segarkan"; btn.disabled = false;
  }
}

function saveLocalItems() {
  localStorage.setItem("satgas_inventory_data", JSON.stringify(AppState.items));
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
