// 搜索按钮点击事件处理函数
function handleSearch() {
    // 获取用户输入的值
    const searchInput = document.getElementById('searchInput').value.trim();
  
    // 检查用户输入是否为“周杰伦”
    if (searchInput === '周杰伦') {
      // 如果是“周杰伦”，跳转到 zjl.html 文件
      window.location.href = 'zjl.html';
    } else {
      // 如果不是“周杰伦”，可以在这里添加其他逻辑，例如显示提示信息
      alert('暂不支持该歌手的查询');
    }
  }
  
  // 确保页面加载完成后绑定点击事件
  document.addEventListener('DOMContentLoaded', function() {
    // 获取搜索按钮并绑定点击事件
    const searchButton = document.querySelector('.search-button');
    if (searchButton) {
      searchButton.addEventListener('click', handleSearch);
    }
  });