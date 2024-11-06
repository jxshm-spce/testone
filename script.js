// 等待页面加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 获取轮播图元素
    const heroSlides = document.querySelector('.carousel-slides');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const slides = document.querySelectorAll('.slide');
    
    // 初始化变量
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // 更新轮播图位置的函数
    function updateSlidePosition() {
        heroSlides.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    
    // 下一张图片
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlidePosition();
    }
    
    // 上一张图片
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
    }
    
    // 添加按钮点击事件
    if (prevButton) {
        prevButton.addEventListener('click', function() {
            prevSlide();
            console.log('上一张');  // 调试日志
        });
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', function() {
            nextSlide();
            console.log('下一张');  // 调试日志
        });
    }
    
    // 自动轮播
    let autoSlideInterval = setInterval(nextSlide, 5000);
    
    // 鼠标悬停时暂停自动轮播
    if (heroSlides) {
        heroSlides.addEventListener('mouseenter', function() {
            clearInterval(autoSlideInterval);
            console.log('暂停自动轮播');  // 调试日志
        });
        
        heroSlides.addEventListener('mouseleave', function() {
            autoSlideInterval = setInterval(nextSlide, 5000);
            console.log('恢复自动轮播');  // 调试日志
        });
    }
    
    // 图片模态框功能
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.getElementsByClassName('close')[0];
    
    // 为服务海报添加点击事件
    document.querySelectorAll('.poster img').forEach(img => {
        img.style.cursor = 'pointer';
        img.onclick = function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
        }
    });
    
    // 关闭模态框
    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = 'none';
        }
    }
    
    // 点击模态框背景关闭
    if (modal) {
        modal.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        }
    }
    
    // ESC键关闭模态框
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
    
    console.log('脚本加载完成');  // 调试日志
});