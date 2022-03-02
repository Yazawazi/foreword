# Foreword

这是一个用于生成格言图片的小程序，你可以使用它快速生成格言图片。你需要 Node.js 环境，安装时需要 `npm install`。

## 示例

```javascript
const foreword = require("./foreword.js")

foreword({
    width: 1920,
    height: 1080,
    font: "MingLiU",
    background: "#ed5a65",
    fontColor: "#ede3e7",
    content: "今年元夜时，月与灯依旧。\n不见去年人，泪湿春衫袖。",
    author: "—— 宋代 欧阳修 《生查子·元夕》"
})
```

使用该代码之后会在你的目录下生成一个 `foreword.png` 文件。

## 所有参数

名词解释：

* 图片模式：指使用图片来作为背景的左侧一半的格言显示模式；
* 图片背景模式：指图片覆盖作为背景的格言显示模式；
* 居中模式：指使用纯色背景或渐变背景，并且文字居中显示的格言显示模式。

1. `width`: 图片宽度，您必须要有一个宽度，否则会报错；
2. `height`: 图片高度，您必须要有一个高度，否则会报错，两者缺一不可；
3. `background`: 图片背景色，默认为 `#000000`；
4. `imagePath`: 图片路径（可以是 URI 或者本地路径），没有则使用 `居中模式`；
5. `half`: 是否使用 `图片模式` 否则使用 `图片背景模式`，默认为 `true`；
6. `startX`: 图片起始 X 坐标，默认为 `0`；
7. `startY`: 图片起始 Y 坐标，默认为 `0`；
8. `aWidth`: 图片裁剪宽度，默认为设置的宽度的一半；
9. `aHeight`: 图片裁剪高度，默认为设置的高度；
10. `linear`: 是否使用渐变背景，默认为 `false`；
11. `linearColor1`: 渐变背景起始颜色，默认为 `#ffffff88`；
12. `linearColor2`: 渐变背景结束颜色，默认为 `#00000088`；
13. `content`: 格言内容；
14. `author`: 格言作者；
15. `titleSize`: 标题字体大小，默认为 `52`；
16. `subSize`: 作者字体大小，默认为 `24`；
17. `font`: 字体，默认为 `Simsun`；
18. `fontColor`: 字体颜色，默认为 `#ffffff`；
19. `interval`: 作者和内容的间隔，默认为 `100`；
20. `save`: 保存图片文件名，默认为 `./foreword.png`;
21. `topOffset`: 标题的 `top` 偏移量，默认为 `0`；
