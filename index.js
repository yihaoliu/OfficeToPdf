var toPdf = require("office-to-pdf")
var fs = require("fs")
var wordBuffer = fs.readFileSync("./infile.pptx")

toPdf(wordBuffer).then(
    (pdfBuffer) => {
        fs.writeFileSync("./test.pdf", pdfBuffer)
    }, (err) => {
        console.log(err)
    }
)