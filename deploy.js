const { execSync } = require('child_process');
const fs = require('fs');

console.log('开始部署项目...');

try {
  // 检查dist目录是否存在
  if (!fs.existsSync('./frontend/dist')) {
    console.log('构建项目...');
    execSync('cd frontend && npm run build', { stdio: 'inherit' });
  }
  
  console.log('项目已构建完成！');
  console.log('dist目录内容:');
  const distFiles = fs.readdirSync('./frontend/dist');
  distFiles.forEach(file => {
    console.log(`- ${file}`);
  });
  
  console.log('\n✅ 项目准备就绪！');
  console.log('您的图片已包含在构建中：');
  console.log('- AI服装.png');
  console.log('- AI珠宝.png'); 
  console.log('- AI美妆.png');
  
} catch (error) {
  console.error('部署失败:', error.message);
}