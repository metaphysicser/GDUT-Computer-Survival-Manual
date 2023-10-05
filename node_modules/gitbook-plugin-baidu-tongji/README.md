# 百度统计

代码copy自仓库：https://github.com/wisedu/gitbook-plugin-baidu-wis

主要调整了以下两点：

1. 百度统计的URL修改为https（目前是http，会导致307重定向）
2. 增加额外配置：url，可指定百度统计的url.

### Install Plugin

Install with this command:

```shell
npm install gitbook-plugin-baidu-tongji
```

or add this to your `book.json` config:

```json
{
    "plugin": ["baidu-tongji"]
}
```

and install it using:

```shell
gitbook install ./
```

### Use Plugin

1.登录百度统计官网，注册或者登录，[新增网站]后，点击[获取代码]，获取以下类似代码：

``` javascript

<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?6acsaqd94975e4sdckqwba3062835";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
</script>



```


2.将步骤一获取代码自动生成的token(即"6acsaqd94975e4sdckqwba3062835")添加到配置文件


```json
{
    "plugin": ["baidu-tongji"],
    "pluginsConfig": {
        "baidu-tongji": {
            "token": "6acsaqd94975e4sdckqwba3062835"
        }
    }
}
```

