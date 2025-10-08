new Vue({
    el: '#app',
    data: {
        title: '生日快乐！',
        birthdayPerson: '亲爱的朋友',
        message: '在这个特别的日子里，愿所有的快乐、所有的幸福、所有的温馨、所有的好运都围绕在您身边！',
        buttonText: '点击送上祝福',
        showWish: false,
        birthdayWish: '🎉 祝您新的一岁里健康、快乐、成功！愿所有的梦想都能实现！ 🎉',
        currentYear: new Date().getFullYear(),
        balloons: [
            { color: '#ff6b6b', delay: '0s' },
            { color: '#48dbfb', delay: '0.5s' },
            { color: '#1dd1a1', delay: '1s' },
            { color: '#feca57', delay: '1.5s' }
        ]
    },
    methods: {
        showBirthdayWish() {
            this.showWish = true;
            this.createConfetti();
            
            // 改变按钮文本
            this.buttonText = '祝福已送达！';
            
            // 3秒后恢复按钮文本
            setTimeout(() => {
                this.buttonText = '再次送上祝福';
            }, 3000);
        },
        
        createConfetti() {
            const colors = ['#ffcef8ff', '#ffffa8ff', '#c9fff1ff', '#feca57', '#fcddf8ff'];
            const container = document.querySelector('.container');
            
            for (let i = 0; i < 50; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.animation = `confettiFall ${Math.random() * 3 + 2}s linear forwards`;
                container.appendChild(confetti);
                
                // 移除纸屑元素
                setTimeout(() => {
                    if (confetti.parentNode) {
                        confetti.parentNode.removeChild(confetti);
                    }
                }, 5000);
            }
        }
    },
    
    mounted() {
        console.log('生日祝福页面加载完成！');
    }
});