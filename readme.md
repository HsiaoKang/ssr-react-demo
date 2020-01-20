1. 完成服务端渲染逻辑后，有正常的数据和页面返回，但是客户端会闪烁一次，因为server端返回了填充了数据的页面，到了客户端，再执行js做二次渲染，这过程中，数据默认是没有的，于是回改变dom，重新请求到服务器数据后，再render一次，就会闪烁
2. 添加serialize-javascript 做服务端渲染数据序列化，返回到客户端

3. server 端 使用 代理将客户端发送的请求转发到 后台服务器

4. 在redux中通过thunk的widthExtraArgment来在不同环境中使用不同的axios 实例。

5. 借助context 传递 notFound 实现 404 页面处理（http状态码），路由处理404页面

6. isomorphic-style-loader 处理css

7. 提高转化率用，title 标签 搜索结果列表的 项目标题（可以），meta Description 搜索结果描述

8. 文字（内容原创）、多媒体（内容相关度）、链接（目标内容和主页的内容相关度，其他网站内的本网站链接数量）


环境变量默认通过 process.env.NODE_ENV 来获取，如果有 webpack --env.NODE_ENV 将会优先采用webpack的传入

TODO: cookie 转发
TODO: 如果请求的地址没有被代理到，会发生递归请求的问题。

可以通过preRender 来做seo