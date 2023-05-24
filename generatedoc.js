const fs = require("fs");
const PDFDocument = require("pdfkit-table");
const { createCanvas, loadImage } = require('canvas');
const Chart = require('chart.js/auto');
var doc = new PDFDocument({ margin: 30, size: 'A4', bufferPages: true });
doc.registerFont('Inter', 'fonts/Inter.ttf');
doc.registerFont('Inter-Bold', 'fonts/Inter-Bold.otf');

const createChart = require('./chart/createChart');
// doc.pipe(fs.createWriteStream("./document.pdf"));

const generatepdf = (sampledata) => {

    return new Promise((resolve, reject) => {
        console.log("Generating Pdf Report..........");

        doc.fontSize(20).text(sampledata.title, 10, doc.page.height / 2, { align: 'center', valign: "center" });
        doc.fontSize(18).text(sampledata.subtitle, 10, doc.page.height / 1.9, { align: 'center', valign: "center" });

        function add_table(tableData) {
                const table = {
                    headers: tableData.data.headers,
                    datas: tableData.data.data
                }
                doc.addPage();
                doc.moveDown(1.5);
                doc.font("Inter-Bold").fontSize(16).text(tableData.title, 20, 50);
                if (tableData.data.secondaryHeaders) {
                    const sec = tableData.data.secondaryHeaders;
                    if (sec[2]) {
                        doc.font("Inter-Bold").fontSize(12).text(sec[1].label, 180, 70);
                        doc.font("Inter-Bold").fontSize(12).text(sec[2].label, 370, 70);
                    } else {
                        doc.font("Inter-Bold").fontSize(12).text(sec[1].label, 280, 70);
                    }
                }
                // let startWidth=20;
                // for(i of table.headers){
                //     // console.log(i,startWidth,"----i");
                //     doc.font("Helvetica-Bold").fontSize(12).text(i.label,startWidth, 90);
                //     startWidth=startWidth+i.width;
                //     // console.log(startWidth,"---startwidth");
                // }
                // doc.moveTo(20, 105).lineTo(20 + startWidth - 20, 105).stroke();
                doc.x = 20
                doc.y = 90//110
                // doc.x = 20;
                // doc.y = 90;
                // doc.on('pageAdded', () => {
                //     doc.x=20;
                //     doc.y = 70;
                // });
                doc.table(table, {
                    // hideHeader: true,
                    prepareHeader: () => { doc.font("Inter-Bold").fontSize(12); },
                    prepareRow: (row, indexColumn, indexRow, rectRow, rectCell) => { doc.font('Inter').fontSize(12); },
                });
   
        };

        function add_chart(chartData, chartConfig) {
                doc.addPage();
                doc.moveDown(2);
                // doc.fontSize(12).text(chartData.title, 50, 50, { align: 'left' });
                doc.font("Inter-Bold").fontSize(16).text(chartData.title, 20, 50);
                doc.moveDown(1.5);
                const pageWidth = doc.page.width;
                const pageHeight = doc.page.height;

                const canvas = createCanvas(pageWidth, pageHeight);
                const ctx = canvas.getContext('2d');
                const chart = new Chart(ctx, chartConfig);
                const chartImage = canvas.toBuffer('image/png');
                doc.image(chartImage, 50, 100, { fit: [pageWidth - 150, pageHeight - 200], align: 'center', valign: 'center' });

        };

        function add_no_data(data) {
            doc.addPage();
            doc.moveDown(2);
            const pageWidth = doc.page.width;
            const pageHeight = doc.page.height;
            doc.font("Inter-Bold").fontSize(16).text(data.title, 20, 50);
            doc.moveDown(1.5);
            doc.image('assets/NoData.png', 50, 100, {
                fit: [pageWidth - 150, pageHeight - 200],
                align: 'center',
                valign: 'center',
                margins: { left: 10, right: 10 }
            }
            );
        };

        for (let i = 0; i < sampledata.contents.length; i++) {

            if (sampledata.contents[i].type == 'table') {
                if (sampledata.contents[i].data.headers && sampledata.contents[i].data.data) {

                    const new_headers = sampledata.contents[i].data.headers.map((i) => ({
                        ...i,
                        "width": Number(i.flex) * 550,
                        valign: "center"
                    }));

                    sampledata.contents[i].data.headers = new_headers;
                    add_table(sampledata.contents[i]);
                }
                else {
                    add_no_data(sampledata.contents[i]);
                }
            }
            else if (sampledata.contents[i].type == 'sensor-table') {
                if (sampledata.contents[i].data.data.length != 0) {
                    const new_headers = sampledata.contents[i].data.headers.map((i) => ({
                        ...i,
                        "width": Number(i.flex) * 550
                    }));
                    sampledata.contents[i].data.headers = new_headers;
                    add_table(sampledata.contents[i]);
                }
                else {
                    add_no_data(sampledata.contents[i]);
                }
            } else {
                const config = createChart(sampledata.contents[i])
                if (config) {
                    add_chart(sampledata.contents[i], config);
                } else {
                    add_no_data(sampledata.contents[i])
                }
            }
        }

        let pages = doc.bufferedPageRange();

        for (let i = 0; i < pages.count; i++) {
            doc.switchToPage(i);
            const logoPath = 'assets/logo.png';
            const logoWidth = 70;
            const logoY = 10;
            const pageWidth = doc.page.width;
            const logoX = pageWidth - logoWidth - logoY;

            //Header: Add logo
            doc.image(logoPath, logoX, logoY, { width: logoWidth });
            doc.strokeColor("#aaaaaa")
                .lineWidth(1)
                .moveTo(10, logoY + 20)
                .lineTo(pageWidth - 10, logoY + 20)
                .stroke();

            //Footer: Add page number
            let oldBottomMargin = doc.page.margins.bottom;

            doc.page.margins.bottom = 0
            doc.strokeColor("#aaaaaa")
                .lineWidth(1)
                .moveTo(10, doc.page.height - 20)
                .lineTo(pageWidth - 10, doc.page.height - 20)
                .stroke();
            doc.font('Inter').fontSize(12).text(`© ${new Date().getFullYear()} Thingsup`, 10, doc.page.height - (oldBottomMargin / 2), { align: 'left' })
            doc.font('Inter').fontSize(12).text(`${i + 1}/${pages.count}`, 0, doc.page.height - (oldBottomMargin / 2), { align: 'right' })
            doc.page.margins.bottom = oldBottomMargin;
        }

        const buffers = [];
        doc.on('data', (buffer) => buffers.push(buffer));
        doc.on('end', () => resolve(Buffer.from(Buffer.concat(buffers))));
        doc.on('error', (error) => reject(error));
        doc.end();

    });
}

module.exports = generatepdf;