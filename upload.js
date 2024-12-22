
const path = require('path')
const AdmZip = require('adm-zip');
const { exec } = require('child_process');

function compressFolderToZip(zipFileName, folderPath) {
  const zip = new AdmZip();
  
  // 添加整个文件夹到压缩包
  zip.addLocalFolder(folderPath, ''); // 第二个参数是压缩包内相对路径，留空则直接将文件夹内容添加到根目录
  
  // 写入压缩文件
  zip.writeZip(zipFileName);
  
  console.log(`文件夹 ${folderPath} 已被压缩至 ${zipFileName}`);
}

// 使用示例
compressFolderToZip('dist.zip', path.join(__dirname, './docs/.vuepress/dist'))



function unZip(){
  const command = `ssh root@47.104.5.199 "unzip -o /www/mengHuang-docs/dist.zip -d /www/mengHuang-docs/dist"`
  
  exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error(`文件解压失败: ${error}`);
        return;
    }
    console.log(`文件解压成功: ${stdout}`);
  });
}


function removeLocalFile(){
  const filePath = path.join(__dirname, 'dist.zip')
  const command = `rm -rf ${filePath}`
  
  exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error(`文件删除失败: ${error}`);
        return;
    }

    console.log(`文件删除成功: ${stdout}`);
  });
}


function uploadFileWithSCP(localFilePath, remoteFilePath) {
  // 如果你没有使用密钥对认证，而是使用密码认证，命令应如下：
  const command = `scp -P 22 ${localFilePath} root@47.104.5.199:${remoteFilePath}`;
  exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error(`文件上传失败: ${error}`);
        return;
    }
    console.log(`文件上传成功: ${stdout}`);
    removeLocalFile()
    unZip()
  });
}

uploadFileWithSCP(
  path.join(__dirname, 'dist.zip'),
  '/www/mengHuang-docs',
)
