## 安装

由于需要获取服务器端数据，所以在此之前，先将 [NeteaseCloudMusicApi](https://github.com/hwaphon/NeteaseCloudMusicApi) 拷贝到本地并且运行(4000端口)起来。

建议在 `Chrome` 浏览器中打开，当然在 `Opera`, `Edge`, `Firefox` 中也是可以正常运行的，只是有些效果看上去并不是那么美好，你懂得。

在之前的步骤完成之后，运行以下命令即可预览本项目

    git clone https://github.com/hwaphon/CloudMusic.git
    cd CloudMusic && yarn
    yarn dev
    
## 效果图

### 登录界面

![image](http://ozg83iln2.bkt.clouddn.com/preview1.jpg)

### 个人面板

![image](http://ozg83iln2.bkt.clouddn.com/preview2.jpg)

### 主题管理

![image](http://ozg83iln2.bkt.clouddn.com/preview3.jpg)

### 每日推荐歌曲

![image](http://ozg83iln2.bkt.clouddn.com/preview4.jpg)

## 开发记录

### 2017.11.20

1. 完成每日推荐歌曲页面
2. 初步实现播放组件
3. 发现将获取到的音乐 url 放入 Audio 中出现 403 错误，头皮发麻。

### 2017.11.19

1. 完善每日推荐歌单
2. 实现换肤功能
3. 替换原本采用的命名路由机制

### 2017.11.18

1. 将网络请求模块从组件中提取出来
2. 使用 `vuex-persistedstate` 实现数据的持久化，减少重复的 `http` 请求
3. 实现从服务器获取每日推荐歌单信息（发现接口异常，只能获取 6 条信息，而实际上每日推荐歌单存在9条信息）
4. 初步实现个人面板，不过逻辑尚未实现
5. 实现退出登录


### 2017.11.17

1. 开始从服务器端获取数据，比如轮播图数据
2. 登录逻辑实现完成，已成功登录本人账号，测试无误，不过由于登录组件实现的只是个雏形，只有当正常获取数据的情况下才可以完成登录，如果出现错误不会提示错误，比如密码输入错误。
3. 着手实现个人信息面板

### 2017.11.16

1. 基本界面的搭建，实现左侧菜单栏以及顶部导航栏
2. 完成轮播图组件
3. 完成登录组件


