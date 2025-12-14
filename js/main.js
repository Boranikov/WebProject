'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        /*------------------
            Portfolio filter
        --------------------*/
        $('.portfolio__filter li').on('click', function () {
            $('.portfolio__filter li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.portfolio__gallery').length > 0) {
            var containerEl = document.querySelector('.portfolio__gallery');
            var mixer = mixitup(containerEl);
        }
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Masonary
    $('.work__gallery').masonry({
        itemSelector: '.work__item',
        columnWidth: '.grid-sizer',
        gutter: 10
    });

    /*------------------
        Navigation
    --------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
        Hero Slider
    --------------------*/
    $('.hero__slider').owlCarousel({
        loop: true,
        dots: true,
        mouseDrag: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        margin: 0,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
    });

    var dot = $('.hero__slider .owl-dot');
    dot.each(function () {
        var index = $(this).index() + 1;
        if (index < 10) {
            $(this).html('0').append(index);
        } else {
            $(this).html(index);
        }
    });

    /*------------------
        Testimonial Slider
    --------------------*/
    $(".testimonial__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        dotsEach: 2,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: { items: 3 },
            768: { items: 2 },
            320: { items: 1 }
        }
    });

    /*------------------
        Latest Slider
    --------------------*/
    $(".latest__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        dotsEach: 2,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: { items: 3 },
            768: { items: 2 },
            320: { items: 1 }
        }
    });

    /*------------------
        Logo Slider
    --------------------*/
    $(".logo__carousel").owlCarousel({
        loop: true,
        margin: 100,
        items: 6,
        dots: false,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            992: { items: 5 },
            768: { items: 4 },
            480: { items: 3 },
            320: { items: 2 }
        }
    });

    /*------------------
        Video Popup
    --------------------*/
    $('.video-popup').magnificPopup({ type: 'iframe' });

    /*------------------
        Counter
    --------------------*/
    $('.counter_num').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
/*---------------------
 blog modal 
 ----------------------*/
 $(document).ready(function(){
        
        $(document).on('click', '.open-modal', function(e){
            console.log("Tıklandı.");
            e.preventDefault(); 
            $(".custom-modal").css("display", "flex"); // Modalı aç
        });

        $(document).on('click', '.close-btn, .modal-action-btn', function(){
            $(".custom-modal").css("display", "none"); // Modalı gizle
        });

        $(".custom-modal").click(function(e){
            if($(e.target).hasClass("custom-modal")){
                $(this).css("display", "none");
            }
        });
    });
