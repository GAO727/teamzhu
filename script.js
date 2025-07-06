// 点击朱刚强的图片和名字跳转到指定网址，其他地方无弹窗
document.querySelectorAll('.team-member').forEach(member => {
    const name = member.querySelector('h2')?.textContent;
    const img = member.querySelector('img');
    const h2 = member.querySelector('h2');
    if (name === '朱刚强') {
        if (img) {
            img.style.cursor = 'pointer';
            img.addEventListener('click', (e) => {
                e.stopPropagation();
                window.location.href = 'https://xueshu.baidu.com/scholarID/CN-BD73PV3J';
            });
        }
        if (h2) {
            h2.style.cursor = 'pointer';
            h2.addEventListener('click', (e) => {
                e.stopPropagation();
                window.location.href = 'https://xueshu.baidu.com/scholarID/CN-BD73PV3J';
            });
        }
    }
});