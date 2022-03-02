'use strict';

const fs = require("fs")
const { createCanvas, loadImage } = require("canvas")

const foreword = (params) => {
    if (!params.height != !params.width) {
        return {
            "code": 400,
            "message": "Height and width must have all."
        }
    }
    const height = params.height
    const width = params.width
    const canvas = createCanvas(width, height)
    const content = canvas.getContext("2d")
    content.fillStyle = params.background || "#000000"
    content.fillRect(0, 0, width, height)
    if (params.imagePath) {
        loadImage(params.imagePath).then(image => {
            if (params.half) {
                content.drawImage(
                    image,
                    params.startX  || 0,
                    params.startY  || 0,
                    params.aWidth  || width / 2,
                    params.aHeight || height,
                    0,
                    0,
                    width / 2,
                    height
                )
            } else {
                const imageRatio = image.width / image.height
                const canvasRatio = width / height
                if (imageRatio > canvasRatio) {
                    content.drawImage(
                        image,
                        (image.width - (image.height * canvasRatio)) / 2,
                        0,
                        image.height * canvasRatio,
                        image.height,
                        width,
                        height
                    )
                } else {
                    content.drawImage(
                        image,
                        0,
                        (image.height - (image.width / canvasRatio)) / 2,
                        image.width,
                        image.width / canvasRatio,
                        0,
                        0,
                        width,
                        height
                    )
                }
            }
            if (params.linear) {
                const linearGradient = content.createLinearGradient(0, 0, width, height)
                linearGradient.addColorStop(0, params.linearColor1 || "#ffffff88")
                linearGradient.addColorStop(.75, params.linearColor1 || "#00000088")
                linearGradient.addColorStop(1, params.linearColor2 || "#00000088")
                content.fillStyle = linearGradient
                content.fillRect(0, 0, width, height)
            }
            const text = params.content  || "旧时王谢堂前燕，飞入寻常百姓家。"
            const author = params.author || "—— 唐代 刘禹锡 《乌衣巷》"
            content.font = `normal normal bold ${params.titleSize | 52}px ${params.font || "Simsun"}`
            content.fillStyle = params.fontColor || "#ffffff"
            content.textAlign = "center"
            if (!params.half) {
                content.fillText(text, width / 2, (height / 2) + (params.topOffset || 0))
            } else {
                content.fillText(text, width - width / 4, (height / 2) + (params.topOffset || 0))
            }
            content.font = `normal normal normal ${params.subSize | 24}px ${params.font || "Simsun"}`
            if (!params.half) {
                content.fillText(author, width / 2, height / 2 + (params.interval || 100))
            } else {
                content.fillText(author, width - width / 4, height / 2 + (params.interval || 100))
            }
            const buffer = canvas.toBuffer("image/png")
            fs.writeFileSync(params.save || "./foreword.png", buffer)
        })
    } else {
        if (params.linear) {
            const linearGradient = content.createLinearGradient(0, 0, width, height)
            linearGradient.addColorStop(0, params.linearColor1 || "#ffffff88")
            linearGradient.addColorStop(.75, params.linearColor1 || "#00000088")
            linearGradient.addColorStop(1, params.linearColor2 || "#00000088")
            content.fillStyle = linearGradient
            content.fillRect(0, 0, width, height)
        }
        const text = params.content  || "人面不知何处去，桃花依旧笑春风。"
        const author = params.author || "—— 唐代 崔护 《题都城南庄》"
        content.font = `normal normal bold ${params.titleSize | 52}px ${params.font || "Simsun"}`
        content.fillStyle = params.fontColor || "#ffffff"
        content.textAlign = "center"
        content.fillText(text, width / 2, (height / 2) + (params.topOffset || 0))
        content.font = `normal normal normal ${params.subSize | 24}px ${params.font || "Simsun"}`
        content.fillText(author, width / 2, height / 2 + (params.interval || 100))
        const buffer = canvas.toBuffer("image/png")
        fs.writeFileSync(params.save || "./foreword.png", buffer)
    }
    return {
        "code": 200,
        "message": "success"
    }
}

module.exports = foreword