/*---------------------
 servies modal 
 ----------------------*/
 $(document).ready(function(){
    
    // Modalı Açma
    $(document).on('click', '.open-modal', function(e){
        e.preventDefault(); 
        $(".services-modal").css("display", "flex");
    });

    // Modalı Kapatma (X butonu veya Tamam butonu)
    $(document).on('click', '.close-btn, .modal-action-btn', function(){
        $(".services-modal").css("display", "none");
    });

    // Modalın dışına tıklayınca kapatma
    $(".services-modal").click(function(e){
        if($(e.target).hasClass("services-modal")){
            $(this).css("display", "none");
        }
    });

    // --- OTOMATİK BÜYÜYEN KUTU KODU ---
    $('#otomatikKutu').on('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });
});
/*------------------------
ADMİN MODAL
--------------------------*/
$(document).ready(function(){
    
    // Modalı Açma
    $(document).on('click', '.open-modal', function(e){
        e.preventDefault(); 
        $(".modal").css("display", "flex");
    });

    // Modalı Kapatma (X butonu veya Tamam butonu)
    $(document).on('click', '.close-btn, .modal-action-btn', function(){
        $(".modal").css("display", "none");
    });

    // Modalın dışına tıklayınca kapatma
    $(".modal").click(function(e){
        if($(e.target).hasClass("modal")){
            $(this).css("display", "none");
        }
    });
});
/*------------------------
VİDEOS MODAL
--------------------------*/
    $(document).ready(function(){
    
    console.log("Admin Panel JS Aktif");

    // 1. Modalı Açma 
    $(document).on('click', '.open-video-modal', function(e){
        e.preventDefault();
        $("#newVideoModal").css("display", "flex");
    });

    // 2. Modalı Kapatma
    $(document).on('click', '.admin-close-btn', function(){
        $("#newVideoModal").css("display", "none");
    });

    $("#newVideoModal").click(function(e){
        if($(e.target).is("#newVideoModal")){
            $(this).css("display", "none");
        }
    });

    // 4. Video Ekleme
    // 4. VİDEO EKLEME (Kapak Resmi Modu)
    $("#addVideoForm").submit(function(e){
        e.preventDefault();
        
        var title = $("#vidTitle").val();
        var rawUrl = $("#vidUrl").val();
        var date = $("#vidDate").val() || new Date().toLocaleDateString();

        // 1. Video ID'sini Bul
        var videoId = "";
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = rawUrl.match(regExp);

        if (match && match[2].length == 11) {
            videoId = match[2];
        } else {
            alert("Lütfen geçerli bir YouTube linki giriniz!");
            return;
        }

        // 2. Kapak Resmi URL'si
        var thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

        // 3. Kart HTML'i (Resim + Play İkonu)
        var newCard = `
            <div class="video-card">
                <div class="video-thumbnail" data-video-id="${videoId}">
                    <img src="${thumbnailUrl}" alt="${title}">
                    <div class="play-icon">▶</div>
                </div>
                <div class="video-info">
                    <h4>${title}</h4>
                    <p>Yüklenme: ${date}</p>
                </div>
                <button class="delete-video-btn">&times;</button>
            </div>
        `;

        $("#myVideoContainer").prepend(newCard);
        $("#addVideoForm")[0].reset();
        $("#newVideoModal").css("display", "none");
    });

    // 5. RESME TIKLAYINCA VİDEOYU OYNAT (Lazy Load)
    $(document).on('click', '.video-thumbnail', function(){
        // Zaten iframe varsa tekrar yükleme
        if($(this).find('iframe').length > 0) return;

        var videoId = $(this).data('video-id');
        
        // iframe kodunu oluştur
        var iframeCode = `
            <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        `;
        
        // Resmi sil, iframe'i koy
        $(this).html(iframeCode);
    });

    // 5. Silme
    $(document).on('click', '.delete-video-btn', function(){
        if(confirm("Silmek istediğinize emin misiniz?")) {
            $(this).closest('.video-card').remove();
        }
    });

});
/* -------------STATİC KISMI-------------- */
$(document).ready(function(){

    // Sadece istatistik sayfasındaysak çalışsın (Hata vermemesi için kontrol)
    if($('#viewsChart').length) {

        // Genel Ayarlar (Yazı renklerini beyaz yapmak için)
        Chart.defaults.color = '#bbb'; 
        Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.1)';

        // 1. GRAFİK: AYLIK İZLENMELER
        const ctx1 = document.getElementById('viewsChart').getContext('2d');
        new Chart(ctx1, {
            type: 'bar', // Sütun Grafik
            data: {
                labels: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz'],
                datasets: [{
                    label: 'İzlenme Sayısı',
                    data: [1200, 1900, 3000, 5000, 2000, 3500],
                    backgroundColor: '#0078d7', // Mavi Sütunlar
                    borderRadius: 5, // Sütun kenarları yuvarlak olsun
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false } // Üstteki etiketi gizle
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { borderDash: [5, 5] } // Kesikli çizgi
                    }
                }
            }
        });

        // 2. GRAFİK: KULLANICI KAYITLARI
        const ctx2 = document.getElementById('usersChart').getContext('2d');
        new Chart(ctx2, {
            type: 'line', // Çizgi Grafik (Daha şık durur diye bunu seçtim, istersen 'bar' yap)
            data: {
                labels: ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'],
                datasets: [{
                    label: 'Yeni Üye',
                    data: [12, 19, 3, 5, 2, 30, 45],
                    borderColor: '#e74c3c', // Kırmızı Çizgi
                    backgroundColor: 'rgba(231, 76, 60, 0.2)', // Altındaki hafif renk
                    tension: 0.4, // Çizgiyi yumuşat (kıvrımlı yap)
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });
    }
});
/* ---------ADMİN PANELİ AÇILIŞ ---------*/
    $(document).ready(function(){

    // 1. Modalı Aç (Dropdown içindeki linke tıklayınca)
    $(".open-login-modal").click(function(e){
        console.log("TIKLANDI")//TEST
        e.preventDefault();
        $("#loginModal").css("display", "flex");
    });

    // 2. Modalı Kapat (X butonu)
    $(".close-login").click(function(){
        $("#loginModal").css("display", "none");
    });

    // 3. Dışarı tıklayınca kapat
    $("#loginModal").click(function(e){
        if($(e.target).is("#loginModal")){
            $(this).css("display", "none");
        }
    });

    // 4. GİRİŞ ANİMASYONU VE YÖNLENDİRME
    $("#fakeLoginForm").submit(function(e){
        e.preventDefault();

        var btn = $("#loginBtn");
        var originalText = btn.text();

        // Butonu "Yükleniyor..." moduna al
        btn.html('<i class="fas fa-circle-notch fa-spin"></i> Kontrol Ediliyor...');
        btn.css("opacity", "0.8");
        btn.prop("disabled", true);

        // 1.5 saniye sonra Admin Paneline git
        setTimeout(function(){
            // Buraya admin sayfanın yolunu yaz:
            window.location.href = "admin.html"; // Veya "pages/admin.html"
        }, 1500);
    });
});
const sidebar = document.querySelector(".sidebar");
    const menuBtn = document.querySelector("header h2 label"); 
    
    if(menuBtn) {
        menuBtn.addEventListener("click", () => {
            // Sidebar'a 'active' class'ı ekle/çıkar
            sidebar.classList.toggle("active");
        });
    }
$(document).ready(function(){
    // 1. MODALI AÇMA
    $(document).on('click', '.blog-add-btn, .open-blog-modal', function(e){
        e.preventDefault(); 
        $(".blog-modal").css("display", "flex"); 
    });

    // 2. MODALI KAPATMA (X butonu)
    $(document).on('click', '.blog-close-btn', function(){
        $(".blog-modal").css("display", "none");
    });

    // 3. MODALIN DIŞINA TIKLAYINCA KAPATMA
    $(".blog-modal").click(function(e){
        // Tıklanan yer tam olarak siyah arka plan mı kontrol et
        if($(e.target).hasClass("blog-modal")){
            $(this).css("display", "none");
        }
    });

});
})(jQuery);
