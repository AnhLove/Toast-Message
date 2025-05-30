//Toast function
function toast({
    title = '',
    message = '',
    type = 'info',
    duration = 3000,
}) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');
        // Auto remove toast
        const autoRemoveId = setTimeout(function () {
            main.removeChild(toast);
        }, duration + 1000);

        // Remove toast when click
        toast.onclick = function (e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        };

        const icons = {
            success: 'fa-solid fa-circle-check',
            error: 'fa-solid fa-bug',
            info: 'fa-solid fa-circle-info',
            warning: 'fa-solid fa-circle-exclamation',
        };
        const icon = icons[type];
        const deplay = (duration / 1000).toFixed(2);

        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideInLeft ease 0.3s, fadeOut linear 1s ${deplay}s forwards`;
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast_body">
                <h3 class="toast_title">${title}</h3>
                <p class="toast_msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        </div>
        `;
        main.appendChild(toast);
    }
}

function showSuccessToast() {
    toast({
        title: 'Thành công!',
        message: 'Bạn đã đăng ký thành công. Chúc mừng bạn',
        type: 'success',
        duration: 5000,
    });
}
function showErrorToast() {
    toast({
        title: 'Thất bại!',
        message:
            'Có lỗi xảy ra. Vui lòng kiểm tra lại mạng và thử lại sau.',
        type: 'error',
        duration: 5000,
    });
}
function showWarningToast() {
    toast({
        title: 'Cảnh báo!',
        message:
            'Một số chức năng có thể không hoạt động do kết nối mạng yếu.',
        type: 'warning',
        duration: 5000,
    });
}
function showInfoToast() {
    toast({
        title: 'Thông tin!',
        message:
            'Bạn đang sử dụng phiên bản mới nhất của ứng dụng.',
        type: 'info',
        duration: 5000,
    });
}
